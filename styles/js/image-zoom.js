// Product Image Zoom System

function initImageZoom() {
    const productImage = document.querySelector('.detail-img');
    const imageContainer = document.querySelector('.product-detail-image');
    
    if (!productImage || !imageContainer) return;

    // Create zoom lens
    const zoomLens = document.createElement('div');
    zoomLens.className = 'zoom-lens';
    imageContainer.appendChild(zoomLens);

    // Create zoom result container
    const zoomResult = document.createElement('div');
    zoomResult.className = 'zoom-result';
    zoomResult.id = 'zoomResult';
    imageContainer.appendChild(zoomResult);

    // Calculate zoom ratio
    const cx = zoomResult.offsetWidth / zoomLens.offsetWidth;
    const cy = zoomResult.offsetHeight / zoomLens.offsetHeight;

    // Set background image for zoom result
    zoomResult.style.backgroundImage = `url('${productImage.src}')`;
    zoomResult.style.backgroundSize = `${productImage.width * cx}px ${productImage.height * cy}px`;

    // Mouse move event
    productImage.addEventListener('mousemove', function(e) {
        moveLens(e);
    });

    zoomLens.addEventListener('mousemove', function(e) {
        moveLens(e);
    });

    // Touch events for mobile
    productImage.addEventListener('touchmove', function(e) {
        e.preventDefault();
        moveLens(e);
    });

    function moveLens(e) {
        e.preventDefault();
        
        // Show zoom elements
        zoomLens.style.display = 'block';
        zoomResult.style.display = 'block';

        // Get cursor position
        const pos = getCursorPos(e);
        
        // Calculate lens position
        let x = pos.x - (zoomLens.offsetWidth / 2);
        let y = pos.y - (zoomLens.offsetHeight / 2);

        // Prevent lens from going outside image
        if (x > productImage.width - zoomLens.offsetWidth) {
            x = productImage.width - zoomLens.offsetWidth;
        }
        if (x < 0) x = 0;
        if (y > productImage.height - zoomLens.offsetHeight) {
            y = productImage.height - zoomLens.offsetHeight;
        }
        if (y < 0) y = 0;

        // Set lens position
        zoomLens.style.left = x + 'px';
        zoomLens.style.top = y + 'px';

        // Display zoomed area
        zoomResult.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    function getCursorPos(e) {
        const a = productImage.getBoundingClientRect();
        let x = e.pageX - a.left;
        let y = e.pageY - a.top;
        
        // Adjust for page scroll
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        
        return { x: x, y: y };
    }

    // Hide zoom on mouse leave
    imageContainer.addEventListener('mouseleave', function() {
        zoomLens.style.display = 'none';
        zoomResult.style.display = 'none';
    });

    // Click to toggle fullscreen zoom
    productImage.addEventListener('click', function() {
        openFullscreenZoom(productImage.src);
    });
}

// Fullscreen zoom modal
function openFullscreenZoom(imageSrc) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'zoom-modal';
    modal.innerHTML = `
        <div class="zoom-modal-content">
            <button class="zoom-close" onclick="closeFullscreenZoom()">&times;</button>
            <img src="${imageSrc}" alt="Product" class="zoom-fullscreen-img">
            <div class="zoom-controls">
                <button class="zoom-btn" onclick="zoomIn()">+</button>
                <button class="zoom-btn" onclick="zoomOut()">-</button>
                <button class="zoom-btn" onclick="resetZoom()">Reset</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeFullscreenZoom() {
    const modal = document.querySelector('.zoom-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

let currentZoomLevel = 1;

function zoomIn() {
    const img = document.querySelector('.zoom-fullscreen-img');
    if (img && currentZoomLevel < 3) {
        currentZoomLevel += 0.25;
        img.style.transform = `scale(${currentZoomLevel})`;
    }
}

function zoomOut() {
    const img = document.querySelector('.zoom-fullscreen-img');
    if (img && currentZoomLevel > 0.5) {
        currentZoomLevel -= 0.25;
        img.style.transform = `scale(${currentZoomLevel})`;
    }
}

function resetZoom() {
    const img = document.querySelector('.zoom-fullscreen-img');
    if (img) {
        currentZoomLevel = 1;
        img.style.transform = `scale(1)`;
    }
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreenZoom();
    }
});
