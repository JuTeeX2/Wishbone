document.getElementsByClassName('header')[0].style= "position: sticky; top: 0px;";

// Бургер
const menu = document.querySelector('.menu_body');
const menuBtn = document.querySelector('.menu_btn')

const body = document.body;

if(menu && menuBtn){
	menuBtn.addEventListener('click', () =>{
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('lock');
	})
	menu.querySelectorAll('.smoothscroll').forEach(link =>{
		link.addEventListener('click', () =>{
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		})
	})
}

// ====================================================================================

// Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

// ====================================================================================

// Анимация при прокрутке элемента gap
const elements = document.querySelectorAll('.gap');

const options = {
	root: null,
	rootMargin: '0px',
	threshold: .2
}

const cb = (entries) => {
	entries.forEach(entry =>{
		if (entry.isIntersecting){
			entry.target.classList.add('active');
		} else {
			// entry.target.classList.remove('active');
		}
	});
}

let observer = new IntersectionObserver(cb, options);

elements.forEach(element => {
	observer.observe(element);
});