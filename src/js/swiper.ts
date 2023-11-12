import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import '../styles/components/_swiper.scss';

const swiper = new Swiper('.swiper', {
	modules: [Navigation, Autoplay],
	loop: true,
	autoplay: {
		delay: 2000,
		pauseOnMouseEnter: true,
	},
	speed: 750,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
