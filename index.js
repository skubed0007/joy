document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Add scroll event to trigger fade-in effect
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('visible');
            }
        });
    });

    // Trigger scroll event on load to handle initial visibility
    window.dispatchEvent(new Event('scroll'));
});
