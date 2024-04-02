"use strict";
const user = {
    id: 1,
    name: "Saheb",
    age: 28,
};
function printId(id) {
    console.log("Your ID is " + id);
}
function add(a, b) {
    return a + b;
}
let result;
result = add;
let storedValue;
let userName;
storedValue = 10;
storedValue = "Kooft";
if (typeof storedValue === "string") {
    userName = storedValue;
}
function jsonParser(str) {
    return JSON.parse(str);
}
const parsedValue = jsonParser(`{ "name": "Saheb" }`);
parsedValue.name;
function throwError(msg) {
    throw new Error(msg);
}
function sayHi(name) {
}
const sayHiReturn = sayHi("Saheb");
function delayMessage(msg, delay, callback) {
    setTimeout(() => {
        console.log(msg);
        callback(msg);
    }, delay);
}
delayMessage("Hello, World!", 2000, (message) => {
    console.log("The Log after callback delay" + message);
});
let age = 30;
let fruit = "kiwi";
let flatEarth = false;
const price = [10, 20, 300];
const fruits = ["apples", "banana", "kiwi"];
const person = {
    name: "Mike",
    age: 30,
};
const double = (num) => num * 2;
const printFn = (value) => console.log(value);
let number1;
number1 = 4;
const parsedObj = JSON.parse(`{"name":"Saheb"}`);
