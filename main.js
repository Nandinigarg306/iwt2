let navbar=document.querySelector('.navbar');

/*=========scroll section active link====*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header bav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY-150;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top>= offset && top< offset+ height){
            navlinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });
    /*==sticky navbar==*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
};
    /*==scroll reveal===*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box,.contact form',{ origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{ origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{ origin:'right'});

// Get the form element
const form = document.getElementById('contactForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
