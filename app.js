const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.big-text2', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.work-button', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


function burger() {
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');

    window.scrollTo(0, 0);
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';

}

function quit() {
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
}

function projects() {
    var element_to_scroll_to = document.querySelectorAll('.projects')[0];
    quit();
    element_to_scroll_to.scrollIntoView();
}

function about() {
    var element_to_scroll_to = document.querySelectorAll('.about')[0];
    quit();
    element_to_scroll_to.scrollIntoView();
}

function contact() {
    var element_to_scroll_to = document.querySelectorAll('.contact')[0];
    quit();
    element_to_scroll_to.scrollIntoView();
}

function projectsButton() {
    var element_to_scroll_to = document.querySelectorAll('.projects')[0];
    element_to_scroll_to.scrollIntoView();
}
