// Product Image Gallery functionality

let currentImageIndex = 0;
let productImages = [];

// Initialize image gallery
function initImageGallery(product) {
    if (!product) return;

    // Generate multiple images for the product (using same image with different views simulation)
    productImages = [
        product.image,
        product.image, // In real scenario, these would be different angles
        product.image,
        product.image
    ];

    const galleryContainer = document.querySelector('.product-detail-image');
    if (!galleryContainer) return;

    // Create gallery HTML
    const galleryHTML = `
        <div class="image-gallery">
            <div class="main-image-container">
                <div class="zoom-hint">Hover to zoom | Click for fullscreen</div>
                <img id="mainGalleryImage" src="${productImages[0]}" alt="${product.name}" class="detail-img">
                <button class="gallery-nav-btn prev" onclick="previousImage()">‹</button>
                <button class="gallery-nav-btn next" onclick="nextImage()">›</button>
            </div>
            <div class="thumbnail-container">
                ${productImages.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})">
                        <img src="${img}" alt="View ${index + 1}">
                        <span class="thumbnail-label">View ${index + 1}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    galleryContainer.innerHTML = galleryHTML;
    currentImageIndex = 0;

    // Re-initialize zoom after gallery is created
    if (window.initImageZoom) {
        setTimeout(() => window.initImageZoom(), 100);
    }
}

// Select image by index
function selectImage(index) {
    if (index < 0 || index >= productImages.length) return;

    currentImageIndex = index;
    const mainImage = document.getElementById('mainGalleryImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = productImages[index];
            mainImage.style.opacity = '1';
        }, 200);
    }

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });

    // Re-initialize zoom for new image
    if (window.initImageZoom) {
        setTimeout(() => window.initImageZoom(), 300);
    }
}

// Navigate to previous image
function previousImage() {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : productImages.length - 1;
    selectImage(newIndex);
}

// Navigate to next image
function nextImage() {
    const newIndex = currentImageIndex < productImages.length - 1 ? currentImageIndex + 1 : 0;
    selectImage(newIndex);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.querySelector('.image-gallery')) {
        if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Export functions
window.imageGallery = {
    init: initImageGallery,
    select: selectImage,
    previous: previousImage,
    next: nextImage
};
