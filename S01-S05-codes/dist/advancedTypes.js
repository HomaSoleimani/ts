"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function processInput(x) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x.toFixed(2));
    }
}
class Dog {
    bark() {
        return "Woof!";
    }
}
class Cat {
    purr() {
        return "Meow!";
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    return animal.purr();
}
function isFish(animal) {
    return animal.swim !== undefined;
}
function checkAnimal(animal) {
    if (isFish(animal)) {
        return `animal is Fish`;
    }
    return `animal is Bird`;
}
function calcArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "square":
            return shape.sideLength ** 2;
    }
}
calcArea({ type: "square", sideLength: 20 });
const pTag = document.querySelector(".paragraph");
pTag.textContent;
const input = document.querySelector(".user-input");
if (input) {
    input.value;
}
const config = {
    timeout: 1000,
    timeoutMsg: "The request is timed out.",
    successMsg: "success request.",
    isSuccess: true,
};
const options = {
    A: "A Value",
    B: "ss",
    C: "Ccc",
};
function addFun(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const resultAdd = addFun(3, 4);
resultAdd.toFixed(2);
addFun("Saheb ", "Developer");
const result3 = addFun(1, "Saheb");
result3.toUpperCase();
const album = {
    title: "Albume  #1",
};
const albumeBio = (_a = album === null || album === void 0 ? void 0 : album.artist) === null || _a === void 0 ? void 0 : _a.bio;
const callUpdateMetadata = (metadata) => Promise.resolve(metadata);
const updateAlbumMetadata = (metadata, callback) => __awaiter(void 0, void 0, void 0, function* () {
    yield callUpdateMetadata(metadata);
    callback === null || callback === void 0 ? void 0 : callback();
});
const userInput = "";
const proccesedData = userInput !== null && userInput !== void 0 ? userInput : "Defalult Value";
const volume = 0;
const storedVolume = volume !== null && volume !== void 0 ? volume : 0.5;
