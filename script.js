// HAMBURGER MENU
const menu = document.querySelector('.toggle-menu');
const wrapper = document.querySelector('nav .wrapper');

// TOGGLE NAVBAR MENU
const navMenu = document.querySelector('nav .menu');
const navbar = document.querySelector('nav');



// TOGGLE MODE
const navMode = document.querySelector('nav .mode');
const navModeIcon = document.querySelector('nav .mode i');
const body = document.body

navMode.addEventListener('click', function () {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    navModeIcon.classList.replace('bxs-moon', 'bxs-sun');
  } else {
    navModeIcon.classList.replace('bxs-sun', 'bxs-moon');
  }
});




menu.addEventListener('click', function() {
    wrapper.classList.toggle('active');

    // TOGGLE NAVBAR MENU
    navMenu.classList.toggle('active');
});



// SWIPER
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// PARTICLE JS
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#185ADB"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#185ADB",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});






// TYPED JS
let typed = new Typed("#typed", {
  loop: true,
  strings: ['Web Developer', 'Freelancer', 'Web Designer'],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 3000,
});




// ACTIVE MENU
const allMenu = document.querySelectorAll('nav ul.menu a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach( function(sect) {
    if (this.pageYOffset + 57 > sect.offsetTop) {
      current = sect.getAttribute('id');
    }
  });

  allMenu.forEach(function(nav) {
    nav.classList.remove('active');
    if (nav.classList.contains(current)) {
      nav.classList.add('active');
    }
  });
});



allMenu.forEach((a)=> {
  a.addEventListener('click', function () {
    navMenu.classList.remove('active');
    wrapper.classList.remove('active');
  })
})





// BACK TO TOP
const btnToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
  if(this.scrollY > 20) {
    btnToTop.classList.add('active');
  } else {
    btnToTop.classList.remove('active');
  }
})