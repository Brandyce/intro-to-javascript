// console.log(document.forms.loginForm.btn);
// //hyphen breaks dot notation

// const btn = document.forms.loginForm.btn;

// btn.addEventListener('click', e => {
//  e.preventDefault();
//  // debugger;
//  let firstName = document.forms.loginForm.firstName;

//  console.log(firstName.value);
//  console.log('Clicked');

//  firstName.value = '';
// });

//javascript this
// console.log(this);
// const person = {
//   name: 'Ben',
//   wife: {
//     name: 'Norma',
//     sayName() {
//       // console.log(this.name);
//       console.log(this);
//     }
//   },
//   sayName() {
//     // console.log(this.name);
//     console.log(this);
//   }
// };
// person.sayName();
// console.log(person.wife);

// const person = {
//   firstName: 'Ben',
//   lastName: 'Reckas',
//   age: 29,
//   wife: {
//     firstName: 'Norma',
//     lastName: 'Reckas',
//     age: 23,
//     howOld() {
//       console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//     }
//   },
//   howOld() {
//     console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//   }
// };
// person.howOld();
// person.wife.howOld();

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// // btn1.addEventListener('click', logThis);
// // btn2.addEventListener('click', logThis);
// function logThis() {
//   console.log(this);
// }

// btn1.addEventListener('click', () => {
//   // this.parentElement.style.display = 'none';
//   console.log(this);//window
// });
// btn2.addEventListener('click', function(){
//   console.log(this);//btn2
// });


// const dog = {
//   name:'Fido',
//   says:'Woof',
// };
// const cat = {
//   name:'She-ra',
//   says:'Meow',
// };
// const baldeagle = {
//   name:'Freedom',
//   says:'Baaaakaaaw',
// };

// function speak() {
//   alert(`${this.name} says: ${this.says}.`);
// };

// const dogSays = speak.bind(dog);
// dogSays();
// const catSays = speak.bind(cat);
// catSays();
// const baldeagleSays = speak.bind(baldeagle);
// baldeagleSays();


// function speak(location, status) {
//   alert(`${this.name} says: ${this.says} from ${location} and looks ${status}.`);
// }

// const options = ['The Yard', 'because it is hungry.'];
// speak.apply(dog, options);
// speak.apply(cat, ['Your Lap', 'wants pets']);
// speak.apply(baldeagle, ['The Epic Moutainside', 'is awesome']);

// class Person {
//   constructor(name, age, favColor) {
//     this.name = name;
//     this.age = age;
//     this.favColor = favColor;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }
// const ben = new Person('Ben', 29, 'Pink');
// const david = new Person('david', 40, 'blue');
// ben.sayName();
// david.sayName();



