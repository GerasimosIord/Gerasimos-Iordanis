document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Set dark mode as default
    body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        themeToggle.innerHTML = body.classList.contains('light-mode') 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate sections and skills on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.classList.contains('skill')) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .skill').forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });

    // Form submission (using Formspree)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        // This won't prevent the form from submitting to Formspree
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }, 1000);
    });

    // Add this to your existing script.js file

    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});