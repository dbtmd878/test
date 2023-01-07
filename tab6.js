class MyTab {
  constructor(selector) {
    this.tab = document.querySelector(selector);
    this.btns = this.tab.querySelectorAll('ul li');
    this.boxs = this.tab.querySelectorAll('article div');
    this.bindingEvent();
  }

  bindingEvent() {
    this.btns.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        this.activation(this.boxs, idx);
        this.activation(this.btns, idx);
      });
    });
  }

  activation(array, idx) {
    for (const el of array) {
      el.classList.remove('on');
    }
    array[idx].classList.add('on');
  }
}

new MyTab('#tab');

