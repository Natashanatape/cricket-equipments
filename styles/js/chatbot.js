// Chatbot functionality
let chatOpen = false;
let conversationHistory = [];

// Predefined responses
const botResponses = {
    greetings: [
        "Hello! Welcome to CricketPro! 👋 How can I help you today?",
        "Hi there! I'm here to assist you with your cricket equipment needs! 🏏",
        "Hey! Welcome to CricketPro! What can I do for you?"
    ],
    products: [
        "We have a wide range of cricket equipment including Bats, Balls, Gloves, Helmets, and Pads. You can browse all products on our Products page! 🏏",
        "Looking for specific cricket gear? We stock premium brands like MRF, PUMA, SG, SS, Kookaburra, and more! Check out our Products section.",
        "We offer 97+ premium cricket products across 5 categories. What are you looking for specifically?"
    ],
    bats: [
        "We have 20+ premium cricket bats from brands like MRF, PUMA, SG, and SS. Prices range from ₹1,500 to ₹25,000. Would you like to see our bat collection?",
        "Our cricket bats collection includes English Willow and Kashmir Willow options. Perfect for all skill levels!"
    ],
    balls: [
        "We stock 20+ cricket balls from Kookaburra, SF, and County. Available in leather and tennis ball options. Prices start from ₹150!",
        "Looking for match-quality cricket balls? We have red, white, and pink leather balls, plus practice tennis balls!"
    ],
    gloves: [
        "Our batting gloves collection features 20+ options from SS, MRF, and Adidas. Prices range from ₹500 to ₹3,500.",
        "We have premium batting gloves with excellent grip and protection. Perfect for all weather conditions!"
    ],
    helmets: [
        "Safety first! We have 18+ cricket helmets from Shrey with ISI certification. Prices start from ₹1,200.",
        "Our helmets offer maximum protection with comfortable padding. Available in multiple sizes!"
    ],
    pads: [
        "We stock 20+ batting pads from PUMA, SS, and MRF. Lightweight and durable options available from ₹800 onwards!",
        "Our batting pads provide excellent protection and mobility. Perfect for both practice and matches!"
    ],
    shipping: [
        "We offer delivery across India! Delivery charges are just ₹50 for all orders. Most orders are delivered within 5-7 business days. 📦",
        "Shipping is available pan-India at a flat rate of ₹50. We use reliable courier partners for safe delivery!"
    ],
    payment: [
        "We accept multiple payment methods: UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash on Delivery! 💳",
        "You can pay via UPI, Cards, Net Banking, or choose Cash on Delivery. All payment methods are secure!"
    ],
    returns: [
        "We have a 7-day return policy for unused products in original packaging. Contact us for return requests! 🔄",
        "Returns are accepted within 7 days of delivery. Product must be unused and in original condition."
    ],
    discount: [
        "We have 6 active discount coupons! Use FIRSTBUY for 10% off on orders above ₹1,500. Check checkout page for all coupons! 🎉",
        "Great news! We offer multiple discount coupons. WELCOME15 gives 15% off on orders above ₹2,000. View all coupons at checkout!"
    ],
    order: [
        "You can track your order anytime using the Track Order page. Just enter your Order ID and email address! 📍",
        "To track your order, visit our Track Order page and enter your order details. You'll see real-time status updates!"
    ],
    contact: [
        "You can reach us at:\n📧 Email: info@cricketpro.com\n📞 Phone: +91 98765 43210\nOr visit our Contact page!",
        "Need to contact us? Email us at info@cricketpro.com or call +91 98765 43210. We're here to help!"
    ],
    account: [
        "You can create an account to track orders, save wishlist, and manage your profile. Click on the user icon to login/signup! 👤",
        "Having an account lets you track orders easily and save your favorite products. Sign up is quick and free!"
    ],
    wishlist: [
        "You can add products to your wishlist by clicking the ❤️ icon on any product. Access your wishlist anytime from the navbar!",
        "Love a product? Add it to your wishlist! Click the heart icon and save it for later purchase."
    ],
    cart: [
        "Your cart is saved automatically! You can add products, adjust quantities, and proceed to checkout anytime. 🛒",
        "Items in your cart are saved even if you close the browser. Ready to checkout? Click the cart icon!"
    ],
    thanks: [
        "You're welcome! Happy shopping at CricketPro! 🏏",
        "Glad I could help! Feel free to ask if you need anything else! 😊",
        "My pleasure! Enjoy shopping with us! 🎉"
    ],
    default: [
        "I'm here to help! You can ask me about products, shipping, payments, returns, or anything else! 😊",
        "I didn't quite understand that. Could you ask about our products, orders, shipping, or payments?",
        "Hmm, I'm not sure about that. Try asking about cricket equipment, delivery, or discounts!"
    ]
};

// Keywords mapping
const keywordMap = {
    greetings: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon'],
    products: ['product', 'equipment', 'gear', 'items', 'sell', 'available', 'stock', 'catalog'],
    bats: ['bat', 'willow', 'blade'],
    balls: ['ball', 'leather', 'tennis ball'],
    gloves: ['glove', 'batting glove', 'hand protection'],
    helmets: ['helmet', 'head protection', 'safety gear'],
    pads: ['pad', 'leg guard', 'batting pad'],
    shipping: ['delivery', 'shipping', 'courier', 'dispatch', 'ship', 'deliver'],
    payment: ['payment', 'pay', 'upi', 'card', 'cod', 'cash on delivery', 'net banking'],
    returns: ['return', 'refund', 'exchange', 'replace'],
    discount: ['discount', 'coupon', 'offer', 'promo', 'code', 'sale'],
    order: ['track', 'order status', 'where is my order', 'order tracking'],
    contact: ['contact', 'phone', 'email', 'reach', 'call', 'support'],
    account: ['account', 'login', 'signup', 'register', 'profile'],
    wishlist: ['wishlist', 'favorite', 'save for later', 'wish list'],
    cart: ['cart', 'basket', 'bag', 'checkout'],
    thanks: ['thank', 'thanks', 'thank you', 'thankyou', 'appreciate']
};

// Get bot response based on user input
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for keywords
    for (let category in keywordMap) {
        for (let keyword of keywordMap[category]) {
            if (message.includes(keyword)) {
                const responses = botResponses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    
    // Default response
    const defaultResponses = botResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Toggle chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    
    if (!chatbot) {
        console.error('Chatbot container not found');
        return;
    }
    
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatbot.classList.add('active');
        chatbot.style.display = 'flex';
        
        // Ensure proper z-index on mobile
        if (window.innerWidth <= 768) {
            chatbot.style.zIndex = '9999';
            if (chatbotToggle) {
                chatbotToggle.style.zIndex = '10000';
            }
        }
        
        // Send welcome message if first time
        if (conversationHistory.length === 0) {
            setTimeout(() => {
                addBotMessage(botResponses.greetings[0]);
            }, 500);
        }
    } else {
        chatbot.classList.remove('active');
        // Don't hide completely, just make inactive
        setTimeout(() => {
            if (!chatOpen) {
                chatbot.style.display = 'none';
            }
        }, 300);
    }
}

// Make sure toggleChatbot is globally available
window.toggleChatbot = toggleChatbot;

// Add user message
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    conversationHistory.push({ type: 'user', message });
}

// Add bot message with typing animation
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Remove typing indicator and show message after delay
    setTimeout(() => {
        typingDiv.remove();
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot-message';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        conversationHistory.push({ type: 'bot', message });
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Send message
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addUserMessage(message);
    input.value = '';
    
    // Get and add bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addBotMessage(response);
    }, 500);
}

// Handle Enter key
function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Quick reply buttons
function sendQuickReply(message) {
    addUserMessage(message);
    
    setTimeout(() => {
        const response = getBotResponse(message);
        addBotMessage(response);
    }, 500);
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Add quick reply buttons after bot messages
    const quickReplies = [
        'Show me cricket bats',
        'What are your delivery charges?',
        'Do you have any discounts?',
        'How can I track my order?'
    ];
    
    // Store quick replies for later use
    window.quickReplies = quickReplies;
    
    // Initialize chatbot button
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot');
    
    if (chatbotToggle && chatbotContainer) {
        // Ensure chatbot toggle is clickable
        chatbotToggle.style.pointerEvents = 'all';
        chatbotToggle.style.cursor = 'pointer';
        
        // Add click event listener
        chatbotToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Chatbot toggle clicked'); // Debug log
            toggleChatbot();
        });
        
        // Add touch event for mobile
        chatbotToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Chatbot toggle touched'); // Debug log
            toggleChatbot();
        });
        
        // Ensure chatbot container is properly positioned
        chatbotContainer.style.position = 'fixed';
        chatbotContainer.style.display = 'none';
        
        console.log('Chatbot initialized successfully'); // Debug log
    } else {
        console.error('Chatbot elements not found:', {
            toggle: !!chatbotToggle,
            container: !!chatbotContainer
        });
    }
    
    // Make functions globally available
    window.sendChatMessage = sendChatMessage;
    window.handleChatKeypress = handleChatKeypress;
    window.sendQuickReply = sendQuickReply;
});
