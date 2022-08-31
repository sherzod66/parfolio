let center = [39.659514, 66.960256];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Шахбоз Ахмадов',
		balloonContentBody: 'улица Мир Саид Барака, 1',
		balloonContentFooter: 'Дизайер',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/143/143960.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -39],
	});
	map.geoObjects.add(placemark);
}

ymaps.ready(init);
