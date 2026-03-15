// Quick View Modal functionality
let quickViewModal = null;

// Open Quick View Modal
function openQuickView(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    const modalContent = document.getElementById('quickViewContent');

    modalContent.innerHTML = `
        <button class="quick-view-close" onclick="closeQuickView()">×</button>
        <div class="quick-view-grid">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="quick-view-wishlist-btn" onclick="toggleWishlistFromQuickView(${product.id})">
                    ${isInWishlist(product.id) ? '♥' : '♡'}
                </button>
            </div>
            <div class="quick-view-details">
                <span class="quick-view-category">${product.category.toUpperCase()}</span>
                <h2>${product.name}</h2>
                <div class="quick-view-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="rating-count">(${Math.floor(Math.random() * 500) + 100} reviews)</span>
                </div>
                <p class="quick-view-price">₹${product.price.toLocaleString()}</p>
                <p class="quick-view-description">${product.description || 'Premium quality cricket equipment from trusted brands. Perfect for professional and amateur players.'}</p>
                
                <div class="quick-view-features">
                    <h4>Key Features:</h4>
                    <ul>
                        <li>✓ 100% Authentic Product</li>
                        <li>✓ Premium Quality Material</li>
                        <li>✓ Professional Grade</li>
                        <li>✓ Durable & Long-lasting</li>
                    </ul>
                </div>

                <div class="quick-view-stock">
                    <span class="stock-badge in-stock">In Stock</span>
                    <span class="urgency-text">Only ${Math.floor(Math.random() * 10) + 3} left!</span>
                </div>

                <div class="quick-view-actions">
                    <button class="btn-quick-add" onclick="addToCartFromQuickView(${product.id})">
                        Add to Cart
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="btn-view-full">
                        View Full Details →
                    </a>
                </div>

                <div class="quick-view-meta">
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Brand:</strong> ${product.brand || 'Premium Brand'}</p>
                    <p><strong>SKU:</strong> CP${product.id.toString().padStart(4, '0')}</p>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Quick View Modal
function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add to cart from quick view
function addToCartFromQuickView(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    addToCart(product);
    showToast('Item added to cart!');
    
    // Update button text temporarily
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Added to Cart';
    btn.style.background = '#00c853';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);
}

// Toggle wishlist from quick view
function toggleWishlistFromQuickView(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    toggleWishlist(product);
    
    // Update heart icon
    const btn = event.target;
    btn.textContent = isInWishlist(productId) ? '❤️' : '🤍';
}

// Check if product is in wishlist
function isInWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.some(item => item.id === productId);
}

// Close modal on outside click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target === modal) {
        closeQuickView();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeQuickView();
    }
});
