// Product Comparison functionality

let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
const MAX_COMPARE = 3;

// Add product to compare
function addToCompare(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    // Check if already in compare
    if (compareList.some(p => p.id === productId)) {
        showToast('Product already in comparison!');
        return;
    }

    // Check max limit
    if (compareList.length >= MAX_COMPARE) {
        showToast(`You can compare maximum ${MAX_COMPARE} products!`);
        return;
    }

    compareList.push(product);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCount();
    showToast('Added to comparison!');
}

// Remove product from compare
function removeFromCompare(productId) {
    compareList = compareList.filter(p => p.id !== productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCount();
    
    // Refresh comparison modal if open
    if (document.getElementById('compareModal').style.display === 'flex') {
        showCompareModal();
    }
}

// Clear all compare products
function clearCompare() {
    compareList = [];
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCount();
    closeCompareModal();
    showToast('Comparison cleared!');
}

// Update compare count badge
function updateCompareCount() {
    const countBadge = document.getElementById('compareCount');
    const compareBtn = document.getElementById('compareBtn');
    
    if (countBadge) {
        countBadge.textContent = compareList.length;
    }
    
    if (compareBtn) {
        if (compareList.length > 0) {
            compareBtn.style.display = 'flex';
        } else {
            compareBtn.style.display = 'none';
        }
    }
}

// Show comparison modal
function showCompareModal() {
    const modal = document.getElementById('compareModal');
    const compareContent = document.getElementById('compareContent');
    
    if (compareList.length === 0) {
        compareContent.innerHTML = `
            <div class="compare-empty">
                <p>🔄 No products to compare</p>
                <p class="compare-empty-text">Add products from the products page to compare them</p>
                <a href="products.html" class="btn-primary">Browse Products</a>
            </div>
        `;
    } else {
        compareContent.innerHTML = `
            <div class="compare-header">
                <h2>Compare Products (${compareList.length}/${MAX_COMPARE})</h2>
                <div class="compare-header-actions">
                    <button class="btn-clear-compare" onclick="clearCompare()">Clear All</button>
                    <button class="btn-close-compare" onclick="closeCompareModal()">×</button>
                </div>
            </div>
            <div class="compare-table-wrapper">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            ${compareList.map(product => `
                                <th>
                                    <div class="compare-product-header">
                                        <img src="${product.image}" alt="${product.name}">
                                        <h4>${product.name}</h4>
                                        <button class="btn-remove-compare" onclick="removeFromCompare(${product.id})">Remove</button>
                                    </div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="compare-label">Price</td>
                            ${compareList.map(product => `
                                <td class="compare-value price">₹${product.price.toLocaleString()}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td class="compare-label">Category</td>
                            ${compareList.map(product => `
                                <td class="compare-value">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td class="compare-label">Brand</td>
                            ${compareList.map(product => `
                                <td class="compare-value">${product.brand || 'Premium Brand'}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td class="compare-label">Description</td>
                            ${compareList.map(product => `
                                <td class="compare-value">${product.desc}</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td class="compare-label">Rating</td>
                            ${compareList.map(() => `
                                <td class="compare-value">⭐⭐⭐⭐⭐</td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td class="compare-label">Actions</td>
                            ${compareList.map(product => `
                                <td class="compare-value">
                                    <button class="btn-compare-add-cart" onclick="addToCart(${product.id}); showToast('Added to cart!')">Add to Cart</button>
                                    <a href="product-detail.html?id=${product.id}" class="btn-compare-view">View Details</a>
                                </td>
                            `).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close comparison modal
function closeCompareModal() {
    const modal = document.getElementById('compareModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize compare on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCompareCount();
});

// Export functions
window.compareManager = {
    add: addToCompare,
    remove: removeFromCompare,
    clear: clearCompare,
    show: showCompareModal,
    close: closeCompareModal
};
