// annotation
//strings
let myName: string = 'Viktor';

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

//unions, one or several possible types
//can be all types of annotations
let union: string | number;
union = 1;
union = 'hello';

//look back at arrays to understand the second annotation
//can be all types of annotations
function unionF(param: string | string[]) {
  //function body
}

//this also works with intersection types
let kåre: UserInfo | accountDetails = {
  email: 'string@gmail.com',
  password: 'hello',
};

//also works with arrays
const stuff: (number | string)[] = [1, 1, 1, 3, 'hello'];
console.log(stuff);

//literal types same syntax for number and boolean
let color: 'red' | 'green' | 'blue';
color = 'red';

//tuples are an array with a fixed number of elements where each element can hava a different type
let myTuple: [string, number, number] = ['hello', 1, 32];
console.log(myTuple);

//destructuring
let [first, number2, third] = myTuple;
console.log(first);
console.log(number2);
console.log(third);

//enums
enum WeatherConditions {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
}

const currentWeather = WeatherConditions.Rainy;
console.log(`the current weather is ${currentWeather}`);

//interface how to make a object have a stricter structure
//interfaces can also be used to describe the structure of functions and classes as well
//p.s classes belong to object orianted programming
//readonly and ? work the same as making a type
// you can add to an interface by typing it again and between the {owner: string} and it will be added to the interface rules
interface Computor {
  readonly name: string;
  ram: number;
  hdd?: number;
}

const computorExample: Computor = {
  name: 'i7',
  ram: 18,
  hdd: 512,
};

//function interface
interface MathOperations {
  (x: number, y: number): number;
}

const add: MathOperations = (a, b) => a + b;
const subtract: MathOperations = (a, b) => a - b;
console.log(add(2, 8));
console.log(subtract(500, 10));

//generics type or t is a Type perimiter area often you just use a T
//you basically say whatever i put in between <> will be the type i want, so later when you are using the function you can but the annotation you need and it will make all of them named the same the same annotation
function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

//in this example since we say number we need to use numbers and we will return numbers
const res5 = uniqueDataTypesFunc<number>(10, 20);
console.log(res5);

//type narrowing
