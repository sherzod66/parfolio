"use strict"

window.addEventListener("load", function () {
	const wrapper = document.querySelector('.wrapper');
	wrapper.classList.remove('load');

	const animItems = document.querySelectorAll('._anim-tems');

	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-none--hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 300);

	}

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

/*
window.addEventListener("load", windowLoad);

function windowLoad() {
	function digitsContersInit(digitsContersItems) {
		let digitsCounters = digitsContersItems ? digitsContersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	//Функция анимации
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 3000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	digitsContersInit();
}*/
