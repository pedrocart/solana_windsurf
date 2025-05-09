// Initialize DOM elements
function initDOMElements() {
    navToggle = document.querySelector('.nav-toggle');
    nav = document.querySelector('.nav');
    filterBtns = document.querySelectorAll('.filter-btn');
    portfolioItems = document.querySelectorAll('.project-item');
    contactForm = document.querySelector('.contact-form');
    
    // Initialize IntersectionObserver
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Remove observer once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections with the animate-on-scroll class
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize parallax effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const parallaxDividers = document.querySelectorAll('.parallax-divider');
        parallaxDividers.forEach((divider, index) => {
            const scrollPosition = window.pageYOffset;
            const parallaxSpeed = 0.3 + (index * 0.1);
            const parallaxPosition = scrollPosition * parallaxSpeed;
            
            divider.style.transform = `translateY(${parallaxPosition}px)`;
            divider.style.backgroundPositionY = `${parallaxPosition}px`;
        });
    });
}

// Add smooth scrolling behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize skill cards animation
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards) {
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) rotate(2deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotate(0)';
            });
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Observe sections
function initSectionObservation() {
    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
}

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observe sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
