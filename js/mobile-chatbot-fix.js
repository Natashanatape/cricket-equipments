// Mobile Chatbot Enhancement - Works with main chatbot.js
(function() {
    'use strict';
    
    function enhanceMobileChatbot() {
        const toggle = document.querySelector('.chatbot-toggle');
        const container = document.getElementById('chatbot');
        
        if (!toggle || !container) return;
        
        // Add mobile-specific styles
        if (window.innerWidth <= 768) {
            toggle.style.cssText += `
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 55px !important;
                height: 55px !important;
                z-index: 9999 !important;
                display: flex !important;
            `;
            
            container.style.cssText += `
                width: calc(100% - 20px) !important;
                max-width: 400px !important;
                right: 10px !important;
                bottom: 85px !important;
                height: 450px !important;
                max-height: 70vh !important;
            `;
        }
    }
    
    // Run on load and resize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enhanceMobileChatbot);
    } else {
        enhanceMobileChatbot();
    }
    
    window.addEventListener('resize', enhanceMobileChatbot);
})();