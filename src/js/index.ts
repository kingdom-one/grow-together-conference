import '../styles/main.scss';
import 'lite-youtube-embed/src/lite-yt-embed';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import { myCopyright } from './modules/utilities';
import AOS from 'aos';
import 'aos/dist/aos.css';

(function () {
	myCopyright();
	AOS.init();
})();
