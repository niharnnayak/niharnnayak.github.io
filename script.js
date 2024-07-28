// Smooth scrolling
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Responsive navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Animate project cards on scroll
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

projects.forEach(project => {
    observer.observe(project);
});

// GSAP animations
gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from("section", { duration: 1, opacity: 0, stagger: 0.2, ease: "power2.out" });
