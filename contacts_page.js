window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title h1');
    const subtitle = document.querySelector('.title p');
    if (title) {
        title.classList.add('animate_title');
    }
    if (subtitle) {
        subtitle.classList.add('animate_subtitle');
    }

    const fadeElements = document.querySelectorAll('.left_section, .contact_form, .map');
    fadeElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fade_in');
        }
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade_in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeElements.forEach(element => observer.observe(element));
});

const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
};