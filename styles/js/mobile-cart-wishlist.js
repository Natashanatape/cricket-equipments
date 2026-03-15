// Mobile Cart and Wishlist Click-to-Expand Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.cart-btn');
    const wishlistBtn = document.querySelector('.wishlist-btn');
    
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    function toggleExpand(btn) {
        if (!isMobile()) return;
        
        // Close other button if expanded
        const otherBtn = btn === cartBtn ? wishlistBtn : cartBtn;
        if (otherBtn && otherBtn.classList.contains('expanded')) {
            otherBtn.classList.remove('expanded');
        }
        
        // Toggle current button
        btn.classList.toggle('expanded');
        
        // Auto-collapse after 3 seconds
        if (btn.classList.contains('expanded')) {
            setTimeout(() => {
                btn.classList.remove('expanded');
            }, 3000);
        }
    }
    
    // Add click handlers
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                toggleExpand(this);
                
                // If expanded, navigate after delay
                if (this.classList.contains('expanded')) {
                    setTimeout(() => {
                        window.location.href = this.href || 'checkout.html';
                    }, 1500);
                }
            }
        });
    }
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                toggleExpand(this);
                
                // If expanded, navigate after delay
                if (this.classList.contains('expanded')) {
                    setTimeout(() => {
                        window.location.href = this.href || 'wishlist.html';
                    }, 1500);
                }
            }
        });
    }
    
    // Close expanded buttons when clicking outside
    document.addEventListener('click', function(e) {
        if (!isMobile()) return;
        
        if (!e.target.closest('.nav-icons')) {
            if (cartBtn) cartBtn.classList.remove('expanded');
            if (wishlistBtn) wishlistBtn.classList.remove('expanded');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            if (cartBtn) cartBtn.classList.remove('expanded');
            if (wishlistBtn) wishlistBtn.classList.remove('expanded');
        }
    });
});