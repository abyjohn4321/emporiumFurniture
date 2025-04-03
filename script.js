document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Add to cart functionality (simplified)
    const addToCartButtons = document.querySelectorAll('.view-collection, .category-card a');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('view-collection') {
                e.preventDefault();
            }
            count++;
            cartCount.textContent = count;
            
            // Animation for cart icon
            cartCount.parentElement.classList.add('pulse');
            setTimeout(() => {
                cartCount.parentElement.classList.remove('pulse');
            }, 300);
        });
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.collection-item, .testimonial-card, .category-card, .about-content, .about-image, .contact-form, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.collection-item, .testimonial-card, .category-card, .about-content, .about-image, .contact-form, .contact-info');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Language and currency switcher
    const languageSelect = document.getElementById('language');
    const currencySelect = document.getElementById('currency');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            // In a real implementation, this would change the language
            console.log(`Language changed to ${this.value}`);
        });
    }
    
    if (currencySelect) {
        currencySelect.addEventListener('change', function() {
            // In a real implementation, this would change prices
            console.log(`Currency changed to ${this.value}`);
        });
    }
});