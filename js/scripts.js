const newPrompt = prompt('How much time do you want to wait (in seconds)?');
console.log(newPrompt);
const timer = setTimeout("hi", newPrompt);

// const intervalPrompt = prompt('How many times do you want the message to apperar?')*1000;
// const setTime = setInterval(quote, intervalPrompt);
// console.log(intervalPrompt);

// function quote () {
//     const random = alert(Math.random().toString(27).substring(2,15));
// }
// function endQuote() {
//     clearTimeout(timer);
//     console.logs(endQuote);
// }

// function myStopFunction() {
//     clearInterval(setTime);
//     console.log(setTime);
// }

// const username = prompt('What is your username?');
// const password = prompt('What is your password?');
// // set item before you get it
// function mySetItem() {
//     // localStorage.setItem('user', username);
//     localStorage.user = username;
// }

// function myGetItem() {
//     const userValue = alert(localStorage.getItem('user'));//one or the other; 30 0r 31
// //    alert(localStorage.user);
//     console.log(userValue);
// } 

// function myClearItem() {
//     console.log(sessionStorage.localStorage.removeItem('user'));
//     console.log(sessionStorage.localStorage.removeItem('password'));
// }

// var v = 1;
// var getValue = (function(x) {
//     return function() {
//         alert(x);
//     };
// }(v));
// v = 2;
// getValue();

// //iife immediately evoked
// (function () {
//     const foo = 'Are you sure about this?';
//     alert(foo);
//     // console.log(foo);
// })();
// console.log(foo);//returns undefined