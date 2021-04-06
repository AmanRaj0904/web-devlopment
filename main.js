const sr = ScrollReveal({
    origin : 'top',
    distance: '80px',
    duration : 2000,
    reset:true
}

)
sr.reveal('.wrapper',{})
sr.reveal('.btn',{delay:200})


/*SCROLL ABOUT*/
sr.reveal('.about_-img',{}); 
sr.reveal('.about-title',{delay: 400}); 
sr.reveal('.about-heading',{delay: 400});
sr.reveal('.about-us',{delay: 300}); 
sr.reveal('.about-img',{delay: 600});

/*SCROLL SKILLS*/
sr.reveal('.skills-title',{}); 
sr.reveal('.skill-main',{}); 
sr.reveal('.skill-details',{});
sr.reveal('.skill-main',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
sr.reveal('.skill-one',{interval: 200}); 

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact-title',{delay: 400}); 
sr.reveal('.contact-input',{interval: 200}); 
