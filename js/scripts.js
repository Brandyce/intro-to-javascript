// day nine
// const str = new String("ben")
// console.log(str);

// console.log(Object.getPrototypeOf(str));

// const arr = new Array('Ben', 29);
// console.log(arr);//lots of things like .shift and .push(all part of the array prototype)

// const num = new Number (42);
// console.log(num);

// const bool = new Boolean(true);
// console.log(bool);

// const person = {
//     name: 'Billy Bob';
// };

// console.log(person);

// const dog = 'Fido';
// console.log(dog);

// // Array.prototype

// //old way constructor function
// function Animal(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     this.play = function() {
//         this.energy -= 5;
//     }
// };

// Animal.prototype.eat = function() {
//     this.energy += 10;
// }
// const dog = new Animal('Dog', 40);
// const cat = new Animal('Cat', 5);
// dog.prototype.fetch = function() {
//     this.energy -= 20
// }
// console.log(dog);
// console.log(dog.name);
// console.log(dog.energy);
// dog.play();
// dog.eat();
// console.log(dog.energy);
// console.log(cat);

// function Todo(text, isDone) {
//     this.edit = function() {

//     }
// }


// function User() {
//     // this.name = prompt('What is your name?');
//     // this.password = prompt('What is your password?');
//     this.getStuff = function() {
//         this.getName();
//         this.getPassword();
//     }

//     this.getName = function() {
//         this.name = prompt('n');
//     }
//     this.getPassword = function() {
//         this.password = prompt('p');
//     }
// };

// const user = new User();
// user.getName();
// user.getPassword();
// console.log(user);

//OLD Way
function AnimalOld(name, energy) {
    this.name = name;
    this.energy = energy;
    this.play = function() {
        this.energy -= 5
    }
 }
 //NEW Way
 class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    play() {
        this.energy -= 5;
    }
 }
 
 // const dog = new Animal('fido', 64);
 // console.log(dog);
 // console.log(dog.energy);
 // dog.play();
 // console.log(dog.energy);
 
 //based off Animal and inherits stuff inside
 class Dog extends Animal {
    constructor(name, energy, says) {
        super(...arguments);//grab arguements from parents(arrest)
        this.says = says;
    }
    speak() {
        console.log(`Dog says: ${this.says}`);
    }
 }
 const fido = new Dog('Fido', 40, 'Woof');
 console.log(fido.energy);
 fido.play();
 console.log(fido.energy);
