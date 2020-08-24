// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import rules from './modules/rules.js';
import FullPageScroll from './modules/full-page-scroll';
import TextAnimation from "./modules/text-animation";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationTopTitle = new TextAnimation(`.intro__title`, 400, `active-text`, `transform`);
const animationTopDate = new TextAnimation(`.intro__date`, 400, `active-text`, `transform`);

window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);

  setTimeout(() => {
    animationTopTitle.runAnimation();
  }, 300);

  setTimeout(() => {
    animationTopDate.runAnimation();
  }, 700);


  if (window.location.hash.slice(1) === `prizes`) {
    const prizesIntro = document.querySelector(`.prizes__intro-img`);
    prizesIntro.src = `img/primary-award.svg`;
  }
});

document.body.addEventListener(`screenChanged`, (e) => {
  if (!e.detail) {
    return;
  }
  if (e.detail.screenName === `top`) {
    animationTopTitle.runAnimation();
    animationTopDate.runAnimation();
  } else {
    animationTopTitle.destroyAnimation();
    animationTopDate.destroyAnimation();
  }
});
