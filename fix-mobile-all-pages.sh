#!/bin/bash

# List of HTML files to update (excluding index.html which is already done)
files=(
    "payment.html"
    "order-success.html" 
    "track-order.html"
    "my-account.html"
    "faq.html"
    "product-detail.html"
    "admin/admin-login.html"
    "admin/admin-dashboard.html"
    "admin/admin-products.html"
    "admin/admin-orders.html"
)

# Base directory
base_dir="c:/xampp/htdocs/websites/Portfolio_Natasha_Natape/cricket-equipments"

for file in "${files[@]}"; do
    file_path="$base_dir/$file"
    
    if [ -f "$file_path" ]; then
        echo "Processing $file..."
        
        # Add mobile-fixes.css after style.css if not already present
        if ! grep -q "mobile-fixes.css" "$file_path"; then
            sed -i 's|<link rel="stylesheet" href="styles/style.css">|<link rel="stylesheet" href="styles/style.css">\n    <link rel="stylesheet" href="styles/mobile-fixes.css">|g' "$file_path"
            
            # For admin files, use relative path
            if [[ $file == admin/* ]]; then
                sed -i 's|<link rel="stylesheet" href="styles/mobile-fixes.css">|<link rel="stylesheet" href="../styles/mobile-fixes.css">|g' "$file_path"
            fi
        fi
        
        # Add mobile JavaScript files before closing body tag if not already present
        if ! grep -q "mobile-fixes.js" "$file_path"; then
            # For admin files
            if [[ $file == admin/* ]]; then
                sed -i 's|</body>|    <script src="../styles/js/mobile-fixes.js"></script>\n    <script src="../styles/js/mobile-chatbot-fix.js"></script>\n</body>|g' "$file_path"
            else
                sed -i 's|</body>|    <script src="styles/js/mobile-fixes.js"></script>\n    <script src="styles/js/mobile-chatbot-fix.js"></script>\n</body>|g' "$file_path"
            fi
        fi
        
        echo "✅ Updated $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo "🎉 All files processed!"