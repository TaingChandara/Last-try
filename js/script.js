// Truthy / Faslsy Value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// const money = 100;
// if (money) {
//     console.log("DOnt't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height = 1;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDERFINED ');
// }

// const myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("I love You !!");
//   }, 5000);
// });

// myPromise.then(function (value) {
//   document.getElementById("demo").innerHTML = value;
// });

// Data Types

// let counter = 120;
// console.log(typeof counter); // "number"

// counter = false;
// console.log(typeof counter); // "boolean"

// counter = "Hi";
// console.log(typeof counter); // "string"

// Array
// let bikes = ["Honda", "Susuke", "Yamaha"];
// console.log(bikes[0]);
// console.log(bikes[2]);
// console.log(bikes[1]);

// Object Method

// const person = {
//   firstname: "Taing",
//   Lastname: "Chandara",
//   Age: "22",

// };
// console.log(person.firstname +  person.Lastname + " is " + person.Age + " years old" + "Freindly.");

// Accessing Object Methods

// const person = {
//   firstname: "Jonhnny",
//   lastname: "Dang",
//   nationality: "Chinese",

//   fullname: function () {
//     return this.firstname + this.lastname + "is" + this.nationality;
//   },
// };
// console.log(person.fullname());

// String

// const name = "Jonh Wich";
// console.log(name);

// String length

// let text = "Taing Chandara";
// console.log(text.length);

// String upper and lower
// let text = "welcome to la";
// console.log(text.toUpperCase());

// let text = "SAFE FLIGHT BB";
// console.log(text.toLowerCase());

// let text = "Please locate where 'locate' occurs!";
// console.log(text.lastIndexOf());

// let x = "10" * "Apple";
// console.log(isNaN(x));

// typeof

// let x = "10";
// let y = new Number(123);
// console.log(typeof x + typeof y);

// Operator == and ====
// let x = 100;
// let y = new Number(100);
// console.log(x == y);

// let x = 100;
// let y = new Number(100);
// console.log(x === y);

// EPSILON
// let x = Number.EPSILON;
// console.log(x);

// MAX_VALUE
// let x = Number.MAX_VALUE;
// console.log(x);

// Sort and Revers

// const fruit = ["apple", "banana", "ornage", "kiwi"];
// console.log(fruit.sort());

// const fruit = ["apple", "banana", "ornage", "kiwi"];
// console.log(fruit.reverse());

// Array Include

// const letter = ["A", "B", "C", "D"];
// console.log(letter.includes("C"));

// Array Const Push

// const cars = ["aa", "bb", "cc"];
// cars[0] = "dd";
// cars.push("dd");
// console.log(cars);

// Js Date

// const d = new Date();
// console.log(d);

// Js getmonth()

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const d = new Date("2021-012-25");
// let month = months[d.getMonth()];
// console.log(month);

// Js gethour()

// const d = new Date();
// console.log(d.getHours());

// const d = new Date();
// console.log(d.getDay());

// Js if else

// let age = 11;
// if (age > 18) {
//   console.log("You can sign up.");
// } else {
//   console.log("You must be at least 18 to sign up.");
// }

// let speed = 80;
// if (speed >= 80) {
//   console.log("You drive too fast");
// } else {
//   console.log("You drive normal");
// }

// Js if else if

// const time = new Date().getHours();
// let greeting;
// if (time < 12) {
//   greeting = "Good Morning";
// } else if (time > 12) {
//   greeting = "Good Afternoon";
// } else {
//   greeting = "Good night";
// }
// console.log(greeting);

// let month = 12;
// let monthName;

// if (month == 1) {
//   monthName = "Jan";
// } else if (month == 2) {
//   monthName = "Feb";
// } else if (month == 3) {
//   monthName = "Mar";
// } else if (month == 4) {
//   monthName = "Apr";
// } else if (month == 5) {
//   monthName = "May";
// } else if (month == 6) {
//   monthName = "Jun";
// } else if (month == 7) {
//   monthName = "Jul";
// } else if (month == 8) {
//   monthName = "Aug";
// } else if (month == 9) {
//   monthName = "Sep";
// } else if (month == 10) {
//   monthName = "Oct";
// } else if (month == 11) {
//   monthName = "Nov";
// } else if (month == 12) {
//   monthName = "Dec";
// } else {
//   monthName = "Invalid month";
// }
// console.log(monthName);

// let best = 3;
// let name;

// if (best == 1) {
//   name = "Layla";
// } else if (best == 2) {
//   name = "Maya";
// } else if (best == 3) {
//   name = "Kara";
// } else {
//   name = "No name";
// }
// console.log(name);

// let speed = 100;
// let highway;

// if (speed == 80) {
//   highway = "6A";
// } else if (speed == 90) {
//   highway = "5A";
// } else if (speed == 70) {
//   highway = "7A";
// } else if (speed == 100) {
//   highway = "4A";
// } else {
//   highway = "No highway";
// }
// console.log(highway);

// Swtich Case

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);

// let month = 3;
// let monthname;

// switch (month) {
//   case 1:
//     monthname = "Jan";
//     break;
//   case 2:
//     monthname = "Feb";
//     break;
//   case 3:
//     monthname = "Mar";
//     break;
//   case 4:
//     monthname = "Apr";
//     break;
//   case 5:
//     monthname = "May";
//     break;
//   case 6:
//     monthname = "Jun";
//     break;
//   case 7:
//     monthname = "Jul";
//     break;
//   case 8:
//     monthname = "Aug";
//     break;

//   case 9:
//     monthname = "Sep";
//     break;
//   case 10:
//     monthname = "Oct";
//     break;
//   case 11:
//     monthname = "Nov";
//     break;
//   case 12:
//     monthname = "Dec";
//     break;
// }
// console.log(monthname);

// For Loop

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i <= 5; i++, sum += i);
// console.log(sum);

// For Loop IN

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "";
// }
// console.log(txt);

// For do while loop

// let count = 0;
// do {
//   console.log(count);
//   count--;
// } while (count < 20);

// Loop break & continue

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   text += " " + i + "";
// }
// console.log(text);

//  continue

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text += " " + i;
// }
// console.log(text);

// Error msg
// try {
//   carName = "Saab";
//   let carName = "Volvo";
// } catch (err) {
//   console.log(err);
// }

// Arrow Function

// let Welcome = "";
// Welcome = () => {
//   return "Welcome";
// };
// console.log(Welcome());

// let hello = "";
// hello = () => "hello guy";
// console.log(hello());

// Js Error
// try {
//   addalert("error");
// } catch (err) {
//   console.log(err);
// }

// Js new Map

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// fruits.set("apples", 200);
// console.log(fruits.get("apples"));

// const cars = new Map([["ford,111"], ["toyota,111"], ["volvo,111"]]);
// cars.set("ford", 111);
// console.log(cars.get("ford", 111));

// Js set Map

// const bikes = new Map();

// bikes.set("Student", 500),
//   bikes.set("Professor", 300),
//   bikes.set("Other", 400),
//   bikes.set("Student", 500);
// console.log(bikes.get("Student", 500));

// Js Get Map

// const number = new Map([
//   ["number", 1],
//   ["number", 2],
//   ["number", 3],
// ]);
// console.log(number.size);

// Js Delete

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// fruits.delete("apples");

// console.log(fruits.size);

// JavaScript Map Objects

// // const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// console.log(typeof fruits);

// Js Object
// const car = {
//   price: 85000,
//   color: "black",
//   model: "Lexus",
//   year: 2021,
// };
// console.log(
//   car.model + " " + car.color + "color" + " " + car.price + "$" + " " + car.year
// );

// Js Object Loop

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }
// console.log(txt);

// const car = {
//   name: "ford",
//   color: "black",
//   model: "pick-up",
// };

// let txt = "";
// for (let x in car) {
//   txt += car[x] + "";
// }
// console.log(txt);

// Js Object  Display

// JSON.stringify()

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// console.log(JSON.stringify(person));

// Stringify Dates

// const person = {
//   name: "koko",
//   age: 12,
//   today: new Date(),
// };
// console.log(JSON.stringify(person));

// Stringify Arrays

// const arr = ["John", "Peter", "Sally", "Jane"];
// console.log(JSON.stringify(arr));

// JavaScript Function or Getter?

// const person = {
//   firstname: "Jonh",
//   lastname: "wich",
//   get fullname() {
//     return this.firstname + " " + this.lastname;
//   },
// };
// console.log(person.fullname);

// JavaScript Object Constructors

// Constructor function for Person objects

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// console.log("My father is " + myFather.eyeColor + ".");

// function person(first, last, age, eye) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myMom = new person("Mary", "Ma", "47", "brown");
// const myDad = new person("Jack", "Wang", "53", "black");

// console.log(
//   "My mom is" +
//     myMom.age +
//     myMom.firstname +
//     myMom.lastname +
//     "." +
//     "My dad is" +
//     myDad.age +
//     myDad.firstname +
//     myDad.lastname +
//     "."
// );

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create 2 Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Add a name method to first object
// myFather.name = function () {
//   return this.firstName + " " + this.lastName;
// };
// console.log("My father is " + myFather.name());

// Using the prototype Property

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality);



// JavaScript Functions

// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   console.log(myObject.fullName());