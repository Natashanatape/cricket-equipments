// EmailJS Configuration for CricketPro
// Replace these with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (User ID)
    publicKey: 'YOUR_PUBLIC_KEY_HERE',
    
    // Service ID (Gmail, Outlook, etc.)
    serviceId: 'YOUR_SERVICE_ID_HERE',
    
    // Template IDs
    templates: {
        contact: 'YOUR_CONTACT_TEMPLATE_ID',
        newsletter: 'YOUR_NEWSLETTER_TEMPLATE_ID',
        orderConfirmation: 'YOUR_ORDER_TEMPLATE_ID'
    }
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// Send Contact Form Email
async function sendContactEmail(formData) {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: 'info@cricketpro.com', // Your business email
            reply_to: formData.email
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.contact,
            templateParams
        );

        console.log('Contact email sent successfully:', response);
        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Failed to send contact email:', error);
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}

// Send Newsletter Subscription Email
async function sendNewsletterEmail(email, name = '') {
    try {
        const templateParams = {
            subscriber_email: email,
            subscriber_name: name || 'Cricket Fan',
            to_email: 'info@cricketpro.com', // Your business email
            welcome_message: 'Thank you for subscribing to CricketPro newsletter!'
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.newsletter,
            templateParams
        );

        console.log('Newsletter email sent successfully:', response);
        return { success: true, message: 'Subscription successful!' };
    } catch (error) {
        console.error('Failed to send newsletter email:', error);
        return { success: false, message: 'Subscription failed. Please try again.' };
    }
}

// Send Order Confirmation Email
async function sendOrderConfirmationEmail(orderData) {
    try {
        const templateParams = {
            customer_name: orderData.customer.fullName,
            customer_email: orderData.customer.email,
            order_id: orderData.orderId,
            order_date: orderData.date,
            order_total: '₹' + orderData.total.toLocaleString(),
            order_items: orderData.items.map(item => 
                `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
            ).join('\n'),
            delivery_address: `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.state} ${orderData.customer.pincode}`,
            to_email: 'info@cricketpro.com' // Your business email
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templates.orderConfirmation,
            templateParams
        );

        console.log('Order confirmation email sent successfully:', response);
        return { success: true, message: 'Order confirmation sent!' };
    } catch (error) {
        console.error('Failed to send order confirmation email:', error);
        return { success: false, message: 'Failed to send confirmation email.' };
    }
}

// Demo Configuration (Remove this in production)
const DEMO_CONFIG = {
    publicKey: 'demo_public_key',
    serviceId: 'demo_service',
    templates: {
        contact: 'demo_contact_template',
        newsletter: 'demo_newsletter_template',
        orderConfirmation: 'demo_order_template'
    }
};

// Check if using demo configuration
function isDemoMode() {
    return EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY_HERE' || 
           EMAILJS_CONFIG.publicKey === DEMO_CONFIG.publicKey;
}

// Demo email simulation
function simulateEmailSend(type, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[DEMO MODE] ${type} email would be sent with data:`, data);
            resolve({ 
                success: true, 
                message: `${type} email sent successfully! (Demo Mode)` 
            });
        }, 1000);
    });
}