const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navi-links');
    const navLinks = document.querySelectorAll('.navi-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animation links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //burguer animation
        burger.classList.toggle('toggle');
    });

    
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('fixed', window.scrollY > 0);
});

navSlide();