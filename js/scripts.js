// // const title = document.querySelector('#title');

// const title = document.createElement('h1');
// document.body.append(title);
// title.textContent = 'Our Title';

// const list = document.createElement('ul');
// document.body.appendChild(list);

// const cat1 = document.createElement('li');
// cat1.textContent = 'Celestia';
// cat1.dataset.id= 1;//give data id of 1
// cat1.dataset.title = 'Celestia';//to give data title of celestia

// const cat2 = document.createElement('li');
// cat2.textContent = 'Luna';

// const cat3 = document.createElement('li');
// cat3.textContent = 'Tupac';

// list.append(cat1, cat2, cat3);
// const js = document.querySelector('script');
// document.body.insertBefore(title, js);//puts title before script tag (need to set the tag as a variable first,then put in)
// document.body.insertBefore(list,title);//puts list before title

// const button = document.createElement('button');
// button.textContent = 'Submit';
// document.body.appendChild(button);
// button.id = 'my-button';//makes button with id of my-button
// button.className = 'btn btn-success';
// button.classList.replace('btn-success', 'btn-info');//changes it for green(success) to blue(info)

// title.classList.add('text-center');

// // button.classList.remove('btn-info');//removes button

// button.addEventListener('click', () => {
//   title.classList.toggle('hidden');
// });

// // button.setAttribute('disabled', true);//disables button (to enable change to removeAttribute and removve true)

// const title = document.createElement('h1');
// title.textContent = 'Hello World!';
// title.className = 'text-center';
// document.body.appendChild(title);

// const para = document.createElement('p');
// para.textContent = 'lorem finniky, so create that statically (in HTML) and make the rest dynamically (with JS). Use Bootstrap helper classes to shorten your workload.'
// para.className = 'col-md-6 offset-md-3';
// document.body.append(para);

// document.body.innerHTML = `
// <nav>
//   <a href= "#">Home</a>
//   <a class= "float-right" href= "#">Contact</a>
//   <a class= "float-right" href= "#">About</a>
// </nav>
// `;

// const nav = document.createElement('ul');
// document.body.append(nav);

// const item1 = document.createElement('li');
// item1.textContent = 'Home';
// item1.className = ''
// const item2 = document.createElement('li');
// item2.textContent = 'Contact';
// const item3 = document.createElement('li');
// item3.textContent = 'About';
// nav.append(item1, item2, item3);

//fizzbuzz
//loop between 2 numbers (typically between 0 and 100)
//if number is a multiple of 2 log fizz
//if number is a multiple of 3 log buzz
//if number is a multiple of 5 log fizzbuzz

// function fizzBuzz(min, max) {
//   for(let i = min; i <= max; i++) {
//     const p = document.createElement('p');
//     if (i % 5 === 0 && i % 3 === 0) {
//       p.textContent = `${i} FizzBuzz`;
     
//     } else if(i % 3 === 0) {
//       p.textContent = `${i} Fizz`;
//     } else if (i % 5 === 0 ) {
//       p.textContent = `${i} Buzz`; 
//     } 
//   }
//   document.body.appendChild(p);
// };

// fizzBuzz(10, 20);

// function fizzBuzz(min, max) {
//   for(let i = min; i <= max; i++) {
//     const p = document.createElement('p');
//     if (i % 5 === 0 && i % 3 === 0) {
//       createItem(i, 'FizzBuzz');
//     } else if(i % 3 === 0) {
//       createItem(i, 'Fizz');
//     } else if (i % 5 === 0 ) {
//       createItem(i, 'Buzz'); 
//     } 
//   }
// };

// function createItem(i, str) {
//   const p = document.createElement('p');
//   str ? p.textContent = `${i} ${str}` : p.textContent = i;
//   document.body.appendChild(p);
// }
// fizzBuzz(1, 500);






console.log(document.forms.loginForm.btn);
//hyphen breaks dot notation

const btn = document.forms.loginForm.btn;

btn.addEventListener('click', e => {
  e.preventDefault();
  // debugger;
  let firstName = document.forms.loginForm.firstName;

  console.log(firstName.value);
  console.log('Clicked');

  firstName.value = '';
});

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
