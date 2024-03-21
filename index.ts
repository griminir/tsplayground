// annotation
//strings
let myName: string = 'viktor';

//number
let myAge: number = 29;

//boolean
let isMale: boolean = true;
//you can also use *any* but it kind of defeats the purpose of typescript in this aspect

//automatic
let tech = 'typescript';
console.log(typeof tech);
let random = 12;
console.log(typeof random);

//param annotation
//regular function
//the third number refers to the return value in a normal function
function multi(num1: number, num2: number): number {
  return num1 * num2;
}
const result = multi(4, 8);
console.log(result);

//arrow functions
// the second number refers to the return value in the arrow function
const addOne = (x: number): number => {
  return x + 1;
};
const res = addOne(5);
console.log(res);

//void when you return no value
function myMsg(msg: string): void {
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
const nums: number[] = [1, 2, 3, 5, 6, 7];
//nested arrays the more nesting the more brackets after the annotation
const numList: number[][] = [
  [1, 2],
  [1, 4],
];

//older or bad syntax not used my these days
const items: Array<string> = ['hello', 'jimmy'];

//objects you are forced to provide all the attributes or you will get an error
const person: { firstName: string; lastName: string; age: number } = {
  firstName: 'viktor',
  lastName: 'something',
  age: 29,
};

//----------------- function params
function printUser(): { firstName: string; lastName: string; age: number } {
  return {
    firstName: 'viktor',
    lastName: 'something',
    age: 29,
  };
}
const res2 = printUser();
console.log(res2);

//type aliases convention is to make types Uppercase
//the question mark makes it so that its optional of you wanna add it
//readonly makes it so the property can not be altered
type User = {
  name: string;
  readonly age: number;
  ismale?: boolean;
};
//now all the types of User are added to this function
const printUserinfo = (user: User) => {
  return `name: (${user.name} age: (${user.age}) is it a guy: (${user.ismale}))`;
};

const res3 = printUserinfo({ name: 'heino', age: 27, ismale: true });
console.log(res3);

//intersection types
type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  email: string;
  password: string;
};

//& adds them together
type fullInfo = UserInfo & accountDetails;

const larry: fullInfo = {
  first: 'larry',
  last: 'the man',
  age: 45,
  email: 'emailat email.com',
  password: 'timmy84',
};
console.log(larry);
