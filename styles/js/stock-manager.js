// Stock Status & Urgency functionality
const stockLevels = {};
const viewerCounts = {};

// Generate random stock level for product
function getStockLevel(productId) {
    if (!stockLevels[productId]) {
        const random = Math.random();
        if (random < 0.7) {
            // 70% in stock (5-20 items)
            stockLevels[productId] = {
                status: 'in-stock',
                count: Math.floor(Math.random() * 16) + 5,
                label: 'In Stock'
            };
        } else if (random < 0.95) {
            // 25% low stock (1-4 items)
            stockLevels[productId] = {
                status: 'low-stock',
                count: Math.floor(Math.random() * 4) + 1,
                label: 'Low Stock'
            };
        } else {
            // 5% out of stock
            stockLevels[productId] = {
                status: 'out-of-stock',
                count: 0,
                label: 'Out of Stock'
            };
        }
    }
    return stockLevels[productId];
}

// Generate random viewer count
function getViewerCount(productId) {
    if (!viewerCounts[productId]) {
        viewerCounts[productId] = Math.floor(Math.random() * 20) + 3; // 3-22 viewers
    }
    return viewerCounts[productId];
}

// Get stock badge HTML
function getStockBadge(productId) {
    const stock = getStockLevel(productId);
    return `<span class="stock-badge ${stock.status}">${stock.label}</span>`;
}

// Get urgency message HTML
function getUrgencyMessage(productId) {
    const stock = getStockLevel(productId);
    
    if (stock.status === 'out-of-stock') {
        return '<span class="urgency-message out-of-stock">Currently Unavailable</span>';
    } else if (stock.status === 'low-stock') {
        return `<span class="urgency-message low-stock">Only ${stock.count} left in stock!</span>`;
    } else if (stock.count <= 10) {
        return `<span class="urgency-message hurry">Hurry! Only ${stock.count} left!</span>`;
    } else {
        return ''; // No message for high stock items
    }
}

// Get full stock info HTML
function getStockInfo(productId) {
    return `
        <div class="product-stock-info">
            ${getStockBadge(productId)}
            ${getUrgencyMessage(productId)}
        </div>
    `;
}

// Check if product is available
function isProductAvailable(productId) {
    const stock = getStockLevel(productId);
    return stock.status !== 'out-of-stock';
}

// Update viewer count periodically (simulate live viewers)
function updateViewerCounts() {
    Object.keys(viewerCounts).forEach(productId => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        viewerCounts[productId] = Math.max(1, Math.min(25, viewerCounts[productId] + change));
    });
}

// Update viewers every 10 seconds
setInterval(updateViewerCounts, 10000);

// Export functions
window.stockManager = {
    getStockLevel,
    getViewerCount,
    getStockBadge,
    getUrgencyMessage,
    getStockInfo,
    isProductAvailable
};
