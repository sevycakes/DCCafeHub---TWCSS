// TOGGLE_MENU

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_m');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});

// SLIDER

const tnslider = tns({
    container: "#slider_stage",
    items: 1,
    loop: true,
    slideBy: 1,
    autoplay:true,
    autoplayButton:false,
    autoplayButtonOutput:false,
    speed: 1000,
    nav:false,
    controls:false,
    responsive: {
        375: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 5
        }
    },
    swipeAngle: true,
    speed: 1000
});

// SPA SLIDER

const tnslider2 = tns({
    container: "#slider_stage2",
    items: 1,
    loop: true,
    slideBy: 1,
    autoplay:true,
    autoplayButton:false,
    autoplayButtonOutput:false,
    speed: 1000,
    nav:false,
    controls:false,
    responsive: {
        375: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 5
        }
    },
    swipeAngle: true,
    speed: 1000
});
