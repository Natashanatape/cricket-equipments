// FAQ functionality

// Toggle FAQ answer
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const toggle = otherItem.querySelector('.faq-toggle');
                if (toggle) toggle.textContent = '+';
            });
            
            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
                const toggle = item.querySelector('.faq-toggle');
                if (toggle) toggle.textContent = '−';
            }
        });
    });
    
    // Category filtering
    const categoryBtns = document.querySelectorAll('.faq-category-btn');
    const categoryGroups = document.querySelectorAll('.faq-category-group');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide categories
            if (category === 'all') {
                categoryGroups.forEach(group => {
                    group.style.display = 'block';
                });
            } else {
                categoryGroups.forEach(group => {
                    if (group.getAttribute('data-category') === category) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                });
            }
            
            // Close all open FAQs when switching categories
            faqItems.forEach(item => {
                item.classList.remove('active');
                const toggle = item.querySelector('.faq-toggle');
                if (toggle) toggle.textContent = '+';
            });
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('faqSearch');
    const searchBtn = document.querySelector('.btn-search');
    
    function searchFAQs() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Show all FAQs
            faqItems.forEach(item => {
                item.style.display = 'block';
            });
            categoryGroups.forEach(group => {
                group.style.display = 'block';
            });
            return;
        }
        
        let foundAny = false;
        
        categoryGroups.forEach(group => {
            let foundInGroup = false;
            const groupItems = group.querySelectorAll('.faq-item');
            
            groupItems.forEach(item => {
                const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    foundInGroup = true;
                    foundAny = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide group based on whether any items match
            group.style.display = foundInGroup ? 'block' : 'none';
        });
        
        // Show all categories when searching
        categoryBtns.forEach(btn => {
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', searchFAQs);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchFAQs();
            }
        });
        
        // Clear search
        searchInput.addEventListener('input', () => {
            if (searchInput.value === '') {
                searchFAQs();
            }
        });
    }
});
