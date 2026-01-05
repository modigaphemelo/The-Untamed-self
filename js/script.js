// The Untamed Self - Minimal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('sidenavToggle');
    const sidenav = document.getElementById('sidenav');
    
    if (menuToggle && sidenav) {
        menuToggle.addEventListener('click', function() {
            sidenav.classList.toggle('active');
            // Update ARIA attribute for accessibility
            const isExpanded = sidenav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking a link (on mobile)
        const navLinks = sidenav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidenav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
    
    // Reading progress
    const readingProgress = document.querySelector('.reading-progress-fill');
    if (readingProgress) {
        // Throttle scroll events for performance
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight - windowHeight;
                    const scrolled = window.scrollY;
                    
                    if (documentHeight > 0) {
                        const progress = Math.min((scrolled / documentHeight) * 100, 100);
                        readingProgress.style.width = `${progress}%`;
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
});
