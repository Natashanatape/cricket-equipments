// Discount Coupon System

// Available Coupons
const coupons = [
    { code: 'WELCOME15', discount: 15, type: 'percentage', minOrder: 2000, description: '15% off on orders above ₹2000' },
    { code: 'CRICKET20', discount: 20, type: 'percentage', minOrder: 5000, description: '20% off on orders above ₹5000' },
    { code: 'FLAT500', discount: 500, type: 'fixed', minOrder: 3000, description: '₹500 off on orders above ₹3000' },
    { code: 'FLAT1000', discount: 1000, type: 'fixed', minOrder: 10000, description: '₹1000 off on orders above ₹10000' },
    { code: 'MEGA25', discount: 25, type: 'percentage', minOrder: 8000, description: '25% off on orders above ₹8000' },
    { code: 'FIRSTBUY', discount: 10, type: 'percentage', minOrder: 1500, description: '10% off on first order above ₹1500' }
];

let appliedCoupon = null;

// Apply coupon
function applyCoupon(couponCode, subtotal) {
    const code = couponCode.toUpperCase().trim();
    const coupon = coupons.find(c => c.code === code);

    if (!coupon) {
        return { success: false, message: 'Invalid coupon code!' };
    }

    if (subtotal < coupon.minOrder) {
        return { 
            success: false, 
            message: `Minimum order of ₹${coupon.minOrder.toLocaleString()} required for this coupon!` 
        };
    }

    let discountAmount = 0;
    if (coupon.type === 'percentage') {
        discountAmount = Math.round((subtotal * coupon.discount) / 100);
    } else {
        discountAmount = coupon.discount;
    }

    appliedCoupon = {
        code: coupon.code,
        discount: coupon.discount,
        type: coupon.type,
        amount: discountAmount,
        description: coupon.description
    };

    return {
        success: true,
        message: `Coupon applied! You saved ₹${discountAmount.toLocaleString()}`,
        coupon: appliedCoupon
    };
}

// Remove coupon
function removeCoupon() {
    appliedCoupon = null;
}

// Get applied coupon
function getAppliedCoupon() {
    return appliedCoupon;
}

// Calculate final total with coupon
function calculateTotalWithCoupon(subtotal, deliveryCharges = 50) {
    let discount = 0;
    
    if (appliedCoupon) {
        discount = appliedCoupon.amount;
    }
    
    const total = subtotal - discount + deliveryCharges;
    
    return {
        subtotal: subtotal,
        discount: discount,
        delivery: deliveryCharges,
        total: total > 0 ? total : 0
    };
}

// Get all available coupons
function getAvailableCoupons() {
    return coupons;
}
