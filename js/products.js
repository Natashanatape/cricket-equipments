// All Products Data
const products = [
    // Cricket Bats (20 products)
    { id: 1, name: "MRF Genius Chase Master", category: "bats", price: 18999, image: "images/bats/MRF_GENIUS_CHASE_MASTER_ENGLISH_WILLOW_CRICKET_BAT.jpg", desc: "English Willow Cricket Bat", brand: "MRF" },
    { id: 2, name: "PUMA One8 8.1", category: "bats", price: 16999, image: "images/bats/PUMA_ONE8_8.1_ENGLISH_WILLOW_CRICKET_BAT.jpg", desc: "English Willow Cricket Bat" },
    { id: 3, name: "SG Sunny Tonny", category: "bats", price: 22999, image: "images/bats/SG_SUNNY_TONNY_ENGLISH_WILLOW_CRICKET_BAT.jpg", desc: "English Willow Cricket Bat" },
    { id: 4, name: "SS Tiger", category: "bats", price: 15999, image: "images/bats/SS_Tiger_English_Willow_Cricket_Bat-01.png", desc: "English Willow Cricket Bat" },
    { id: 5, name: "SG Sierra 150", category: "bats", price: 14999, image: "images/bats/SG_Sierra_150_English_Willow_Cricket_Bat-01.png", desc: "English Willow Cricket Bat" },
    { id: 6, name: "SG Slammer Classic", category: "bats", price: 8999, image: "images/bats/SG_Slammer_Classic_1.png", desc: "Kashmir Willow Cricket Bat" },
    { id: 7, name: "SG Maxstar Classic", category: "bats", price: 7999, image: "images/bats/Sg_maxstar_classic.png", desc: "Kashmir Willow Cricket Bat" },
    { id: 8, name: "SS Ton Maximus", category: "bats", price: 6999, image: "images/bats/SS_Ton_Maximus_Kashmir_Willow_Cricket_Bat_2_69131047-b41b-4bc6-8655-16e7c8e21f60.png", desc: "Kashmir Willow Cricket Bat" },
    { id: 9, name: "Adidas Master Blaster", category: "bats", price: 9999, image: "images/bats/Adidas_master_blaster_club_cricket_bat_-_2025-04-25T182534.136.png", desc: "Club Cricket Bat" },
    { id: 10, name: "Adidas Club Bat", category: "bats", price: 8499, image: "images/bats/Adidasmasterblasterclubcricketbat-2025-04-26T144102.256.png", desc: "Club Cricket Bat" },
    { id: 11, name: "G9 Supra", category: "bats", price: 12999, image: "images/bats/G9SUPRAG107038_9b15caf6-e9a9-4986-9565-d69dd134b2dc.jpg", desc: "English Willow Cricket Bat" },
    { id: 12, name: "Ignite Vapour", category: "bats", price: 11999, image: "images/bats/IGNITEVAPOURG112085.png", desc: "English Willow Cricket Bat" },
    { id: 13, name: "Premium Bat 1", category: "bats", price: 13999, image: "images/bats/1_2cdf68a2-af03-4ef6-9583-2a792b475f66.jpg", desc: "English Willow Cricket Bat" },
    { id: 14, name: "Premium Bat 2", category: "bats", price: 14499, image: "images/bats/1_5e99fac7-2ef1-4fe2-bcbf-af7b5236da4c.jpg", desc: "English Willow Cricket Bat" },
    { id: 15, name: "Premium Bat 3", category: "bats", price: 15499, image: "images/bats/1_e9ee24b9-e0b4-486c-a209-23db7284f69f.jpg", desc: "English Willow Cricket Bat" },
    { id: 16, name: "Pro Bat 1", category: "bats", price: 10999, image: "images/bats/6-2-01.png", desc: "Kashmir Willow Cricket Bat" },
    { id: 17, name: "Pro Bat 2", category: "bats", price: 9499, image: "images/bats/Untitled_design_16.jpg", desc: "Kashmir Willow Cricket Bat" },
    { id: 18, name: "Pro Bat 3", category: "bats", price: 8999, image: "images/bats/Untitled_design_d58e5ab3-4f77-4c86-9cee-a10f4d2290a6.png", desc: "Kashmir Willow Cricket Bat" },
    { id: 19, name: "Pro Bat 4", category: "bats", price: 7499, image: "images/bats/Untitleddesign_71.jpg", desc: "Kashmir Willow Cricket Bat" },
    { id: 20, name: "Yonex Bat", category: "bats", price: 11499, image: "images/bats/YonexRoundNeckRJ-H036-2532BadmintonT-Shirt-2025-01-08T183930.886.png", desc: "English Willow Cricket Bat" },

    // Cricket Balls (20 products)
    { id: 21, name: "Kookaburra Speed", category: "balls", price: 1299, image: "images/balls/Kookaburra_Speed_Cricket_Ball.jpg", desc: "Premium Leather Cricket Ball" },
    { id: 22, name: "SF Yorker Red", category: "balls", price: 899, image: "images/balls/SF_Yorker_Cricket_Ball_Red.jpg", desc: "Leather Cricket Ball" },
    { id: 23, name: "SF Yorker White", category: "balls", price: 899, image: "images/balls/SF_Yorker_Cricket_Ball_White.jpg", desc: "Leather Cricket Ball" },
    { id: 24, name: "SF Bouncer", category: "balls", price: 799, image: "images/balls/SF_Bouncer_Cricket_Ball.jpg", desc: "Leather Cricket Ball" },
    { id: 25, name: "County Red", category: "balls", price: 1099, image: "images/balls/county-red_0000_ticket-800x800.jpg", desc: "Premium Leather Ball" },
    { id: 26, name: "AJC Swinga Red", category: "balls", price: 999, image: "images/balls/AJC-Swinga-Red-2-0005-Edit.jpg", desc: "Leather Cricket Ball" },
    { id: 27, name: "VectorX Light Yellow", category: "balls", price: 699, image: "images/balls/VectorX_Cricket_Ball_Light_Yellow_9bfd017d-70ec-40a2-b6d6-c5418cfcd012.jpg", desc: "Tennis Cricket Ball" },
    { id: 28, name: "Premium Ball 1", category: "balls", price: 849, image: "images/balls/1_05c30cdf-5afa-42cc-899a-ad6f7a3d4fe7.png", desc: "Cricket Ball" },
    { id: 29, name: "Premium Ball 2", category: "balls", price: 799, image: "images/balls/1_1f30f25c-a3ed-459a-a027-806d57f0d06b.jpg", desc: "Cricket Ball" },
    { id: 30, name: "Premium Ball 3", category: "balls", price: 749, image: "images/balls/5733924.jpg", desc: "Cricket Ball" },
    { id: 31, name: "Arabian Ball 1", category: "balls", price: 899, image: "images/balls/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-24T144505.821.png", desc: "Cricket Ball" },
    { id: 32, name: "Arabian Ball 2", category: "balls", price: 899, image: "images/balls/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-24T172224.615.png", desc: "Cricket Ball" },
    { id: 33, name: "Arabian Ball 3", category: "balls", price: 899, image: "images/balls/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-25T111710.048.png", desc: "Cricket Ball" },
    { id: 34, name: "Pro Ball 1", category: "balls", price: 649, image: "images/balls/rn-image_picker_lib_temp_66a3fee3-4c0b-4a4f-a6e6-3c61fb538f00.png", desc: "Tennis Cricket Ball" },
    { id: 35, name: "Pro Ball 2", category: "balls", price: 799, image: "images/balls/TP0090ID-RNVL_32.png", desc: "Cricket Ball" },
    { id: 36, name: "Pro Ball 3", category: "balls", price: 799, image: "images/balls/TP0090ID-RNVL_37.png", desc: "Cricket Ball" },
    { id: 37, name: "Pro Ball 4", category: "balls", price: 799, image: "images/balls/TP0090ID-RNVL_74.png", desc: "Cricket Ball" },
    { id: 38, name: "Pro Ball 5", category: "balls", price: 799, image: "images/balls/TP0090ID-RNVL_93.png", desc: "Cricket Ball" },
    { id: 39, name: "Design Ball 1", category: "balls", price: 849, image: "images/balls/Untitleddesign_19_968d2118-33d6-4c86-92ce-da8aa0ba192b.jpg", desc: "Cricket Ball" },
    { id: 40, name: "Design Ball 2", category: "balls", price: 849, image: "images/balls/Untitleddesign_34_163cae73-f5a0-4ccf-86a5-3d3bc76ed0b1.jpg", desc: "Cricket Ball" },

    // Batting Gloves (20 products)
    { id: 41, name: "SS Superlite", category: "gloves", price: 2499, image: "images/gloves/SS-Superlite-Cricket-Batting-Gloves.jpg", desc: "Lightweight Batting Gloves" },
    { id: 42, name: "MRF Grand", category: "gloves", price: 3299, image: "images/gloves/mrf-grand.jpg", desc: "Professional Batting Gloves" },
    { id: 43, name: "BAS Players", category: "gloves", price: 2799, image: "images/gloves/BASPLAYERS.png", desc: "Premium Batting Gloves" },
    { id: 44, name: "Adidas Master Blaster", category: "gloves", price: 2999, image: "images/gloves/Adidas_master_blaster_club_cricket_bat_-_2025-11-04T140730.025.png", desc: "Club Batting Gloves" },
    { id: 45, name: "Test RO-1", category: "gloves", price: 3499, image: "images/gloves/Test-RO-1-2-scaled.jpg", desc: "Professional Batting Gloves" },
    { id: 46, name: "Premium Gloves 1", category: "gloves", price: 2199, image: "images/gloves/1_16b82c16-cb72-4d09-9046-c58a3ad83ab5.png", desc: "Batting Gloves" },
    { id: 47, name: "Premium Gloves 2", category: "gloves", price: 2299, image: "images/gloves/1_30918f83-a926-429b-92dc-717b4ea8a15e.jpg", desc: "Batting Gloves" },
    { id: 48, name: "Premium Gloves 3", category: "gloves", price: 2399, image: "images/gloves/1_3868dd3d-29b0-4fb8-8d74-1e83e2a5116b.png", desc: "Batting Gloves" },
    { id: 49, name: "Premium Gloves 4", category: "gloves", price: 2499, image: "images/gloves/1_61fb1184-1a72-4d2f-8c34-2fd052870117.png", desc: "Batting Gloves" },
    { id: 50, name: "Premium Gloves 5", category: "gloves", price: 2599, image: "images/gloves/1_b1d4bc0b-50b7-4f6c-a992-b946e207017d.jpg", desc: "Batting Gloves" },
    { id: 51, name: "Premium Gloves 6", category: "gloves", price: 2699, image: "images/gloves/1_c91af40f-75e9-4507-b2e2-314154456a49.png", desc: "Batting Gloves" },
    { id: 52, name: "Premium Gloves 7", category: "gloves", price: 2799, image: "images/gloves/1_d2ee1b7f-f313-4751-9320-8437c06bafec.png", desc: "Batting Gloves" },
    { id: 53, name: "Premium Gloves 8", category: "gloves", price: 2899, image: "images/gloves/1_d9aa2cb1-f4cd-499c-bac3-e925505b1344.png", desc: "Batting Gloves" },
    { id: 54, name: "Premium Gloves 9", category: "gloves", price: 2999, image: "images/gloves/1_e9d47c16-3b51-45ee-ae2c-db3d8d4825fc.jpg", desc: "Batting Gloves" },
    { id: 55, name: "Pro Gloves 1", category: "gloves", price: 1999, image: "images/gloves/2_5511718d-6e42-4747-84d3-172c02ebb737.jpg", desc: "Batting Gloves" },
    { id: 56, name: "Pro Gloves 2", category: "gloves", price: 2099, image: "images/gloves/5_462_1.jpg", desc: "Batting Gloves" },
    { id: 57, name: "Pro Gloves 3", category: "gloves", price: 2199, image: "images/gloves/81Ind9H0XfL._SL1500.jpg", desc: "Batting Gloves" },
    { id: 58, name: "SS Cap Gloves 1", category: "gloves", price: 1899, image: "images/gloves/ssskullplaincap-2025-05-15T112733.776.png", desc: "Batting Gloves" },
    { id: 59, name: "SS Cap Gloves 2", category: "gloves", price: 1899, image: "images/gloves/ssskullplaincap-2025-05-15T122636.504.png", desc: "Batting Gloves" },
    { id: 60, name: "SS Cap Gloves 3", category: "gloves", price: 1899, image: "images/gloves/ssskullplaincap-2025-05-22T130332.572.png", desc: "Batting Gloves" },

    // Helmets (18 products)
    { id: 61, name: "Shrey Koroyd Steel", category: "helmets", price: 4999, image: "images/helmets/SHREY_KOROYD_STAINLESS_STEEL_HK842_NAVY_1_HD_5fm6bT3u4.jpg", desc: "Premium Cricket Helmet" },
    { id: 62, name: "Shrey Master Class Air 2.0", category: "helmets", price: 6499, image: "images/helmets/SHREY_MASTER_CLASS_AIR_2.0_TITANIUM__H011_NAVY_1_HD_kCSvFKdBqb.jpg", desc: "Titanium Cricket Helmet" },
    { id: 63, name: "Shrey Prime Steel", category: "helmets", price: 5499, image: "images/helmets/SHREY_PRIME_STEEL_3207_NAVY_2_HD_biKwgG_CN.jpg", desc: "Steel Cricket Helmet" },
    { id: 64, name: "Match 2 Steel", category: "helmets", price: 4799, image: "images/helmets/Match-2-Steel-1-726x1000-1.jpg", desc: "Cricket Helmet" },
    { id: 65, name: "Premium Helmet 1", category: "helmets", price: 4299, image: "images/helmets/1_1acb8deb-1779-4dc3-a7fd-25bbcf606c3f.jpg", desc: "Cricket Helmet" },
    { id: 66, name: "Premium Helmet 2", category: "helmets", price: 4399, image: "images/helmets/1_700c2212-3c13-4aed-8284-152333289021.jpg", desc: "Cricket Helmet" },
    { id: 67, name: "Premium Helmet 3", category: "helmets", price: 4499, image: "images/helmets/1_c00d3142-ab6f-4b94-a6e7-d262a093750c.jpg", desc: "Cricket Helmet" },
    { id: 68, name: "Adidas Helmet 1", category: "helmets", price: 3999, image: "images/helmets/Adidasmasterblasterclubcricketbat_33_ea0de10b-2b17-4bf6-9970-b3e820549cbc.png", desc: "Cricket Helmet" },
    { id: 69, name: "Adidas Helmet 2", category: "helmets", price: 3999, image: "images/helmets/Adidasmasterblasterclubcricketbat-2025-11-07T150344.452.png", desc: "Cricket Helmet" },
    { id: 70, name: "Arabian Helmet 1", category: "helmets", price: 4199, image: "images/helmets/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-15T164201.356.png", desc: "Cricket Helmet" },
    { id: 71, name: "Arabian Helmet 2", category: "helmets", price: 4199, image: "images/helmets/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-16T122309.468.png", desc: "Cricket Helmet" },
    { id: 72, name: "Arabian Helmet 3", category: "helmets", price: 4199, image: "images/helmets/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-16T125541.078.png", desc: "Cricket Helmet" },
    { id: 73, name: "Pro Helmet 1", category: "helmets", price: 3799, image: "images/helmets/rn-image_picker_lib_temp_f55fc6be-c43f-4d02-a9e1-b00b5049e8c7.png", desc: "Cricket Helmet" },
    { id: 74, name: "SS Helmet 1", category: "helmets", price: 3599, image: "images/helmets/ssskullplaincap_30.png", desc: "Cricket Helmet" },
    { id: 75, name: "SS Helmet 2", category: "helmets", price: 3599, image: "images/helmets/ssskullplaincap_53.png", desc: "Cricket Helmet" },
    { id: 76, name: "SS Helmet 3", category: "helmets", price: 3599, image: "images/helmets/ssskullplaincap_60.png", desc: "Cricket Helmet" },
    { id: 77, name: "SS Helmet 4", category: "helmets", price: 3699, image: "images/helmets/ssskullplaincap-2025-05-12T155210.189.png", desc: "Cricket Helmet" },
    { id: 78, name: "SS Helmet 5", category: "helmets", price: 3699, image: "images/helmets/ssskullplaincap-2025-05-21T130908.799.png", desc: "Cricket Helmet" },

    // Batting Pads (19 products)
    { id: 79, name: "PUMA Future 4", category: "pads", price: 3499, image: "images/pads/PUMA-Future-4-Cricket-Batting-Pads.jpg", desc: "Professional Batting Pads" },
    { id: 80, name: "SS Test Opener", category: "pads", price: 3999, image: "images/pads/SS_Test_Opner_Cricket_Batting_Pads.jpg", desc: "Professional Batting Pads" },
    { id: 81, name: "MRF Prodigy", category: "pads", price: 3299, image: "images/pads/MRFProdigyKashmirWillowCricketBat_2.jpg", desc: "Batting Pads" },
    { id: 82, name: "Leg Guards 2.0", category: "pads", price: 2999, image: "images/pads/Leg-Guards-2.0-moonwalkrindia-1683401194_1.jpg", desc: "Batting Pads" },
    { id: 83, name: "Test Blue 4", category: "pads", price: 3199, image: "images/pads/test-blue-4-scaled.jpg", desc: "Batting Pads" },
    { id: 84, name: "Test Red 1", category: "pads", price: 3199, image: "images/pads/Test-RED-1-2-scaled.jpg", desc: "Batting Pads" },
    { id: 85, name: "Premium Pads 1", category: "pads", price: 2799, image: "images/pads/1_58f391eb-2345-46e4-b412-1175e4b40268.png", desc: "Batting Pads" },
    { id: 86, name: "Premium Pads 2", category: "pads", price: 2899, image: "images/pads/1_7852c5b6-ba7d-4900-abcb-ee2ada1e1947.png", desc: "Batting Pads" },
    { id: 87, name: "Premium Pads 3", category: "pads", price: 2999, image: "images/pads/1_a03b0a6b-e6cf-48b8-9794-b509cc4008ea.png", desc: "Batting Pads" },
    { id: 88, name: "Premium Pads 4", category: "pads", price: 3099, image: "images/pads/1_e534d7f0-e6ff-41b2-8cb9-18a55fc95747.jpg", desc: "Batting Pads" },
    { id: 89, name: "Pro Pads 1", category: "pads", price: 2499, image: "images/pads/41FDOE9aOPL.jpg", desc: "Batting Pads" },
    { id: 90, name: "Pro Pads 2", category: "pads", price: 2599, image: "images/pads/45732364-8128-4cbf-9d84-2bf71b212ae1.png", desc: "Batting Pads" },
    { id: 91, name: "Pro Pads 3", category: "pads", price: 2699, image: "images/pads/51blvH9byQL._SX679.jpg", desc: "Batting Pads" },
    { id: 92, name: "Pro Pads 4", category: "pads", price: 2799, image: "images/pads/71zTh-6eO0L._SL1500.jpg", desc: "Batting Pads" },
    { id: 93, name: "Pro Pads 5", category: "pads", price: 2899, image: "images/pads/8666828.jpg", desc: "Batting Pads" },
    { id: 94, name: "Adidas Pads", category: "pads", price: 3199, image: "images/pads/Adidasmasterblasterclubcricketbat_96_af5488f9-308a-4039-a981-169ef79caf2f.png", desc: "Batting Pads" },
    { id: 95, name: "Arabian Pads", category: "pads", price: 2999, image: "images/pads/ArabianGreenComfortGreyPastelGreyDoubleCream-2025-07-14T155535.826.png", desc: "Batting Pads" },
    { id: 96, name: "Design Pads 1", category: "pads", price: 2799, image: "images/pads/Untitled_design_1_1477e06a-8216-4eaa-8b38-cedb35b57bc7.png", desc: "Batting Pads" },
    { id: 97, name: "Design Pads 2", category: "pads", price: 2899, image: "images/pads/Untitleddesign-2025-12-27T172527.628.jpg", desc: "Batting Pads" }
];

let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'default';

// View Product Detail Function
function viewProductDetail(productId) {
    // Store product ID in localStorage for product-detail.html
    localStorage.setItem('selectedProductId', productId);
    
    // Navigate to product detail page
    window.location.href = 'product-detail.html?id=' + productId;
}

// Make products globally accessible
window.allProducts = products;

// Display Products
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    let filteredProducts = products;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }

    // Filter by search
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Sort by category order when showing all
    if (currentCategory === 'all' && !searchQuery) {
        const categoryOrder = { 'bats': 1, 'balls': 2, 'gloves': 3, 'helmets': 4, 'pads': 5 };
        filteredProducts.sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]);
    }

    // Apply sorting
    if (sortBy === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    grid.innerHTML = `
        <div class="category-products-grid">
            ${filteredProducts.map(product => `
                <div class="product-card" onclick="viewProductDetail(${product.id})" style="cursor: pointer;">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        ${window.stockManager ? window.stockManager.getStockBadge(product.id) : ''}
                    </div>
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <p class="price">₹${product.price.toLocaleString()}</p>
                    ${window.stockManager ? window.stockManager.getUrgencyMessage(product.id) : ''}
                    <div class="product-card-actions">
                        <button class="btn-quick-view" onclick="event.stopPropagation(); openQuickView(${product.id})">Quick View</button>
                        <button class="btn-cart add-to-cart" data-id="${product.id}" onclick="event.stopPropagation()" ${window.stockManager && !window.stockManager.isProductAvailable(product.id) ? 'disabled' : ''}>
                            ${window.stockManager && !window.stockManager.isProductAvailable(product.id) ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Initial load
window.addEventListener('DOMContentLoaded', function() {
    // Show loading skeleton first
    if (window.loadingManager) {
        window.loadingManager.show();
    }
    
    // Check URL parameter for category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        currentCategory = categoryParam;
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === categoryParam) {
                btn.classList.add('active');
            }
        });
    }
    
    // Load products with delay for skeleton effect
    setTimeout(() => {
        displayProducts();
    }, 800);
    
    // Filter by category
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            displayProducts();
        });
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function() {
        searchQuery = this.value;
        displayProducts();
    });

    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', function() {
        sortBy = this.value;
        displayProducts();
    });
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
