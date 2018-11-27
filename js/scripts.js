// var name= 'Ben'

// console.log(name)

// function() {
//   console.log('skdfsk');
//   console.log('skdf');

//   if(true) {
//   console.log('skdfsk')
// }

// const body = document.getElementById('blah');
// const body = document.querySelector('#blah');
// const body = document.querySelector('body');
// const body = document.querySelector('body div');//div inside the body
// const body = document.querySelectorAll('item');
// console.log(body);

// function query(queryStr) {
//   console.log(document.querySelector(queryStr));
// }
// query('body');

// // callback- one thing firing off another
// Array.forEach(item => console.lot(item)); 

// const header = document.querySelector('#header');
// console.log(header);
// logs everytime you click. listens for a click. When you click it runs the function.
// header.addEventListener('click', function(e) {
//   console.log(e);
// });
// header.addEventListener('click', event => alert('clicked'));
// header.addEventListener('click', event => header.style.backgroundColor = '#0000ff');
// header.addEventListener('click', event => header.style.display = 'none');

// document.addEventListener('keydown', event => {
//   console.log(event);
//   if(event.key === "Enter") {
//     alert('You hit the enter key.');
//   }
//   header.style.color = 'tomato';
// });

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => alert("clicked!!!!!"));

// const container = document.querySelector('div');
// container.addEventListener('mouseover', () => container.style.background = '#134134');

// const buttons = document.querySelectorAll('button');
// console.log(buttons);

// function someFunction(event) {
//   console.log(event);
// };
// for(let button of buttons) {
//   button.addEventListener('click', () => someFunction());
// };

// buttons.forEach(button => button.addEventListener('click', () => alert('clicked'));

// input.value = 56;

function farToCel(number) {
  return (number - 32) * (5/9)
  console.log(number);
};
function celToFar(otherNum) {
  return (number * (9/5)) + 32
  console.log(number);
}
const which = confirm('Do you want farenheit to celsius?');
const number = +prompt('Number of degrees:');
if(which == true) {
  farToCel(number);
}else{
  celToFar(number);
}
