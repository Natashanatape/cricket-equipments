// User Authentication System

// Register new user
function registerUser(userData) {
    const users = JSON.parse(localStorage.getItem('cricketProUsers')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
        return { success: false, message: 'Email already registered!' };
    }
    
    const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password, // In production, this should be hashed
        createdAt: new Date().toISOString(),
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('cricketProUsers', JSON.stringify(users));
    
    return { success: true, user: newUser };
}

// Login user
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('cricketProUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return { success: false, message: 'Invalid email or password!' };
    }
    
    // Store logged in user
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    
    return { success: true, user: user };
}

// Logout user
function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Get logged in user
function getLoggedInUser() {
    const userStr = localStorage.getItem('loggedInUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Update user profile
function updateUserProfile(userData) {
    const users = JSON.parse(localStorage.getItem('cricketProUsers')) || [];
    const loggedInUser = getLoggedInUser();
    
    if (!loggedInUser) return { success: false, message: 'Not logged in' };
    
    const userIndex = users.findIndex(u => u.id === loggedInUser.id);
    
    if (userIndex === -1) {
        return { success: false, message: 'User not found' };
    }
    
    // Update user data
    users[userIndex] = { ...users[userIndex], ...userData };
    localStorage.setItem('cricketProUsers', JSON.stringify(users));
    
    // Update logged in user
    localStorage.setItem('loggedInUser', JSON.stringify(users[userIndex]));
    
    return { success: true, user: users[userIndex] };
}

// Get user orders
function getUserOrders() {
    const loggedInUser = getLoggedInUser();
    if (!loggedInUser) return [];
    
    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    return allOrders.filter(order => order.customer.email === loggedInUser.email);
}

// Update navbar with user info
function updateNavbarWithUser() {
    const user = getLoggedInUser();
    const navLinks = document.querySelector('.nav-links');
    
    if (!navLinks) return;
    
    // Check if user link already exists
    if (document.getElementById('userNavLink')) return;
    
    if (user) {
        const userLink = document.createElement('a');
        userLink.href = 'my-account.html';
        userLink.id = 'userNavLink';
        userLink.innerHTML = `👤 ${user.name.split(' ')[0]}`;
        navLinks.appendChild(userLink);
    } else {
        const loginLink = document.createElement('a');
        loginLink.href = 'user-login.html';
        loginLink.id = 'userNavLink';
        loginLink.innerHTML = '👤 Login';
        navLinks.appendChild(loginLink);
    }
}

// Initialize user navbar on page load
if (document.querySelector('.nav-links')) {
    updateNavbarWithUser();
}
