// Price Range Filter functionality
let minPrice = 0;
let maxPrice = 50000;
let currentMinPrice = 0;
let currentMaxPrice = 50000;

// Initialize price filter
function initPriceFilter() {
    const minSlider = document.getElementById('minPriceSlider');
    const maxSlider = document.getElementById('maxPriceSlider');
    const minPriceDisplay = document.getElementById('minPriceDisplay');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const priceTrack = document.querySelector('.price-track-fill');

    if (!minSlider || !maxSlider) return;

    // Set initial values
    minSlider.value = currentMinPrice;
    maxSlider.value = currentMaxPrice;
    updatePriceDisplay();
    updateTrackFill();

    // Min slider event
    minSlider.addEventListener('input', function() {
        currentMinPrice = parseInt(this.value);
        
        // Prevent overlap
        if (currentMinPrice > currentMaxPrice - 500) {
            currentMinPrice = currentMaxPrice - 500;
            this.value = currentMinPrice;
        }
        
        updatePriceDisplay();
        updateTrackFill();
    });

    // Max slider event
    maxSlider.addEventListener('input', function() {
        currentMaxPrice = parseInt(this.value);
        
        // Prevent overlap
        if (currentMaxPrice < currentMinPrice + 500) {
            currentMaxPrice = currentMinPrice + 500;
            this.value = currentMaxPrice;
        }
        
        updatePriceDisplay();
        updateTrackFill();
    });

    // Apply filter on slider release
    minSlider.addEventListener('change', applyPriceFilter);
    maxSlider.addEventListener('change', applyPriceFilter);

    function updatePriceDisplay() {
        if (minPriceDisplay) minPriceDisplay.textContent = '₹' + currentMinPrice.toLocaleString();
        if (maxPriceDisplay) maxPriceDisplay.textContent = '₹' + currentMaxPrice.toLocaleString();
    }

    function updateTrackFill() {
        if (!priceTrack) return;
        
        const percentMin = (currentMinPrice / maxPrice) * 100;
        const percentMax = (currentMaxPrice / maxPrice) * 100;
        
        priceTrack.style.left = percentMin + '%';
        priceTrack.style.width = (percentMax - percentMin) + '%';
    }
}

// Apply price filter
function applyPriceFilter() {
    if (typeof displayProducts === 'function') {
        displayProducts();
    }
}

// Reset price filter
function resetPriceFilter() {
    currentMinPrice = 0;
    currentMaxPrice = 50000;
    
    const minSlider = document.getElementById('minPriceSlider');
    const maxSlider = document.getElementById('maxPriceSlider');
    
    if (minSlider) minSlider.value = currentMinPrice;
    if (maxSlider) maxSlider.value = currentMaxPrice;
    
    initPriceFilter();
    applyPriceFilter();
}

// Export for use in products.js
window.priceFilter = {
    min: () => currentMinPrice,
    max: () => currentMaxPrice,
    reset: resetPriceFilter
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPriceFilter);
