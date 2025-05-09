// Mobile Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.createElement('nav');
mobileMenu.className = 'mobile-menu';

// Clone the main navigation content
const hashOrigin = window.location.hash.slice(1) || 'pt-br';
const mainNav = document.querySelector('.main-nav');
const navContent = mainNav.innerHTML;
mobileMenu.innerHTML = navContent;

mobileMenu.querySelectorAll('ul').forEach(nav => {
    nav.classList.remove('active');
    nav.style.display = 'none';
});

mobileMenu.querySelectorAll('ul.' + hashOrigin).forEach(nav => {
    nav.classList.add('active');
    nav.style.display = 'block';
});

document.body.appendChild(mobileMenu);

// Add click event to mobile menu button
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});
