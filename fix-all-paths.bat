@echo off
echo ========================================
echo CricketPro - Automatic Path Fixer
echo ========================================
echo.
echo This will fix all CSS and JS paths in HTML files
echo.
pause

cd /d "c:\xampp\htdocs\websites\Portfolio_Natasha_Natape\cricket-equipments"

echo Fixing paths in all HTML files...

REM Fix CSS paths
powershell -Command "(Get-Content 'contact.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'contact.html'"
powershell -Command "(Get-Content 'wishlist.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'wishlist.html'"
powershell -Command "(Get-Content 'checkout.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'checkout.html'"
powershell -Command "(Get-Content 'payment.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'payment.html'"
powershell -Command "(Get-Content 'order-success.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'order-success.html'"
powershell -Command "(Get-Content 'track-order.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'track-order.html'"
powershell -Command "(Get-Content 'user-login.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'user-login.html'"
powershell -Command "(Get-Content 'my-account.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'my-account.html'"
powershell -Command "(Get-Content 'faq.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'faq.html'"
powershell -Command "(Get-Content 'product-detail.html') -replace 'href=\"style.css\"', 'href=\"styles/style.css\"' | Set-Content 'product-detail.html'"

REM Fix JS paths - Generic approach
powershell -Command "(Get-Content 'contact.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'contact.html'"
powershell -Command "(Get-Content 'wishlist.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'wishlist.html'"
powershell -Command "(Get-Content 'checkout.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'checkout.html'"
powershell -Command "(Get-Content 'payment.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'payment.html'"
powershell -Command "(Get-Content 'order-success.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'order-success.html'"
powershell -Command "(Get-Content 'track-order.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'track-order.html'"
powershell -Command "(Get-Content 'user-login.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'user-login.html'"
powershell -Command "(Get-Content 'my-account.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'my-account.html'"
powershell -Command "(Get-Content 'faq.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'faq.html'"
powershell -Command "(Get-Content 'product-detail.html') -replace 'src=\"([^/\"]+\.js)\"', 'src=\"styles/js/$1\"' | Set-Content 'product-detail.html'"

REM Fix admin files
cd admin
powershell -Command "(Get-Content 'admin-login.html') -replace 'href=\"../style.css\"', 'href=\"../styles/style.css\"' | Set-Content 'admin-login.html'"
powershell -Command "(Get-Content 'admin-dashboard.html') -replace 'href=\"../style.css\"', 'href=\"../styles/style.css\"' | Set-Content 'admin-dashboard.html'"
powershell -Command "(Get-Content 'admin-products.html') -replace 'href=\"../style.css\"', 'href=\"../styles/style.css\"' | Set-Content 'admin-products.html'"
powershell -Command "(Get-Content 'admin-orders.html') -replace 'href=\"../style.css\"', 'href=\"../styles/style.css\"' | Set-Content 'admin-orders.html'"

powershell -Command "(Get-Content 'admin-login.html') -replace 'src=\"../([^/\"]+\.js)\"', 'src=\"../styles/js/$1\"' | Set-Content 'admin-login.html'"
powershell -Command "(Get-Content 'admin-dashboard.html') -replace 'src=\"../([^/\"]+\.js)\"', 'src=\"../styles/js/$1\"' | Set-Content 'admin-dashboard.html'"
powershell -Command "(Get-Content 'admin-products.html') -replace 'src=\"../([^/\"]+\.js)\"', 'src=\"../styles/js/$1\"' | Set-Content 'admin-products.html'"
powershell -Command "(Get-Content 'admin-orders.html') -replace 'src=\"../([^/\"]+\.js)\"', 'src=\"../styles/js/$1\"' | Set-Content 'admin-orders.html'"

cd ..

echo.
echo ========================================
echo All paths fixed successfully!
echo ========================================
echo.
echo Fixed files:
echo - index.html (already done)
echo - products.html (already done)
echo - contact.html
echo - wishlist.html
echo - checkout.html
echo - payment.html
echo - order-success.html
echo - track-order.html
echo - user-login.html
echo - my-account.html
echo - faq.html
echo - product-detail.html
echo - admin/admin-login.html
echo - admin/admin-dashboard.html
echo - admin/admin-products.html
echo - admin/admin-orders.html
echo.
echo Now open index.html in browser to test!
echo.
pause
