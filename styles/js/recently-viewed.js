// Recently Viewed Products System
let recentlyViewed = JSON.parse(localStorage.getItem('cricketProRecentlyViewed')) || [];

// Add product to recently viewed
function addToRecentlyViewed(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.id != productId);
    
    // Add to beginning
    recentlyViewed.unshift(product);
    
    // Keep only last 8 items
    if (recentlyViewed.length > 8) {
        recentlyViewed = recentlyViewed.slice(0, 8);
    }
    
    localStorage.setItem('cricketProRecentlyViewed', JSON.stringify(recentlyViewed));
}

// Display recently viewed on homepage
function displayRecentlyViewedHome() {
    const container = document.getElementById('recentlyViewedHome');
    if (!container || recentlyViewed.length === 0) return;

    const section = container.closest('.section');
    if (section) section.style.display = 'block';

    container.innerHTML = recentlyViewed.slice(0, 4).map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <div class="product-card-actions">
                <a href="product-detail.html?id=${product.id}" class="btn-view-detail">View Details</a>
                <button class="btn-cart add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Display recently viewed on products page
function displayRecentlyViewedProducts() {
    const container = document.getElementById('recentlyViewedProducts');
    if (!container || recentlyViewed.length === 0) return;

    const section = container.closest('.section');
    if (section) section.style.display = 'block';

    container.innerHTML = recentlyViewed.slice(0, 6).map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <div class="product-card-actions">
                <a href="product-detail.html?id=${product.id}" class="btn-view-detail">View Details</a>
                <button class="btn-cart add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    window.addEventListener('DOMContentLoaded', displayRecentlyViewedHome);
}

if (window.location.pathname.includes('products.html')) {
    window.addEventListener('DOMContentLoaded', displayRecentlyViewedProducts);
}
