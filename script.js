// Reveal on scroll
// Toggle mobile nav
const toggle = document.getElementById('menu-toggle');
const navlinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// Animate on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




//animation for typing effect
  // const textArray = ["Aspiring Web Developer", "Frontend Enthusiast", "React Learner"];
  // const typingText = document.getElementById("typing-text");

  // let textIndex = 0;
  // let charIndex = 0;
  // let isDeleting = false;

  // function typeEffect() {
  //   const currentText = textArray[textIndex];
  //   const speed = isDeleting ? 50 : 100;

  //   if (isDeleting) {
  //     typingText.textContent = currentText.substring(0, charIndex--);
  //   } else {
  //     typingText.textContent = currentText.substring(0, charIndex++);
  //   }

  //   if (!isDeleting && charIndex === currentText.length) {
  //     isDeleting = true;
  //     setTimeout(typeEffect, 1000);
  //   } else if (isDeleting && charIndex === 0) {
  //     isDeleting = false;
  //     textIndex = (textIndex + 1) % textArray.length;
  //     setTimeout(typeEffect, 500);
  //   } else {
  //     setTimeout(typeEffect, speed);
  //   }
  // }

  // document.addEventListener("DOMContentLoaded", typeEffect);

  var typed = new Typed("#typing-text", {
    strings: ["Aspiring Web Developer", "Frontend Enthusiast", "JavaScript Learner"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });


//  var typed = new Typed(".typed-name", {
//     strings:["Mudasir Ahmad Dar"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
//   });