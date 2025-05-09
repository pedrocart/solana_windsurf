// Language configuration
document.addEventListener('DOMContentLoaded', function() {
    // Get all language buttons
    const languageBtns = document.querySelectorAll('.language-btn');

    // Get URL hash to define which language to load
    let hashOrigin = window.location.hash.slice(1) || 'pt-br';
    const sections = document.querySelectorAll('div.en, div.pt-br, .mobile-menu ul.en, .mobile-menu ul.pt-br');
    const navflex = document.querySelectorAll('.main-nav ul.en, .main-nav ul.pt-br');
    
    navflex.forEach(nav => {
        nav.classList.remove('active');
        nav.style.display = 'none';

        if (nav.classList.contains(hashOrigin)) {
            nav.classList.add('active');
            nav.style.display = 'flex';
        }
    });
    
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';

        if (section.classList.contains(hashOrigin)) {
            section.classList.add('active');
            section.style.display = 'block';
        }
    });
    
    // Add click event listeners to language buttons
    languageBtns.forEach(button => {
        button.addEventListener('click', function() {        
            if ( hashOrigin !== button.dataset.lang ){
            
                // Get the language code from the button
                const lang = this.innerHTML.toLowerCase();
                
                // Update all language buttons
                languageBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.classList.contains(lang)) {
                        btn.classList.add('active');
                    }
                });
                
                // Update language content sections            
                sections.forEach(section => {
                    if (section.classList.contains('active')) {
                        section.classList.remove('active');
                        section.style.display = 'none';
                    } else {
                        section.classList.add('active');
                        section.style.display = 'block';
                    }
                });
                
                navflex.forEach(nav => {
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        nav.style.display = 'none';
                    } else {
                        nav.classList.add('active');
                        nav.style.display = 'flex';
                    }
                });
                
                // Update URL hash if needed
                if (window.location.hash !== `#${lang}`) {
                    window.history.pushState({}, '', `#${lang}`);
                }

                // Update hashOrigin
                hashOrigin = lang;
            }
        });
    });

    // Check URL hash and set initial language
    const hash = window.location.hash.slice(1);
    // if (hash === 'pt-br' || hash === 'en') {
    //     // Trigger click on corresponding button
    //     document.querySelector(`[data-lang="${hash}"]`).click();
    // } else {
    //     // Default to Portuguese
    //     document.querySelector('[data-lang="pt-br"]').click();
    // }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1);
        if (hash === 'pt-br' || hash === 'en') {
            document.querySelector(`[data-lang="${hash}"]`).click();
            console.log(hash);
        }
    });
});



// Initialize language
let currentLanguage = localStorage.getItem('language') || 'pt-br';

// Function to update language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Add event listeners to language buttons
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        updateLanguage(lang);
    });
});

// Initialize language on page load
updateLanguage(currentLanguage);