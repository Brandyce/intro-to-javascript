// var name= 'Ben'

// console.log(name)

// function() {
//   console.log('skdfsk');
//   console.log('skdf');

//   if(true) {
//   console.log('skdfsk')
// }

// Arrays start at 0, NOT 1
// can store multiple data types
// const myFirstArray = ['Brandyce', 18, false, 'Fresno', ['number0', 'number1', 'number2']];
// console.log(myFirstArray[4][1]);

// const geekwise = [['Web for Beginners', true], ['Mobile Friendly', true], ['Intro to Js', false]];
// console.log(geekwise[1][0]);//Mobile Friendly 
// console.log(geekwise[0][0]);//WB for Beginners
// console.log(geekwise[2][1]);//false
// console.log(geekwise[1]);//[Mobile Friendly, true]

// var me = ['How to Train Your Dragon', 77, true, 2019];
// console.log(me[0].length);
// console.log(me[]);

// const names = ['Ben' 'Norma', 'Olivia', 'Sarah'];
// names.push('Luna');//adds Luna
// names.push('Shosh');
// names.unshift('cat');
// names.pop();//get rid of last(Luna)
// names.shift();//get rid of first(Ben)
// names.splice(0, 1, "Benjamin");//changes Ben to Benjamin
// names.splice(3, 1, 'Shoshanna');//changes shosh to shoshanna
// names.splice(2, 0, 'Luna');
// names.splice(3, 2);//removes last two names
// names.splice(1);//removes last two items

// const names = ['Ben' 'Norma', 'Olivia', 'Sarah'];
// names.slice(2);//pulls out last 2
// const kids = names.slice(2);
// const parents = names.slice(0, 2);//pulls first two

// const nums = [1, 2, 3, 4, 5, 'me', 6, 7, 8, 9,];
// nums.indexOf('Me');//5
// nums.includes('Me');//true
// nums.indexOf('Norma')//-1
// if (nums.indexOf('Norma') === -1) {console.log(alert('Invalid'));}
// names.reverse();


// const luckyNums = [2, 3, 4, 5, 'me', 6, 7, 2, 9,];
// luckyNums.indexOf(2); //0 -first instance
// luckyNums.lastIndexOf(2); //8 -last instance
// arr.slice(567, 1); //identifies(finds) which one you want to remove
// names.sort();//[1, 10, 2, 3]

// const str = 'racecar';
// str = str.split('').reverse().join('');//true

// const favMovie1 = ['title1', 'character0'];
// const favMovie2 = ['title2', 'character1'];
// const favMovie3 = ['title3', 'character2'];
// const favMovie4 = ['title4', 'character3'];
// const favMovie5 = ['title5', 'character4'];
// const faveMovies = [faveMovie1, faveMovie2, faveMovie3, faveMovie4, faveMovie5];
// const faveMovies = [faveMovie1[0], faveMovie2[0], faveMovie3[0], faveMovie4[0], faveMovie5[0]];
// console.log('least fav:', faveMovie5);
// console.log('most fav:', faveMovie3);
// alert(faveMovies. length);

// //dont do this
// let counter = 0;
// while (counter >= 10) {
//   console.log(counter);

//   counter++; //without this it will run forever
// }

// //do these
// for(let i = 5; i <=10; i++) {
//   console.log('i');//if "ben" and i=0, then ben 10x. This gives us 5-10
// }

// const names = ['Luke', 'Leia', 'Anikan', 'Padame'];
// for(let i = 0; i < name.length - 1, i++) {
//   console.log(name[i]);
// }// gives Luke, Leia, and Anikan. -1 means no Padame.

// // all do the same
// const albums = ['Led Zeppelin I', 'Led Zeppelin II', 'Led Zeppelin III'];
// for(let i = 0; i < albums.length; i++){
//   console.log(albums[i]);
// }//lists all

// for(let name of names) {
//   console.log(name);
// }//better if array is plural and name is singular. cant exclude a certain number.

// names.forEach(name => console.log(name));

// // not this one
// for(let album of albums) {
//   console.log(album);

//   if(album === 'Led Zeppelin II'){
//     break;//can stop certain commands
//   }
// }

// //objects
// const person = {
//   name: 'Ben';
//   age: 29;
// };
// console.log(person); //name: "ben"...
// for(let key in person) {
//   console.log(person[key]);
// }//takes values (typeOf=objects)

// const user = {};
// user.name = prompt(`Give me yo name.`);
// user.age = prompt(`Give me yur age.`);
// console.log(user);//name: "Ben", age:29
// console.log(user);//Ben


// const movies = [['the last jedi', 2018], ['Baby Driver', 2017], ['The Departed', 2014]];
// for(let i = 0; i < movies.length; i++) {
//   if(movies[1][0] === 'Baby Driver') {
//     alert(`Your favorite movie is ${movies[i][0]} and was made in ${movies[i][1]}`)
//   }
// }

// for(let movie of movies) {
//   if(movies[0] === 'Baby Driver') {
//     alert(`Your favorite movie is ${movie[0]} and was made in ${movie[1]}`)
//   }
// }

// movies.forEach(movie => {
//   if(movies[0] === 'Baby Driver') {
//     alert(`Your favorite movie is ${movie[0]} and was made in ${movie[1]}`)
// });


// const item1 = prompt('what do you need to do?');
// const item2 = prompt('what do you need to do?');
// const item3 = prompt('what do you need to do?');
// const todoList = [[item1], [item2], [item3]];
// console.log(todoList);

// for(let i = 0; i < todoList.length; i++) {
//   const list = todosList[i].push(+prompt('How many days will it take?')};
//   console.log(list);

// let longestItem = 0;
// let longestItemIndex = 0;
// for(let i = 0; i < todos.length; i++) {
//   if(todos[i][1] > longestItem) {
//     longestItem = todos[i][1];
//     longestItem = i;
//   }
// };
// console.log(longestItem);
// console.log(longestItemIndex);
// console.log.('Lonstest Item:', todos.splice([longestItemIndex], 1));

// for(let item of todos) {
//   todos.push('ez pz');
//   alert(item);
// }


// for(let i = 0; i < todoList.length; i++) {
  
// };

// console.log(todoList);



// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];
// for(let i = 0; i < todos.length; i++) {
//   leastFavoriteTeams.unshift('Lakers');
//   leastFavoriteTeams.push('OhioStates');
//   leastFavoriteTeams.splice(3, 1);
//   leastFavoriteTeams.unshift('Patriots');
// }
// console.log(leastFavoriteTeams)
// /**
//  * 1) Add 'Lakers' to the front of the leastFavoriteTeams array
//  * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
//  * 3) Remove 'Patriots' from the leastFavoriteTeams array
//  * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
//  * 5) Console log the array to see if you did everything right
//  *
//  * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
//  */

// const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];
// for(let hero of heros) {
  
// }
// /**
//  * 1) Reverse the heroes array
//  * 2) Add 'Ember Spirit' after the first index of the heroes array
//  * 3) Remove the last member of the heroes array
//  * 4) Remove the first item of the heroes array
//  * 5) Add 'Shadow Fiend' to the beginning of the heroes array
//  * 6) Console log the array to see if you did everything right
//  *
//  * -> ['Shadow Fiend', 'Phantom Lancer', 'Ember Spirit']
//  */


//  function add(a, b) {
//   console.log(a + b);
//  };
//  add(2, 2);

//  function subtract(a, b) {
//   console.log(a - b);
//  };
//  subtract(2, 2);

// console.log(name);

// function logSomething() {
//   const name = 'Ben';
//   console.log('name');
//  };

//  logSomething();

//  const number = 42;
//  function answerToLife() {
//    console.log(number);
//  }
//  console.log(number);
//  answerToLife();

//  const add = (a, b) => {
//    console.log(a + b);
//  };
//  add(13242, 3413);

//  const sayName = name => {
//    console.log(name);
//  }
//  sayName('Fido');

//  const cat = 'Celestia';
//  console.log(cat.substr(2, 2));

//  const age = +prompt('Age for dog');
//  function convert(age, b) {
//   console.log(age * 7);
//    }; 
//    convert(age);


//    function lifeTimeSupply(perDay) {
//      console.log(80 * perDay);
//    }
//    const perDay = prompt('How many cups of coffee do you have a year?');
//    lifeTimeSupply(perDay);
//    alert(`You will need ${} to last you until you are 80.`);



  //  function baseballTeamName(hometown, weatherEvent, animalName) {
  //   console.log(`The ${hometown, weatherEvent, animalName}`)
  //  };
  //  const hometown = prompt('What was your hometown?');
  //  const weatherEvent = prompt ('What was the last weather event you experienced?');
  //  const animalName = prompt('Name an animal:');

  //  function baseballTeamName(hometown, weatherEvent, animalName) {
  //   alert(arr.join(' '));
  //  };

  //  const arr = ['Coalinga', 'Drought', 'Koalas'];

  // class Person {
  //   constructor(name) {
  //     this.name = name;
  //     this.age = age;
  //   }

  //   sayName() {
  //     console.log(this.name);
  //   }
  //   howOld() {
  //     console.log(this.age);
  //   }
  // }

  // const ben = new Person('Ben', 29);
  // const david = new Person('David', 40);
  // console.log(ben.howOld());
  // console.log(david.howOld());

  // function getName() {
  //   const name = prompt('What is your name?');
  //   if(!name) {
  //     getName();
  //   }
  // }
  // getName();

  // function number(given) {
  //  console.log(given * given);

  //   if(!number) {
  //     return('NaN');
  //       number();
  //   }
  // }
// const given = +prompt('Give us a number:');
//  number(given);


 const somethin = prompt('tell me somethin:');
 const newSomethin = somethin.charAt(0).toUpperCase();
 somethin.substr(1);
 console.log(newSomethin);
 console.log(somethin.substr(1));
 console.log(newSomethin + somethin.substr(1))
 const period = somethin.endsWith('.');
 console.log(newSomethin + somethin.substr(1) + period)
   if (!somethin.endsWith('.')) {
    somethin.push('.');
    alert(somethin.join(' '));
   };

// const palin = prompt("tell me something else:");
// const drome = palin.length
// console.log(drome);
// function half(drome) {
//   console.log(drome/2);
// };

// const halves = half(drome);
// const firstHalf = palin.substr(0, half);
// const lastHalf = palin.substr(half, half);