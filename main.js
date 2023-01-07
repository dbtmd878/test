 // const title1 = document.querySelector('#title1');
// const title2 = document.querySelector('#title2');

// chageColor(title1, 'blue');
// chageColor(title2, 'red');

// changeSize(title1, '40px');
// changeSize(title2, '70px');
// // title1.style.color = 'red';
// // title1.style.fontSize = '49px';
// // title2.style.color = 'hotpink';
// // title2.style.fontSize = '99px';
// function changeSize(el, px) {
//   el.style.fontSize = px;
// }

// function chageColor(el, color) {
//   el.style.color = color;
// }

// function FontStyle(el, size, color) {
//   this.el = document.querySelector(el);
//   this.el.style.fontSize = size;
//   this.el.style.color = color;
// }

// FontStyle.prototype.changeSize = function (size) {
//   this.el.style.fontSize = size;
// };
// FontStyle.prototype.changeColor = function (color) {
//   this.el.style.color = color;
// };

// const tit1 = new FontStyle('#title1', '40px', 'skyblue');
// const tit2 = new FontStyle('#title2', '19px', 'aqua');

// const data = [
//   { selector: '#title1', color: 'hotpink', size: '20px' },
//   { selector: '#title2', color: 'orange', size: '30px' }
// ];

// data.forEach((el, idx) => {
//   new FontStyle(el.selector, el.size, el.color);
// });

//  ES5에서는 함수안에 this의 유뮤에 따라 자바스크립트가 알아서 생성자 함수인지 일반함수인지를 판단하는건가요?

// 기존ES5 방식의 객체지향에서의 불편한점
// 1. 일반 함수, 생성자 함수의 구분이 쉽지 않음
// 2. 일일이 생성자명.prototype 메서드 명으로 등록하는 방식의 번거로움
// 3. 생성자와 생성자에 등로고디는 매서드를 패키징 할 수가 없어서 코드의 관리가 어려움
// 4. 생성자 안의 this 객체는 원래는 인스턴스를 지칭해야되는데 특정코드안에서는 값이 변경이 된다.
// 예) 반복문 안의 this값은 반복되는 요소를 가르킴, 이벤트문 안쪽에서의 this는 이벤트가 발생한 대상을 가르킴, 일반함수 안에서의 this값은 윈도우 객체를 가르킴

// ES6
// class FontStyle {
//   constructor(el, size, color) {
//     this.el = document.querySelector(el);
//     this.changeSize(size);
//     this.chageColor(color);
//   }

//   chageColor(color) {
//     this.el.style.color = color;
//   }
//   changeSize(size) {
//     this.el.style.fontSize = size;
//   }
// }

