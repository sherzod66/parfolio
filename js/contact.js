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
		this.setTimeout(() => {
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
	document.body.classList.toggle('lock');
}

list.addEventListener("click", listBar);

function listBar(event) {
	burger.classList.remove('active');
	siteBar.classList.remove('active');
	list.classList.remove('active');
	document.body.classList.remove('lock');
}

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById('form');
	form.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidation(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('sending');
			} else {
				alert('Ошибка');
				form.classList.remove('sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}


	function formValidation(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});