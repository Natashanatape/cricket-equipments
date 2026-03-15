// Mobile Chatbot Fix Script
(function() {
    'use strict';
    
    function initMobileChatbot() {
        console.log('Initializing mobile chatbot...');
        
        const chatbotToggle = document.querySelector('.chatbot-toggle');
        const chatbotContainer = document.getElementById('chatbot');
        
        if (!chatbotToggle || !chatbotContainer) {
            console.error('Chatbot elements not found');
            return;
        }
        
        // Remove any existing event listeners
        const newToggle = chatbotToggle.cloneNode(true);
        chatbotToggle.parentNode.replaceChild(newToggle, chatbotToggle);
        
        // Ensure proper styling for mobile
        newToggle.style.position = 'fixed';
        newToggle.style.zIndex = '9999';
        newToggle.style.pointerEvents = 'all';
        newToggle.style.touchAction = 'manipulation';
        newToggle.style.webkitTapHighlightColor = 'transparent';
        newToggle.style.cursor = 'pointer';
        
        // Add multiple event listeners for better compatibility
        function handleToggle(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Chatbot toggle activated');
            
            const isActive = chatbotContainer.classList.contains('active');
            
            if (isActive) {
                chatbotContainer.classList.remove('active');
                chatbotContainer.style.display = 'none';
            } else {
                chatbotContainer.style.display = 'flex';
                chatbotContainer.classList.add('active');
                
                // Send welcome message if first time
                const messages = chatbotContainer.querySelector('#chatMessages');
                if (messages && messages.children.length === 0) {\n                    setTimeout(() => {\n                        if (typeof addBotMessage === 'function') {\n                            addBotMessage('Hello! Welcome to CricketPro! 👋 How can I help you today?');\n                        }\n                    }, 500);\n                }\n            }\n        }\n        \n        // Add event listeners\n        newToggle.addEventListener('click', handleToggle, { passive: false });\n        newToggle.addEventListener('touchstart', handleToggle, { passive: false });\n        newToggle.addEventListener('touchend', function(e) {\n            e.preventDefault();\n        }, { passive: false });\n        \n        // Ensure chatbot container is properly set up\n        chatbotContainer.style.position = 'fixed';\n        chatbotContainer.style.zIndex = '9998';\n        chatbotContainer.style.display = 'none';\n        \n        // Add close button functionality\n        const closeBtn = chatbotContainer.querySelector('.chatbot-close');\n        if (closeBtn) {\n            closeBtn.addEventListener('click', function(e) {\n                e.preventDefault();\n                chatbotContainer.classList.remove('active');\n                chatbotContainer.style.display = 'none';\n            });\n        }\n        \n        console.log('Mobile chatbot initialized successfully');\n    }\n    \n    // Initialize when DOM is ready\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', initMobileChatbot);\n    } else {\n        initMobileChatbot();\n    }\n    \n    // Re-initialize on window resize\n    let resizeTimer;\n    window.addEventListener('resize', function() {\n        clearTimeout(resizeTimer);\n        resizeTimer = setTimeout(function() {\n            if (window.innerWidth <= 768) {\n                initMobileChatbot();\n            }\n        }, 250);\n    });\n    \n})();