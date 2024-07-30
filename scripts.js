

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const menuItems = document.querySelector('.menu-items');
    const leftArrow = document.querySelector('.menu-arrow-left');
    const rightArrow = document.querySelector('.menu-arrow-right');

    

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Change active nav link on scroll
    function changeActiveNav() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveNav();
    window.addEventListener('scroll', changeActiveNav);

    // Horizontal scrolling for menu section
    function scrollMenu(direction) {
        const scrollAmount = 200;
        menuItems.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }

    leftArrow.addEventListener('click', () => scrollMenu('left'));
    rightArrow.addEventListener('click', () => scrollMenu('right'));
});
