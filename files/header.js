function nWhatAscreen() {
	// Определение операционной системы и браузер
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}

	// Проверка. Если одно из устройст с тачскрином
	if (isMobile.any()) {
		// Если ПК. Добавляется класс _touch к Body
		document.body.classList.add('_touch');
		// Собераются все стрелки с классом menu__arrow в переменную
		let menuArrows = document.querySelectorAll('.menu__arrow');
		// Есть ли стрелки в массиве
		if (menuArrows.length > 0) {
			for (let index = 0; index < menuArrows.length; index++) {
				const menuArrow = menuArrows[index];
				menuArrow.addEventListener("click", function (e) {
					menuArrow.parentElement.classList.toggle('_active');
				});
			}
		}
	} else {
		// Если тачскрин. Добавляется класс _pc к Body
		document.body.classList.add('_pc');
	}

	// Меню бургер
	const iconMenu = document.getElementById('burger');
	const menuBody = document.querySelector('.menu__body');
	const menu_item_has_children = document.querySelector('.menu-item-has-children');
	if (iconMenu) {
		iconMenu.addEventListener("click", function () {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			menu_item_has_children.classList.remove('_active');
		});
	}
	const closeMenu = document.querySelector('.header__close-menu');
	const menuItems = document.querySelectorAll('.menu-item');
	if (closeMenu) {
		closeMenu.addEventListener("click", function (e) {
			document.body.classList.remove('_lock');
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		});
	}
}
nWhatAscreen();

jQuery(document).ready(function($) {
	var isTouchDevice = 'ontouchstart' in document.documentElement;
	if (isTouchDevice) {
		$('.menu-item-has-children-big .menu__arrow').on('click', function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('active-children-big');
			$('body').toggleClass('open-big-menu');
		});
	} else {
		$('.menu-item-has-children-big').hover(function() {
			$(this).addClass('active-children-big');
			$('body').addClass('open-big-menu');
		}, function() {
			$(this).removeClass('active-children-big');
			$('body').removeClass('open-big-menu');
		});
	}
});