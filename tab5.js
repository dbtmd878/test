/**

const tab = document.querySelector('#tab');
const btns = tab.querySelectorAll('ul li');
const boxs = tab.querySelectorAll('article div');

btns.forEach(function (btn, idx) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    activation(boxs, idx);
    activation(btns, idx);
  });
});

function activation(array, idx) {
  for (const el of array) {
    el.classList.remove('on');
  }
  array[idx].classList.add('on');
}

 */

function MyTab(el) {
  this.tab = document.querySelector(el);
  this.btns = this.tab.querySelectorAll('ul li');
  this.boxs = this.tab.querySelectorAll('article div');
  this.bindingEvent();
}

MyTab.prototype.bindingEvent = function () {
  // console.log(this); #tab
  this.btns.forEach(
    function (btn, idx) {
      // console.log(this) window;
      btn.addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          // console.log(this) li;
          this.activation(this.boxs, idx);
          this.activation(this.btns, idx);
        }.bind(this)
      );
    }.bind(this)
  );
};

MyTab.prototype.activation = function (array, idx) {
  for (const el of array) {
    el.classList.remove('on');
  }
  array[idx].classList.add('on');
};

const abc = new MyTab('#tab');

// bind 메서드를 사용하여 특정 코드 블럭안쪽의 this 객체를 원하는 값으로 강제 바인딩이 가능
const text = function () {
  console.log(this);
}.bind({
  name: 'apple'
});

text();
