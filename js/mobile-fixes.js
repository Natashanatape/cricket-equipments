// Mobile Responsiveness JavaScript Fixes

document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navIcons = document.querySelector('.nav-icons');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Show/hide cart and wishlist buttons on mobile
            if (window.innerWidth <= 768 && navIcons) {
                navIcons.classList.toggle('show');
            }
        });
        
        // Close mobile menu when clicking on links
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if (navIcons) {
                    navIcons.classList.remove('show');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && 
                !navLinks.contains(e.target) && 
                (!navIcons || !navIcons.contains(e.target))) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if (navIcons) {
                    navIcons.classList.remove('show');
                }
            }
        });
    }
    
    // Handle cart and wishlist button clicks
    const wishlistBtn = document.getElementById('wishlistBtn');
    const cartBtn = document.getElementById('cartBtn');
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'wishlist.html';
        });
    }
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Try to open cart sidebar first, fallback to checkout page
            if (typeof toggleCartSidebar === 'function') {
                toggleCartSidebar();
            } else {
                window.location.href = 'checkout.html';
            }
        });
    }
    
    // Update cart and wishlist counts
    function updateCounts() {
        const wishlistCount = localStorage.getItem('wishlistCount') || '0';
        const cartCount = localStorage.getItem('cartCount') || '0';
        
        const wishlistCountEl = document.getElementById('wishlistCount');
        const cartCountEl = document.getElementById('cartCount');
        
        if (wishlistCountEl) wishlistCountEl.textContent = wishlistCount;
        if (cartCountEl) cartCountEl.textContent = cartCount;
    }
    
    // Initial count update
    updateCounts();
    
    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    
    // Handle image loading errors
    function handleImageError(img) {
        img.style.background = '#f5f5f5';
        img.style.border = '1px solid #e0e0e0';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.color = '#999';
        img.style.fontSize = '14px';
        img.style.minHeight = '150px';
        img.innerHTML = '<span>Image not found</span>';
        img.removeAttribute('src');
    }
    
    // Add error handling to all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
        
        // Check if image is already broken
        if (img.complete && img.naturalHeight === 0) {
            handleImageError(img);
        }
    });
    
    // Handle viewport changes
    function handleViewportChange() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
            // Close mobile menu if open
            if (hamburger && navLinks && navIcons) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                navIcons.classList.remove('show');
            }
        }
    }
    
    // Initial check
    handleViewportChange();
    
    // Listen for viewport changes
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleViewportChange, 250);
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Chatbot is now handled by chatbot.js - removed duplicate initialization
});