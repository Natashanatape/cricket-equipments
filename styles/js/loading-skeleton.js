// Loading Skeleton functionality

// Show loading skeletons
function showLoadingSkeletons(count = 12) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const skeletons = Array(count).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-text skeleton-title"></div>
            <div class="skeleton-text skeleton-desc"></div>
            <div class="skeleton-text skeleton-price"></div>
            <div class="skeleton-buttons">
                <div class="skeleton-button"></div>
                <div class="skeleton-button"></div>
            </div>
        </div>
    `).join('');

    grid.innerHTML = `<div class="category-products-grid">${skeletons}</div>`;
}

// Hide loading skeletons and show products
function hideLoadingSkeletons() {
    // This will be called after products are loaded
    // The displayProducts function will replace skeleton content
}

// Simulate loading delay for better UX
function loadProductsWithSkeleton(callback, delay = 800) {
    showLoadingSkeletons();
    
    setTimeout(() => {
        callback();
        hideLoadingSkeletons();
    }, delay);
}

// Export functions
window.loadingManager = {
    show: showLoadingSkeletons,
    hide: hideLoadingSkeletons,
    loadWithSkeleton: loadProductsWithSkeleton
};
