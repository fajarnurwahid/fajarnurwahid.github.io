// NAVBAR
const navbarMenuWrapper = document.querySelector('.navbar-menu-wrapper')
const navbarToggle = document.querySelector('.navbar-menu-toggle')

navbarToggle.addEventListener('click', function() {
    navbarMenuWrapper.classList.toggle('show')
    document.body.classList.toggle('no-scroll', navbarMenuWrapper.classList.contains('show'))
})







// CERTIFICATE
const certificateImages = document.querySelectorAll('.certificate-item img')
const certificateModal = document.querySelector('.certificate-modal')
const certificateModalImage = certificateModal.querySelector('.certificate-modal-image')

certificateImages.forEach(image=> {
    image.addEventListener('click', function() {
        certificateModalImage.src = this.src
        certificateModal.classList.add('show')
        document.body.classList.add('no-scroll')
    })
})







// MODE
const toggleMode = document.querySelector('.navbar-mode-checkbox')

if(localStorage.getItem('theme')) {
    const isChecked = localStorage.getItem('theme') == 'dark'
    document.body.parentNode.dataset.theme = localStorage.getItem('theme')
    toggleMode.checked = isChecked
} else {
    document.body.parentNode.dataset.theme = 'light'
}

toggleMode.addEventListener('change', function() {
    const value = this.checked ? 'dark' : 'light'
    document.body.parentNode.dataset.theme = value
    localStorage.setItem('theme', value)
})







// WINDOW
const navbar = document.querySelector('nav')
const sections = document.querySelectorAll('header, section')
const navbarLinks = document.querySelectorAll('.navbar-menu-item')

navbarLinks.forEach(link=> {
    link.addEventListener('click', function() {
        navbarMenuWrapper.classList.remove('show')
        document.body.classList.toggle('no-scroll', navbarMenuWrapper.classList.contains('show'))
    })
})

window.addEventListener('scroll', function() {
    navbar.classList.toggle('shadow', window.scrollY > 20)

    sections.forEach(section=> {
		const y = section.offsetTop;
		const h = section.offsetHeight;

		if(this.scrollY >= (y-64) && this.scrollY <= (y+h)) {
			navbarLinks.forEach(link=> {
				if(link.getAttribute('href').slice(1) == section.id) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			})
		}
	})
})

window.addEventListener('click', function(e) {
    if(e.target.matches('.certificate-modal')) {
        certificateModal.classList.remove('show')
        document.body.classList.remove('no-scroll')
    }
})







// SWIPER
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});