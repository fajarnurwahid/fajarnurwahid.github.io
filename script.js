const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('nav .nav-menu');
const linkMenu = navMenu.querySelectorAll('li a');
const allSection = document.querySelectorAll('header, section');

if(window.scrollY > 20) {
	nav.classList.add('active');
} else {
	nav.classList.remove('active');
}

allSection.forEach(section=> {
	const y = section.offsetTop;
	const h = section.offsetHeight;

	if(window.scrollY >= (y-64) && window.scrollY <= (y+h)) {
		linkMenu.forEach(link=> {
			if(link.getAttribute('href').slice(1) == section.id) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		})
	}
})



window.addEventListener('click', function (e) {
	if(navMenu.classList.contains('show') && e.target != toggleMenu) {
		if(e.target != navMenu) {
			navMenu.classList.remove('show')
		}
	}
})

window.addEventListener('scroll', function () {
	if(!navMenu.classList.contains('show')) {
		if(this.scrollY > 20) {
			nav.classList.add('active');
		} else {
			nav.classList.remove('active');
		}
	}

	allSection.forEach(section=> {
		const y = section.offsetTop;
		const h = section.offsetHeight;

		if(this.scrollY >= (y-64) && this.scrollY <= (y+h)) {
			linkMenu.forEach(link=> {
				if(link.getAttribute('href').slice(1) == section.id) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			})
		}
	})
})


const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
	loader.classList.add('hide')	;
})


toggleMenu.addEventListener('click', function () {
	navMenu.classList.toggle('show');
})

linkMenu.forEach(link=> {
	link.addEventListener('click', function () {
		navMenu.classList.remove('show');
	})
})




let swiper = new Swiper('.swiper', {
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