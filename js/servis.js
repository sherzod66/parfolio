window.addEventListener("load", function () {
	const wrapper = document.querySelector('.wrapper');
	wrapper.classList.remove('load');
});

const burger = document.querySelector('.site-bar__burger');
const siteBar = document.querySelector('.sit-bar');
const list = document.querySelector('.list');

burger.addEventListener("click", openBar);

function openBar(event) {
	burger.classList.toggle('active');
	siteBar.classList.toggle('active');
	list.classList.toggle('active');
	document.body.classList.toggle('lock')
}

list.addEventListener("click", listBar);

function listBar(event) {
	burger.classList.remove('active');
	siteBar.classList.remove('active');
	list.classList.remove('active');
	document.body.classList.remove('lock')
}
//===================


const column = document.querySelectorAll('.block__item');
const windowHeight = document.documentElement.clientHeight;

const columnPosition = []

if (column.length > 0) {
	column.forEach(item => {
		columnPosition.push(item.getBoundingClientRect().top + pageYOffset);
	});
	scrollChek();
}

window.addEventListener('scroll', e => {
	if (document.querySelectorAll('.block__item').length > 0) {
		scrollChek();
	}
});


function scrollChek() {
	let itemIndex = columnPosition.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (itemIndex >= 0) {
		column[itemIndex].classList.add('scroll');
	}
	delete columnPosition[itemIndex];
}