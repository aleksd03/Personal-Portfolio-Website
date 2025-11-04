window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title h1');
    const subtitle = document.querySelector('.title p');
    if (title) {
        title.classList.add('animate_title');
    }
    if (subtitle) {
        subtitle.classList.add('animate_subtitle');
    }

    const fadeSections = document.querySelectorAll('.sections > div');
    fadeSections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('fade_in');
        }
    });

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        if (isElementInViewport(img)) {
            img.classList.add('fade_in');
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

    fadeSections.forEach(section => observer.observe(section));
    galleryImages.forEach(img => observer.observe(img));
});

const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
};