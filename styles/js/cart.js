// Cart System
let cart = JSON.parse(localStorage.getItem('cricketProCart')) || [];

// Update cart count on all pages
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id == productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    localStorage.setItem('cricketProCart', JSON.stringify(cart));
    updateCartCount();
    showToast('Item added to cart!');
    
    // Cart button animation
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.classList.add('bump');
        setTimeout(() => cartBtn.classList.remove('bump'), 250);
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// Initialize cart count on page load
updateCartCount();

// Cart button click - open cart sidebar
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        openCartSidebar();
    });
}

// Open cart sidebar
function openCartSidebar() {
    let cartSidebar = document.getElementById('cartSidebar');
    
    if (!cartSidebar) {
        // Create cart sidebar if doesn't exist
        cartSidebar = document.createElement('div');
        cartSidebar.id = 'cartSidebar';
        cartSidebar.className = 'cart-sidebar';
        document.body.appendChild(cartSidebar);
    }
    
    renderCart();
    cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart sidebar
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Continue shopping - close cart and go to products page
function continueShopping() {
    closeCartSidebar();
    // If not on products page, redirect to it
    if (!window.location.pathname.includes('products.html')) {
        window.location.href = 'products.html';
    }
}

// Render cart
function renderCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (!cartSidebar) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        cartSidebar.innerHTML = `
            <div class="cart-header">
                <h2>Shopping Cart</h2>
                <button class="cart-close" onclick="closeCartSidebar()">✕</button>
            </div>
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <button class="btn-primary" onclick="continueShopping()">Continue Shopping</button>
            </div>
        `;
        return;
    }

    cartSidebar.innerHTML = `
        <div class="cart-header">
            <h2>Shopping Cart (${cart.length})</h2>
            <button class="cart-close" onclick="closeCartSidebar()">✕</button>
        </div>
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
                        <div class="cart-item-quantity">
                            <button onclick="decreaseQuantity(${item.id})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-footer">
            <div class="cart-subtotal">
                <span>Subtotal:</span>
                <span class="cart-total">₹${subtotal.toLocaleString()}</span>
            </div>
            <button class="btn-checkout" onclick="goToCheckout()">Proceed to Checkout</button>
            <button class="btn-continue" onclick="continueShopping()">Continue Shopping</button>
        </div>
    `;
}

// Increase quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id == productId);
    if (item) {
        item.quantity++;
        localStorage.setItem('cricketProCart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id == productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cricketProCart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem('cricketProCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast('Item removed from cart');
}

// Go to checkout
function goToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar && cartSidebar.classList.contains('active')) {
        if (!cartSidebar.contains(e.target) && !e.target.closest('#cartBtn')) {
            closeCartSidebar();
        }
    }
});
