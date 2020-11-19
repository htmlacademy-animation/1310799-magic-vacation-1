import {delay} from "./delay";

export async function startPrizesAnimation() {
  const primaryAward = document.querySelector(`.prizes__icon--journeys`);
  const secondaryAward = document.querySelector(`.prizes__icon--cases`);
  if (primaryAward) {
    primaryAward.src = ``;
  }
  if (secondaryAward) {
    secondaryAward.src = ``;
  }
  primaryAward.src = `img/primary-award.svg`;
  await delay(4000);
  secondaryAward.src = `img/secondary-award.svg`;
}
