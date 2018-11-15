// // false but .toString true
// const obj1 = {
//   name: 'Ben'
// }
// const obj2 = {
//   name: 'Ben'
// }
// // false
// const arr1 = ['Cat'];
// const arr2 = ['Cat'];

// console.log('42'== 42);
// console.log(1===true);

// const age = prompt('How old are you?');
// console.log(age <= 21);

// const num = '42'
// console.log(num);
// console.log(+num);

// const str1 = 'any';
// const str2 = new String(str1);
// console.log(str1===str2);
// console.log(str1==str2);

// // PEMDAS RULES APPLY 
// // FIZZ BUZZ TEST 
// // weird math things
// // console.log(0.1 + 0.2); =====3.000000000004

// let number = 1
// console.log('number', number);   =========number 1
// number++;
// console.log('number', number);   =========number 2
// number++;
// console.log('number', number);   =========number 3
// number--;
// console.log('number', number);   =========number 2

// let number = 1
// console.log(number += 9); =======10

// let cartTotal = 0;
// const item = 9.99;
// const item2 = 7.99;
// const discount = 5.00;    (or 2 with /=discount) or (.5 with *=discount)
// console.log(carTotal += item);        9.99
// console.log(cartTotal += item2);     17.98
// // console.log(cartTotal -= discount);  12.98

// const numb1 = +prompt('Give me a number', 10);
// const numb2 = +prompt('Give me another number', 10);
// alert(numb1 + numb2);

// const firstName = 'Jacob';
// // control flow
// if (firstName === 'Jacob') {
// // if its true this runs
// // indent between braces

// console.log('your name is Jacob');
// } else if (firstName === 'Ben'){

//   console.log('Your name is Ben.')
// }else {
//   // if statement is false, this runs

//   console.log('your name isnt Jacob');
// } 

// const magicNumber = 4;
// if (magicNumber === 4) {
//   console.log(1);
// } else if (magicNumber === 2){
//   console.log(2);
// }else {
//   console.log('No magic number for you.');
// }

// // both side must be true
// if (true && true) {
//   console.log('Great success!');
// }
// // one of the sides has to be true
// if (true || false) {
//   console.log('Great success!')
// }

// const age = 25;
// if(age >= 21 && <=80) {
//   console.log('You are over 21 but less than 80.');
// }

// const oage = 80
// if(oage === 21 || ===80) {
//   console.log('You are 21 or 80.');
// }

// const lastName = "Reckas"
// // looking for truthy and falsy values
// if(!lastName) {
//   console.log(`You did not provide a last name.`)
// }

/*
prompt user for name
if they provide a name alert their name 
if they provide no value alert that you need a valid name
*/
// const userName = prompt('what is your name?');
// if (userName) {
//   alert(userName);
// } else {
//   alert(`We need a valid name.`)
// }

// // refactor the above to ternary statement
// const userName = prompt('what is your name?');
// userName ? alert(userName) : alert(`We need a valid name.`);

// // switch statement
// const superHero = prompt('What is your favorite superhero?');
// switch(superHero) {
//   case 'Batman':
//   console.log('Batman is awesome.');
//   break;
//   case 'Superman':
//   console.log('Superman is not better than Batman.');
//   break;
//   default:
//   console.log('Sorry, not a superhero.');
// }

// const userAge = +prompt("What is your age?");
// if (userAge >= 18 && userAge >=80) {
//   const likesStarWars = confirm('Do you like StarWars?');
//   if (likesStarWars) {
//     alert('May the force be with you');
//   }
// } else if(userAge > 80) {
//   const likesPrunes = confirm('Do you like prunes?');
//   likesPrunes ? alert('Gross') : alert('I guess you are alright.');
// }else {
//   alert('You are too young.');
// }

const color = prompt('What is your favorite color?').toLowerCase();
switch(color) {
  case 'red':
  alert('Red is a great color.');
  break;
  case 'orange':
  alert('Orange is an amazing color.');
  break;
  case 'yellow':
  alert('Yellow is a lovely color.');
  break;
  case 'green':
  alert('Green is a green color.');
  break;
  case 'blue':
  alert('Blue is the best color.');
  break;
  case 'pink':
  alert('Pink is an okay color.');
  break;
  case 'purple':
  alert('Purple is a conflicted color.');
  break;
  case 'black':
  alert('Black is the only color Batman will work in. And sometimes very, very dark grey.');
  break;
  case 'white':
  alert('White is an innocent color.');
  break;
  case 'grey':
  alert('Grey is a gray color.');
  break;
  default:
  alert("Is that a color")
}