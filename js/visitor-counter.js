// Live Visitor Counter functionality

let onlineUsers = Math.floor(Math.random() * 200) + 50; // 50-250 users
let productViewers = {};

// Initialize visitor counter
function initVisitorCounter() {
    // Create visitor counter badge
    const badge = document.createElement('div');
    badge.className = 'visitor-counter-badge';
    badge.id = 'visitorCounterBadge';
    badge.innerHTML = `
        <div class="visitor-icon">👥</div>
        <div class="visitor-info">
            <span class="visitor-count" id="onlineCount">${onlineUsers}</span>
            <span class="visitor-label">online now</span>
        </div>
    `;
    document.body.appendChild(badge);

    // Update count periodically
    setInterval(updateOnlineCount, 5000); // Update every 5 seconds
}

// Update online user count
function updateOnlineCount() {
    const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
    onlineUsers = Math.max(30, Math.min(300, onlineUsers + change));
    
    const countElement = document.getElementById('onlineCount');
    if (countElement) {
        animateCountChange(countElement, onlineUsers);
    }
}

// Animate count change
function animateCountChange(element, newValue) {
    const currentValue = parseInt(element.textContent);
    const diff = newValue - currentValue;
    const steps = 10;
    const stepValue = diff / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
        currentStep++;
        const value = Math.round(currentValue + (stepValue * currentStep));
        element.textContent = value;
        
        if (currentStep >= steps) {
            clearInterval(interval);
            element.textContent = newValue;
        }
    }, 50);
}

// Get product viewers count
function getProductViewers(productId) {
    if (!productViewers[productId]) {
        productViewers[productId] = Math.floor(Math.random() * 25) + 5; // 5-30 viewers
    }
    return productViewers[productId];
}

// Show product viewers badge on product detail page
function showProductViewersBadge(productId) {
    const viewers = getProductViewers(productId);
    const badge = document.createElement('div');
    badge.className = 'product-viewers-badge';
    badge.innerHTML = `
        <span class="viewers-icon">👁️</span>
        <span class="viewers-text">${viewers} people viewing this product</span>
    `;
    
    const productInfo = document.querySelector('.product-detail-info');
    if (productInfo) {
        const firstChild = productInfo.firstChild;
        productInfo.insertBefore(badge, firstChild);
    }

    // Update viewers count periodically
    setInterval(() => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        productViewers[productId] = Math.max(3, Math.min(40, productViewers[productId] + change));
        badge.querySelector('.viewers-text').textContent = `${productViewers[productId]} people viewing this product`;
    }, 8000);
}

// Show trending badge on popular products
function addTrendingBadges() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Randomly mark some products as trending (20% chance)
        if (Math.random() < 0.2) {
            const trendingBadge = document.createElement('div');
            trendingBadge.className = 'trending-badge';
            trendingBadge.innerHTML = '🔥 Trending';
            
            const imageWrapper = card.querySelector('.product-image-wrapper');
            if (imageWrapper) {
                imageWrapper.appendChild(trendingBadge);
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initVisitorCounter();
    
    // Add trending badges on products page
    if (window.location.pathname.includes('products.html')) {
        setTimeout(addTrendingBadges, 1000);
    }
    
    // Show product viewers on product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            setTimeout(() => showProductViewersBadge(productId), 500);
        }
    }
});

// Export functions
window.visitorCounter = {
    getOnlineCount: () => onlineUsers,
    getProductViewers: getProductViewers,
    showProductBadge: showProductViewersBadge
};
