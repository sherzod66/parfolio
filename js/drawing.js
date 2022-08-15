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

$(".nav__row").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});