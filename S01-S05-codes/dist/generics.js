"use strict";
function getArray(items) {
    return new Array().concat(items);
}
getArray([1, 2, 3]);
getArray(["A", "B", "C"]);
const users = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the promise is resolved.");
    }, 1000);
});
promise.then((data) => {
    console.log(data.toUpperCase());
});
function mergeObjects(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = mergeObjects({ name: "Saheb" }, { age: 28 });
function getPropety(obj, key) {
    return obj[key];
}
const client = { name: "Saheb", age: 28 };
getPropety(client, "name");
getPropety(client, "age");
const persons3 = {
    person1: {
        name: "Saheb",
        age: 28,
        email: "user@test.com",
    },
    person2: {
        name: "Ali",
        age: 70,
        email: "user2@test.com",
    },
};
const person4 = {
    name: "Saheb",
    age: 28,
    email: "user@test.com",
};
