/* ===================================
   Bam Suppliers - JavaScript
   Premium Plumbing & Sanitary Solutions
   =================================== */

// ===================================
// PAGE NAVIGATION
// ===================================

/**
 * Show/hide pages based on navigation
 * @param {string} pageName - Name of the page to display
 */
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the clicked link
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Close mobile menu if open
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.remove('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
    
    return false;
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================

/**
 * Add shadow to header on scroll
 */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ===================================
// FORM SUBMISSION
// ===================================

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    if (!data.name || !data.phone || !data.message) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Create WhatsApp message
    const message = `New Quote Request from Bam Suppliers Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service || 'Not specified'}

Message:
${data.message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/9779745599575?text=${encodedMessage}`;
    
    // Show confirmation and redirect
    alert('Thank you for your request! You will be redirected to WhatsApp to complete your inquiry.');
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    event.target.reset();
    
    return false;
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

/**
 * Enable smooth scrolling for all anchor links
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for actual anchors (not just #)
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

/**
 * Fade-in animation on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Select all cards for animation
    const animatedElements = document.querySelectorAll(
        '.service-card, .feature-card, .product-card, .testimonial-card'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===================================
// CLOSE MOBILE MENU ON OUTSIDE CLICK
// ===================================

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener('click', (event) => {
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (nav && menuBtn) {
        // Check if click is outside nav and menu button
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    }
});

// ===================================
// PREVENT MENU CLOSE ON NAV LINK CLICK
// ===================================

/**
 * Handle navigation link clicks
 */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu after clicking a link
            const nav = document.getElementById('nav');
            if (nav) {
                setTimeout(() => {
                    nav.classList.remove('active');
                }, 300);
            }
        });
    });
});

// ===================================
// FORM VALIDATION
// ===================================

/**
 * Real-time form validation
 */
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            // Allow only numbers, spaces, +, -, and ()
            e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
        });
    });
});

// ===================================
// LAZY LOADING FOR IMAGES (if needed)
// ===================================

/**
 * Lazy load images when they come into viewport
 */
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================

/**
 * Show/hide scroll to top button
 */
function initScrollToTop() {
    // Create button element
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-blue);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 998;
        box-shadow: 0 4px 16px rgba(0, 102, 204, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to enable scroll to top button
// initScrollToTop();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// ANALYTICS & TRACKING (if needed)
// ===================================

/**
 * Track button clicks and form submissions
 */
function trackEvent(eventName, eventData) {
    // Add your analytics tracking code here
    // Example: Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
}

// Track call button clicks
document.addEventListener('DOMContentLoaded', () => {
    const callButtons = document.querySelectorAll('a[href^="tel:"]');
    callButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('call_button_click', { phone: '+977 9745599575' });
        });
    });

    // Track WhatsApp button clicks
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('whatsapp_button_click', { phone: '+977 9745599575' });
        });
    });
});

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================

console.log('%c Bam Suppliers Website ', 'background: #0066CC; color: white; font-size: 16px; padding: 10px;');
console.log('%c Premium Plumbing & Sanitary Solutions | Dhangadi ', 'color: #0066CC; font-size: 12px;');
console.log('%c Contact: +977 9745599575 | Email: bambipin567@gmail.com ', 'color: #4A4A4A; font-size: 10px;');

// ===================================
// ERROR HANDLING
// ===================================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // You can send errors to a logging service here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ===================================
// BROWSER COMPATIBILITY CHECK
// ===================================

/**
 * Check for required browser features
 */
document.addEventListener('DOMContentLoaded', () => {
    const requiredFeatures = [
        'querySelector',
        'addEventListener',
        'classList',
        'fetch'
    ];

    const unsupportedFeatures = requiredFeatures.filter(
        feature => !(feature in document || feature in window)
    );

    if (unsupportedFeatures.length > 0) {
        console.warn('Some features may not work in this browser:', unsupportedFeatures);
    }
});

// ===================================
// EXPORT FUNCTIONS (if using modules)
// ===================================

// Uncomment if using ES6 modules
// export { showPage, toggleMenu, handleSubmit };
