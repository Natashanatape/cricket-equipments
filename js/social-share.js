// Social Share functionality

// Share on WhatsApp
function shareOnWhatsApp(productName, productPrice, productUrl) {
    const text = `Check out this amazing product: ${productName} for ₹${productPrice.toLocaleString()} at CricketPro!`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + productUrl)}`;
    window.open(url, '_blank');
}

// Share on Facebook
function shareOnFacebook(productUrl) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
}

// Share on Twitter
function shareOnTwitter(productName, productPrice, productUrl) {
    const text = `Check out ${productName} for ₹${productPrice.toLocaleString()} at CricketPro!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(productUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
}

// Copy link to clipboard
function copyProductLink(productUrl) {
    navigator.clipboard.writeText(productUrl).then(() => {
        showToast('Link copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = productUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Link copied to clipboard!');
    });
}

// Share via Email
function shareViaEmail(productName, productPrice, productUrl) {
    const subject = `Check out ${productName} at CricketPro`;
    const body = `I found this amazing product:\n\n${productName}\nPrice: ₹${productPrice.toLocaleString()}\n\nCheck it out here: ${productUrl}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Open share modal
function openShareModal(product) {
    const productUrl = window.location.origin + '/product-detail.html?id=' + product.id;
    
    const modal = document.getElementById('shareModal');
    const shareContent = document.getElementById('shareContent');
    
    shareContent.innerHTML = `
        <div class="share-modal-header">
            <h3>Share Product</h3>
            <button class="share-close" onclick="closeShareModal()">×</button>
        </div>
        <div class="share-product-info">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p class="share-price">₹${product.price.toLocaleString()}</p>
            </div>
        </div>
        <div class="share-buttons">
            <button class="share-btn whatsapp" onclick="shareOnWhatsApp('${product.name}', ${product.price}, '${productUrl}')">
                <span class="share-icon"></span>
                <span>WhatsApp</span>
            </button>
            <button class="share-btn facebook" onclick="shareOnFacebook('${productUrl}')">
                <span class="share-icon"></span>
                <span>Facebook</span>
            </button>
            <button class="share-btn twitter" onclick="shareOnTwitter('${product.name}', ${product.price}, '${productUrl}')">
                <span class="share-icon"></span>
                <span>Twitter</span>
            </button>
            <button class="share-btn email" onclick="shareViaEmail('${product.name}', ${product.price}, '${productUrl}')">
                <span class="share-icon"></span>
                <span>Email</span>
            </button>
        </div>
        <div class="share-link-section">
            <input type="text" id="shareLinkInput" value="${productUrl}" readonly>
            <button class="btn-copy-link" onclick="copyProductLink('${productUrl}')">Copy Link</button>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close share modal
function closeShareModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Export functions
window.shareManager = {
    whatsapp: shareOnWhatsApp,
    facebook: shareOnFacebook,
    twitter: shareOnTwitter,
    email: shareViaEmail,
    copyLink: copyProductLink,
    openModal: openShareModal,
    closeModal: closeShareModal
};
