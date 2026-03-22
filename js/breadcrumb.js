// Breadcrumb Navigation functionality

// Generate breadcrumb for product detail page
function generateProductBreadcrumb(product) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb || !product) return;

    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span class="breadcrumb-separator">›</span>
        <a href="products.html">Products</a>
        <span class="breadcrumb-separator">›</span>
        <a href="products.html?category=${product.category}">${categoryName}</a>
        <span class="breadcrumb-separator">›</span>
        <span class="breadcrumb-current">${product.name}</span>
    `;
}

// Generate breadcrumb for products page
function generateProductsPageBreadcrumb(category = null) {
    const breadcrumbContainer = document.querySelector('.products-header');
    if (!breadcrumbContainer) return;

    // Check if breadcrumb already exists
    let breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) {
        breadcrumb = document.createElement('div');
        breadcrumb.className = 'breadcrumb';
        breadcrumbContainer.insertBefore(breadcrumb, breadcrumbContainer.firstChild);
    }

    if (category && category !== 'all') {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <span class="breadcrumb-separator">›</span>
            <a href="products.html">Products</a>
            <span class="breadcrumb-separator">›</span>
            <span class="breadcrumb-current">${categoryName}</span>
        `;
    } else {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <span class="breadcrumb-separator">›</span>
            <span class="breadcrumb-current">All Products</span>
        `;
    }
}

// Generate breadcrumb for checkout page
function generateCheckoutBreadcrumb(step) {
    const breadcrumbContainer = document.querySelector('.checkout-header');
    if (!breadcrumbContainer) return;

    let breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) {
        breadcrumb = document.createElement('div');
        breadcrumb.className = 'breadcrumb';
        breadcrumbContainer.insertBefore(breadcrumb, breadcrumbContainer.firstChild);
    }

    const steps = {
        'checkout': 'Checkout',
        'payment': 'Payment',
        'success': 'Order Confirmed'
    };

    breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span class="breadcrumb-separator">›</span>
        <a href="products.html">Products</a>
        <span class="breadcrumb-separator">›</span>
        <a href="checkout.html">Cart</a>
        <span class="breadcrumb-separator">›</span>
        <span class="breadcrumb-current">${steps[step] || 'Checkout'}</span>
    `;
}

// Export functions
window.breadcrumbManager = {
    product: generateProductBreadcrumb,
    productsPage: generateProductsPageBreadcrumb,
    checkout: generateCheckoutBreadcrumb
};
