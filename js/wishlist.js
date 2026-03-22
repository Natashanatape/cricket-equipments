// Wishlist System
let wishlist = JSON.parse(localStorage.getItem('cricketProWishlist')) || [];

// Update wishlist count on all pages
function updateWishlistCount() {
    const wishlistCountElements = document.querySelectorAll('#wishlistCount');
    wishlistCountElements.forEach(el => {
        if (el) el.textContent = wishlist.length;
    });
}

// Add to wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const existingItem = wishlist.find(item => item.id == productId);
    
    if (existingItem) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item.id != productId);
        showToast('Removed from wishlist');
    } else {
        // Add to wishlist
        wishlist.push(product);
        showToast('Added to wishlist ❤️');
    }

    localStorage.setItem('cricketProWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    
    // Update button state if on product detail page
    updateWishlistButton(productId);
    
    // Refresh wishlist page if on it
    if (window.location.pathname.includes('wishlist.html')) {
        displayWishlist();
    }
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id == productId);
}

// Update wishlist button state
function updateWishlistButton(productId) {
    const wishlistBtns = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
    wishlistBtns.forEach(btn => {
        if (isInWishlist(productId)) {
            btn.innerHTML = '❤️ In Wishlist';
            btn.style.background = 'var(--primary)';
            btn.style.color = 'var(--dark)';
        } else {
            btn.innerHTML = '🤍 Add to Wishlist';
            btn.style.background = 'transparent';
            btn.style.color = 'var(--primary)';
        }
    });
}

// Display wishlist page
function displayWishlist() {
    const container = document.getElementById('wishlistContainer');
    
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist">
                <div class="empty-icon">💔</div>
                <h2>Your Wishlist is Empty</h2>
                <p>Save your favorite products to buy them later</p>
                <a href="products.html" class="btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="wishlist-actions">
            <h2>${wishlist.length} Item${wishlist.length > 1 ? 's' : ''} in Wishlist</h2>
            <button class="btn-clear-wishlist" onclick="clearWishlist()">Clear All</button>
        </div>
        <div class="wishlist-grid">
            ${wishlist.map(product => `
                <div class="wishlist-card">
                    <button class="wishlist-remove" onclick="addToWishlist(${product.id})" title="Remove from wishlist">
                        ✕
                    </button>
                    <a href="product-detail.html?id=${product.id}">
                        <div class="wishlist-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                    </a>
                    <div class="wishlist-info">
                        <h3>${product.name}</h3>
                        <p class="wishlist-desc">${product.desc}</p>
                        <p class="wishlist-price">₹${product.price.toLocaleString()}</p>
                        <div class="wishlist-actions-btns">
                            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                            <a href="product-detail.html?id=${product.id}" class="btn-view-detail">View Details</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Clear wishlist
function clearWishlist() {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
        wishlist = [];
        localStorage.setItem('cricketProWishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        displayWishlist();
        showToast('Wishlist cleared');
    }
}

// Wishlist button click - go to wishlist page
const wishlistBtn = document.getElementById('wishlistBtn');
if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
        window.location.href = 'wishlist.html';
    });
}

// Initialize wishlist count on page load
updateWishlistCount();

// Load wishlist page if on it
if (window.location.pathname.includes('wishlist.html')) {
    window.addEventListener('DOMContentLoaded', displayWishlist);
}
