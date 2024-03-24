"use strict";
// annotation
//strings
let myName = 'Viktor';
//number
let myAge = 29;
//boolean
let isMale = true;
//you can also use *any* but it kind of defeats the purpose of typescript in this aspect
//automatic
let tech = 'typescript';
console.log(typeof tech);
let random = 12;
console.log(typeof random);
//param annotation
//regular function
//the third number refers to the return value in a normal function
function multi(num1, num2) {
    return num1 * num2;
}
const result = multi(4, 8);
console.log(result);
//arrow functions
// the second number refers to the return value in the arrow function
const addOne = (x) => {
    return x + 1;
};
const res = addOne(5);
console.log(res);
//void when you return no value
function myMsg(msg) {
    console.log(`this is my ${msg}`);
}
//keyword never can be used for error inf loops
// function throwError(msg: string): never {
//   throw new Error('msg');
// }
// function infLoop(): never {
//   while (true) {}
// }
// let x: never;
// function neverReturns(): never {
//   while (true) {}
// }
// x = neverReturns();
//arrays
const nums = [1, 2, 3, 5, 6, 7];
//nested arrays the more nesting the more brackets after the annotation
const numList = [
    [1, 2],
    [1, 4],
];
//older or bad syntax not used my these days
const items = ['hello', 'jimmy'];
//objects you are forced to provide all the attributes or you will get an error
const person = {
    firstName: 'viktor',
    lastName: 'something',
    age: 29,
};
//----------------- function params
function printUser() {
    return {
        firstName: 'viktor',
        lastName: 'something',
        age: 29,
    };
}
const res2 = printUser();
console.log(res2);
//now all the types of User are added to this function
const printUserinfo = (user) => {
    return `name: (${user.name} age: (${user.age}) is it a guy: (${user.ismale}))`;
};
const res3 = printUserinfo({ name: 'heino', age: 27, ismale: true });
console.log(res3);
const larry = {
    first: 'larry',
    last: 'the man',
    age: 45,
    email: 'emailat email.com',
    password: 'timmy84',
};
console.log(larry);
//unions, one or several possible types
//can be all types of annotations
let union;
union = 1;
union = 'hello';
//look back at arrays to understand the second annotation
//can be all types of annotations
function unionF(param) {
    //function body
}
//this also works with intersection types
let kåre = {
    email: 'string@gmail.com',
    password: 'hello',
};
//also works with arrays
const stuff = [1, 1, 1, 3, 'hello'];
console.log(stuff);
//literal types same syntax for number and boolean
let color;
color = 'red';
//tuples are an array with a fixed number of elements where each element can hava a different type
let myTuple = ['hello', 1, 32];
console.log(myTuple);
//destructuring
let [first, number2, third] = myTuple;
console.log(first);
console.log(number2);
console.log(third);
//enums
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
})(WeatherConditions || (WeatherConditions = {}));
const currentWeather = WeatherConditions.Rainy;
console.log(`the current weather is ${currentWeather}`);
const computorExample = {
    name: 'i7',
    ram: 18,
    hdd: 512,
};
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(2, 8));
console.log(subtract(500, 10));
//generics type or t is a Type perimiter area often you just use a T
//you basically say whatever i put in between <> will be the type i want, so later when you are using the function you can but the annotation you need and it will make all of them named the same the same annotation
function uniqueDataTypesFunc(item, defaultValue) {
    return [item, defaultValue];
}
//in this example since we say number we need to use numbers and we will return numbers
const res5 = uniqueDataTypesFunc(10, 20);
console.log(res5);
//this is called a type guard
function exampleFunction1(value) {
    if (typeof value === 'string') {
        console.log(value.toLocaleUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
exampleFunction1('hello');
exampleFunction1(4);
const person1 = {
    gender: 'male',
    nationality: 'uk',
    name: 'henry',
    age: 32,
};
//how to complie it to js open terminal
//tsc -init
//tsc (the file you wanna compile)
//we need to do something in the config file to help the code a bit
//find target in the tsconfig.JSON file and change it to ES6
//now we only need to write tsc to compile it
//the reason we do this is to get the most up to date js code, the standard set for it uses stuff like var instead of let and const and it might ruin some of your scoops
