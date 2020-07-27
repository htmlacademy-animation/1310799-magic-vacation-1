export default () => {
  const lastItemRule = document.querySelector(`.rules__item:last-child`);
  const firstItemRule = document.querySelector(`.rules__item:first-child`);
  const rulesButton = document.querySelector(`.rules__link`);

  firstItemRule.onanimationstart = () => {
    rulesButton.classList.remove(`rules__link--showed`);
  };
  lastItemRule.onanimationend = () => {
    rulesButton.classList.add(`rules__link--showed`);
  };
};
