export default class TextAnimation {
  constructor(
      selector,
      duration,
      activeClass,
      transitionProperty
  ) {
    this._selector = selector;
    this._duration = duration;
    this._activeClass = activeClass;
    this._transitionProperty = transitionProperty;
    this._element = document.querySelector(this._selector);
    this._delay = 0;

    if (!this._element) {
      return;
    }

    this.prePareText();
  }

  createElement(char, index) {
    const _index = index + 1;
    const span = document.createElement(`span`);
    span.textContent = char;

    if (_index % 3 === 0) {
      this._delay -= 20;
    } else {
      this._delay += 40;
    }

    if (index === 0) {
      this._delay = 0;
    }

    span.style.transition = `${this._transitionProperty} ${this._duration}ms ease ${this._delay}ms`;

    return span;
  }

  prePareText() {
    const text = this._element.textContent.trim().split(` `).filter((char) => char !== ``);
    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, char, index) => {
        fragment.appendChild(this.createElement(char, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._activeClass);
  }

  destroyAnimation() {
    this._element.classList.remove(this._activeClass);
  }
}
