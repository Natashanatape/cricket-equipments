// ---------------------------
// Hamburger menu toggle
// ---------------------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

// ---------------------------
// Stats counter animation
// ---------------------------
const statNumbers = document.querySelectorAll(".stat-number");

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 98 ? "%" : "+");
        }
    };
    updateCounter();
};

const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

statNumbers.forEach((stat) => statsObserver.observe(stat));

// ---------------------------
// Newsletter form
// ---------------------------
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (toast) {
            toast.textContent = "Subscribed successfully!";
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
                toast.textContent = "Item added to cart!";
            }, 2000);
        }
        newsletterForm.reset();
    });
}

// ---------------------------
// Cart counter + toast
// ---------------------------
const cartCountSpan = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const toast = document.getElementById("toast");
const cartBtn = document.getElementById("cartBtn");

let cartCount = 0;

addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        if (cartCountSpan) {
            cartCountSpan.textContent = cartCount;
        }

        // Cart button bump animation
        if (cartBtn) {
            cartBtn.classList.add("bump");
            setTimeout(() => cartBtn.classList.remove("bump"), 250);
        }

        // Toast show
        if (toast) {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 1500);
        }
    });
});

// ---------------------------
// Contact form submit handling
// ---------------------------
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
        contactForm.reset();
    });
}

// ---------------------------
// Smooth scroll for navbar links (same-page # links only)
// ---------------------------
const navLinksAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (navLinksAnchors.length > 0) {
    navLinksAnchors.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                const offsetTop = targetEl.offsetTop - 70; // navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
}

// ---------------------------
// Highlight active nav link on scroll (for sections on same page)
// ---------------------------
const sections = document.querySelectorAll("section[id]");

if (sections.length > 0 && navLinksAnchors.length > 0) {
    window.addEventListener("scroll", () => {
        let currentId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentId = section.getAttribute("id");
            }
        });

        navLinksAnchors.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const hrefId = href.substring(1);
                if (hrefId === currentId) {
                    link.classList.add("active");
                }
            }
        });
    });
}

// ---------------------------
// Navbar scroll effect
// ---------------------------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ---------------------------
// Back to top button
// ---------------------------
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

// ---------------------------
// Scroll reveal for sections & cards
// ---------------------------
const revealElements = document.querySelectorAll(".section, .card, .contact-form");

revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2,
    }
);

revealElements.forEach((el) => observer.observe(el));

// ---------------------------
// Page Loader – show only on first visit
// ---------------------------
const loader = document.getElementById("loader");
if (loader) {
    const isFirstVisit = !localStorage.getItem('visitedBefore');
    
    if (isFirstVisit) {
        localStorage.setItem('visitedBefore', 'true');
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.classList.add("loader-hide");
                setTimeout(() => {
                    loader.style.display = "none";
                }, 400);
            }, 800);
        });
    } else {
        loader.style.display = "none";
    }
}
