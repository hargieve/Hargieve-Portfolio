/* STICKY NAVBAR */
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ACTIVE LINK ON SCROLL */
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

/* TYPING EFFECT */
const typed = new Typed('.typing', {
    strings: ['Engineering', 'Developer', 'Student'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/* SCROLL REVEAL ANIMATION */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.home-content, .home-img, .heading, .about-img, .about-content, .skill-card, .project-card, .contact-box-simple').forEach(item => {
    observer.observe(item);
});