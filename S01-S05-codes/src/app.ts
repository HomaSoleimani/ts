// JS => number, string, null, undefined, object
// TS => any, never, unkown, enum, Tuple.

// let price = 100_000;
// let userName = "Saheb";
// let isActive = true;

// price = 200;

// const email = "test@gmail.com";

// let value;

// ? Array Type: []

// const numbers: number[] = [1, 2, 3];
// const products: string[] = ["book", "phone"];

// numbers.forEach((n) => n.toFixed(2));

// let courses: string[];

// courses = ["Reac.js", "Vue.js"];
//? Tuple
// const failingResponse: [string, number] = ["Not Found", 404];
// // fixed-length array (2)
// // multiple type : number , string
// // order (index) is important

// failingResponse[0].split(" ");
// failingResponse[1].toFixed(0);
//? Enum
// named set of constant.

// direction => up, down, left, right.
// compass => north, south, east, west
// size => M, L, XL, XXL
// role => admin, user, teacher

// enum Direction {
//   UP = "UP",
//   DOWN = "DOWN",
//   LEFT = "LEFT",
//   RIGHT = "RIGHT",
// }

// // console.log(Direction.UP);
// const direction: Direction = Direction.UP;

// if (direction === Direction.UP) {
//   console.log("this is up direction");
// }

// enum StatusCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized,
//   PaymentRequired,
//   Forbidden,
//   NotFound,
// }

// console.log(StatusCodes.OK);
// // console.log(StatusCodes[200]);

// //? Object:
type User = {
  readonly id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "Saheb",
  age: 28,
};

//? Union

// string, number => union

// const value: number | string = "1";

// type IdType = string | number;

// function printId(id: IdType) {
//   if (typeof id === "string") {
//     console.log("Your id is ", id.toUpperCase());
//   } else {
//     console.log("Your id is ", id);
//   }
// }

//? Literal
// const shopStatus: "OPEN" | "CLOSED" = "CLOSED";
// const fileExtention: "rar" | "zip" = "rar";
// const direction: "UP" | "DOWN" | "LEFT" | "RIGHT" = "RIGHT";
// const oddNumbersUnderTen: 1 | 3 | 5 | 7 | 9 = 5;

// type Aligment = "left" | "right" | "center";

// function printText(text: string, alignment: Aligment) {
//   console.log(text, alignment);
// }

// printText("dummy text", "left");

//? function

function printId(id: number): void {
  console.log("Your ID is " + id);
}

function add(a: number, b: number): number {
  return a + b;
}

// let result: (id: number) => void;
let result: (a: number, b: number) => number;

// result = printId;
result = add;
// result = 4;

//? unkown
// is almost the same as any type.

let storedValue: unknown;
let userName: string;

storedValue = 10;
storedValue = "Kooft";

// userName = storedValue;

// narrowing the type checking
if (typeof storedValue === "string") {
  userName = storedValue;
}

function jsonParser(str: string): unknown {
  return JSON.parse(str);
}

type UserName = { name: string };
const parsedValue = jsonParser(`{ "name": "Saheb" }`) as UserName;
parsedValue.name;

//? never !== void

function throwError(msg: string): never {
  throw new Error(msg);
}

function sayHi(name: string): void {
  // console.log("Hi" + name);
}

const sayHiReturn: void = sayHi("Saheb"); // undefined
// console.log(sayHiReturn);

// never => cannot have any value!
// void => null or undefined

//? Callback

function delayMessage(
  msg: string,
  delay: number,
  callback: (message: string) => void
) {
  setTimeout(() => {
    console.log(msg);
    callback(msg);
  }, delay);
}

delayMessage("Hello, World!", 2000, (message: string) => {
  console.log("The Log after callback delay" + message);
  // return message;
});

// const returnMsg = delayMessage("Hello, World!", 2000, (message: string) => {
//   console.log("The Log after callback delay" + message);
//   return message;
// });
// console.log(returnMsg);

//? Type Annotations and Type Inferences

let age = 30; // for numbers
let fruit = "kiwi"; // for strings
let flatEarth = false; // for booleans
const price = [10, 20, 300]; // only array of numbers
const fruits = ["apples", "banana", "kiwi"]; // only array of strings

const person = {
  name: "Mike",
  age: 30,
};
// Note that name and age types are separated by semicolon
// const person: { name: string; age: number } = {
//   name: "Mike",
//   age: 30,
// };

// simple arrow function
const double = (num: number) => num * 2;

// type signature - : (num: number) => number => () =>
// const double: (num: number) => number = (num: number) => num * 2;

// for a function without return value
const printFn = (value: string) => console.log(value);

// we specify special type: void
// const printFn: (value: string) => void = (value) => console.log(value);

// where to use type annotation
// 1. prevent any type
let number1: number;
number1 = 4;

// 2. when function return any

const parsedObj: { name: string } = JSON.parse(`{"name":"Saheb"}`);
// parsedObj.name

