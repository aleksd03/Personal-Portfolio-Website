window.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.querySelector('.begin h1');
    if (mainTitle) {
        mainTitle.classList.add('animate_title');
    }

    const subtitle = document.querySelector('.begin h2');
    if (subtitle) {
        subtitle.classList.add('animate_subtitle');
    }

    const fadeElements = document.querySelectorAll('.left, .right, .title_main h2');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade_in');
                    if (entry.target.matches('.title_main h2')) {
                        entry.target.classList.add('animate_secondary_title');
                    }
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