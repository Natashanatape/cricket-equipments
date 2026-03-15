// Product Reviews & Ratings System

// Get reviews for a product
function getProductReviews(productId) {
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || {};
    return allReviews[productId] || [];
}

// Add review
function addReview(productId, reviewData) {
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || {};
    
    if (!allReviews[productId]) {
        allReviews[productId] = [];
    }
    
    const review = {
        id: Date.now(),
        productId: productId,
        userName: reviewData.userName,
        rating: reviewData.rating,
        title: reviewData.title,
        comment: reviewData.comment,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now(),
        helpful: 0
    };
    
    allReviews[productId].unshift(review);
    localStorage.setItem('productReviews', JSON.stringify(allReviews));
    
    return review;
}

// Calculate average rating
function getAverageRating(productId) {
    const reviews = getProductReviews(productId);
    
    if (reviews.length === 0) {
        return { average: 0, count: 0 };
    }
    
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const average = (sum / reviews.length).toFixed(1);
    
    return { average: parseFloat(average), count: reviews.length };
}

// Get rating distribution
function getRatingDistribution(productId) {
    const reviews = getProductReviews(productId);
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach(review => {
        distribution[review.rating]++;
    });
    
    return distribution;
}

// Mark review as helpful
function markReviewHelpful(productId, reviewId) {
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || {};
    const reviews = allReviews[productId] || [];
    
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.helpful++;
        localStorage.setItem('productReviews', JSON.stringify(allReviews));
    }
}

// Display reviews on product page
function displayProductReviews(productId) {
    const reviews = getProductReviews(productId);
    const ratingData = getAverageRating(productId);
    const distribution = getRatingDistribution(productId);
    
    // Update rating summary
    const ratingStars = document.querySelector('.product-rating .stars');
    const ratingCount = document.querySelector('.product-rating .rating-count');
    
    if (ratingStars && ratingCount) {
        ratingStars.innerHTML = generateStarHTML(ratingData.average);
        ratingCount.textContent = `(${ratingData.count} reviews)`;
    }
    
    // Display reviews section
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = `
        <div class="reviews-summary">
            <div class="reviews-summary-left">
                <div class="average-rating-large">${ratingData.average}</div>
                <div class="average-stars">${generateStarHTML(ratingData.average)}</div>
                <div class="total-reviews">${ratingData.count} reviews</div>
            </div>
            <div class="reviews-summary-right">
                ${[5, 4, 3, 2, 1].map(star => {
                    const count = distribution[star];
                    const percentage = ratingData.count > 0 ? (count / ratingData.count * 100).toFixed(0) : 0;
                    return `
                        <div class="rating-bar">
                            <span class="rating-label">${star} ★</span>
                            <div class="rating-bar-bg">
                                <div class="rating-bar-fill" style="width: ${percentage}%"></div>
                            </div>
                            <span class="rating-count">${count}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="reviews-actions">
            <button class="btn-write-review" onclick="openReviewModal()">Write a Review</button>
        </div>
        
        <div class="reviews-list">
            ${reviews.length === 0 ? `
                <div class="no-reviews">
                    <p>No reviews yet. Be the first to review this product!</p>
                </div>
            ` : reviews.map(review => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-user">
                            <div class="user-avatar">${review.userName.charAt(0).toUpperCase()}</div>
                            <div class="user-info">
                                <h4>${review.userName}</h4>
                                <div class="review-stars">${generateStarHTML(review.rating)}</div>
                            </div>
                        </div>
                        <div class="review-date">${review.date}</div>
                    </div>
                    <div class="review-content">
                        <h3>${review.title}</h3>
                        <p>${review.comment}</p>
                    </div>
                    <div class="review-footer">
                        <button class="btn-helpful" onclick="markHelpful(${productId}, ${review.id})">
                            👍 Helpful (${review.helpful})
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Generate star HTML
function generateStarHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let html = '';
    for (let i = 0; i < fullStars; i++) html += '★';
    if (hasHalfStar) html += '⯨';
    for (let i = 0; i < emptyStars; i++) html += '☆';
    
    return html;
}

// Open review modal
function openReviewModal() {
    const modal = document.getElementById('reviewModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Close review modal
function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('reviewForm').reset();
        setRating(0);
    }
}

// Set rating
let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.rating-star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Submit review
function submitReview(productId) {
    const form = document.getElementById('reviewForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    if (selectedRating === 0) {
        alert('Please select a rating');
        return;
    }
    
    const reviewData = {
        userName: form.userName.value,
        rating: selectedRating,
        title: form.reviewTitle.value,
        comment: form.reviewComment.value
    };
    
    addReview(productId, reviewData);
    closeReviewModal();
    displayProductReviews(productId);
    showToast('Review submitted successfully!');
}

// Mark review as helpful
function markHelpful(productId, reviewId) {
    markReviewHelpful(productId, reviewId);
    displayProductReviews(productId);
    showToast('Thank you for your feedback!');
}
