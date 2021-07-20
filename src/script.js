import './styles/style.scss'
//PARALLAX
import simpleParallax from 'simple-parallax-js';
//GSAP
import { gsap, ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger); 


//LOADER
window.addEventListener("load", ()=> {

    gsap.to(".loading", { duration: 0.8, opacity: 1, ease: "power2.inOut"})

    setTimeout(function(){
        gsap.to(".loading-text", {duration: 0.8, y:"100%", stagger: 0.1, ease: "power2.inOut"});
    }, 2900)
    setTimeout(function(){ 
        document.querySelector('.loader').classList.add('hidden');

        //top nav and about
        gsap.from(".paragraph", { duration: 1.2, delay: 1.2, opacity: 0, y: 200, stagger: 0.3});
        gsap.from(".top__email", { duration: 1.2, delay: 1.2, opacity: 0, y: 50 });
        gsap.from(".ham", { duration: 1.2, delay: 1.2, opacity: 0, y: 50 })
    }, 4000); 

});


//NAV MENU
const ham = document.querySelector(".ham");
const menu = document.querySelector(".nav-menu");
const links = gsap.utils.toArray(".text");
const socialLinks = gsap.utils.toArray(".link-reveal");

//GSAP TIMELINE
let tl = gsap.timeline({ paused: true})

tl.fromTo(menu, 
    { xPercent: 100, x: 0, ease: "power4.easeOut" },
    { xPercent: 0, x: 0, ease: "power.easeOut" }
)
tl.staggerTo(links, 0.5, {y: "0%", ease: "power4.easeOut"}, 0);
tl.staggerTo(socialLinks, 0.5, {y: "0%", ease: "power4.easeOut"}, 0);

tl.reverse();

//HAMBURGER CLICK
ham.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
    ham.classList.toggle("change")
    document.querySelector("body").classList.toggle("no-scroll")
});


//SCROLL TO ELEMENT ON PAGE WHEN LINK IS CLICKED
const navLinks = document.querySelectorAll(".link");
navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        const el = document.getElementById(link.getAttribute("data-link"));
        tl.reversed(!tl.reversed())
        ham.classList.remove("change")
        document.querySelector("body").classList.remove("no-scroll")

        setTimeout(()=> {
            el.scrollIntoView({
                behavior: "smooth"
            })
        }, 1600)
    })
});


//EXTERNAL LINKS CLICK FUNCTIONS
// has to be a closure for e.preventDefault to work(return function)
const handleExternalLink = (url) => {
    return function(e) {
        e.preventDefault();
        console.log(e.target)
        tl.reversed(!tl.reversed())
        ham.classList.toggle("change")
        setTimeout(()=> {
            window.location.href = url;
        }, 1800)
    }
};
//EVENT LISTENERS FOR EXTERNAL LINKS
document.querySelector(".codepen-link").addEventListener('click', handleExternalLink("https://codepen.io/Nnx0"));
document.querySelector(".github-link").addEventListener('click', handleExternalLink("https://github.com/lux-g"));
document.querySelector(".twitter-link").addEventListener('click', handleExternalLink("https://twitter.com/DevCoder2"));
document.querySelector(".instagram-link").addEventListener('click', handleExternalLink("https://www.instagram.com/devcoder2/"))
document.querySelector('.blog-link').addEventListener('click', handleExternalLink("https://www.marcs-blog.com/"));


//SKILLS ANIMATIONS
// let skillsTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".skills-wrapper"
//     }
// });
// skillsTL.to(".skills-reveal", {duration: 1.2, y:"0%", stagger: 0.2, ease: "power4.easeOut"})


//PROJECT IMAGES
import projectOneImg from './images/nine-store.jpg';
import projectTwoImg from './images/movie-search.png';
import projectFourImg from './images/clone-site.jpg';

const projectOne = document.querySelector('.section-one-img');
projectOne.src = projectTwoImg;
const projectTwo = document.querySelector('.section-two-img');
projectTwo.src = projectOneImg
const projectFour = document.querySelector('.section-four-img');
projectFour.src = projectFourImg


//PARALLAX IMAGES
var imagesParallax = document.querySelectorAll(".parallax");
imagesParallax.forEach(img => {
    new simpleParallax(img, {
        overflow: true,
        delay: 1.5
    }); 
})



//PROJECTS ANIMATIONS
gsap.to(".projects-reveal", { duration: 0.8, y: "0%", ease: "power4.easeOut", scrollTrigger: {
    trigger: ".projects-reveal",
}});

const projectTitles = gsap.utils.toArray(".project-title-text");
const projectImages = gsap.utils.toArray(".image-overlay");
const projectTexts = gsap.utils.toArray(".project-text");
const projectLinks = gsap.utils.toArray(".project-links");

projectTitles.forEach(title => {
    gsap.to(title, {
        duration: 0.8,
        y: "0%",
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: title,
            start: "20px 70%"
        } 
    });
});
projectImages.forEach(img => {
    gsap.to(img, {
        duration: 1.4,
        width: "0%",
        ease: "power2.out",
        scrollTrigger: {
            trigger: img,
            start: "20px 70%"
        } 
    });
});
projectTexts.forEach(text => {
    gsap.from(text, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: text,
        } 
    });
});
projectLinks.forEach(link => {
    gsap.from(link, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: ".project-text",
        } 
    });
});



//COOL STUFF IMAGES
import designsOneImg from './images/design1.jpg';
import designsTwoImg from './images/design2.jpg';
import designsThreeImg from './images/design3.jpg';
import designsFourImg from './images/design4.jpg';
import designsFiveImg from './images/design5.jpg';
import designsSixImg from './images/design6.jpg';

const designOne = document.querySelector('.designs-img1');
designOne.src = designsOneImg;
const designTwo = document.querySelector('.designs-img2');
designTwo.src = designsTwoImg;
const designThree = document.querySelector('.designs-img3');
designThree.src = designsThreeImg;
const designFour = document.querySelector('.designs-img4');
designFour.src = designsFourImg;
const designFive = document.querySelector('.designs-img5');
designFive.src = designsFiveImg;
const designSix = document.querySelector('.designs-img6');
designSix.src = designsSixImg;

//COOL STUFF ANIMATIONS
gsap.to(".designs-reveal", { duration: 0.8, y: "0%", ease: "power4.easeOut", scrollTrigger: {
    trigger: ".designs-reveal",
}});
const coolStuffImages = gsap.utils.toArray(".block");
gsap.from(coolStuffImages, { duration: 1.2, delay: 0.8, opacity: 0, stagger: 0.2, scrollTrigger: {
    trigger: ".designs-reveal"
}})


//CONTACT ANIMATIONS
gsap.to(".contact-reveal", { duration: 0.8, y:"0%", scrollTrigger: {
    trigger: ".contact-reveal",
}})
let contactTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-container",
    }
});
contactTL.to(".contact-link span", {  duration: 0.6, y:"0%", opacity: 1, stagger: 0.2});


//PDF
import PdfFile from './Marc_Trojanowski_Resume.pdf';
const resume = document.querySelector(".resume");
resume.href = PdfFile;