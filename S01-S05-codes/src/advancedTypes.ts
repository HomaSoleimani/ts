//? Intersection Types => OK
//? Type Guards
//? Discriminated Unions
//? Type Casting
//? Function Overloads
//* Type Guards:

type StringOrNumber = string | number;
// string, number, boolean,...
//1. typeof => primitve.
function processInput(x: StringOrNumber) {
  // number , string => what to do.
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(x.toFixed(2));
  }
}

//2. in operator => object

// interface Circle {
//   radius: number;
// }

// interface Square {
//   sideLength: number;
// }

// interface Rectangle {
//   width: number;
//   height: number;
// }

// type Shape = Circle | Square | Rectangle;

// function calcArea(shape: Shape) {
//   if ("radius" in shape) {
//     return Math.PI * shape.radius ** 2;
//   } else if ("sideLength" in shape) {
//     return shape.sideLength ** 2;
//   } else if ("width" in shape && "height" in shape) {
//     return shape.width * shape.height;
//   }
// }

//3. instanceof => "class" NOT interface

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

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.purr();
}

//4. user-defined method => check the complex types.
// => is operator => animal is Cat (check variable is specific type)

interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

type Animal = Fish | Bird;

function isFish(animal: Animal): animal is Fish {
  return (animal as Fish).swim !== undefined; // type assertion
}

function checkAnimal(animal: Animal) {
  if (isFish(animal)) {
    return `animal is Fish`;
  }
  return `animal is Bird`;
}

// 5. disciminated unions => combine union with literal types to create new types.
// cannot be used in complex types.
interface Circle {
  radius: number;
  type: "circle";
}

interface Square {
  sideLength: number;
  type: "square";
}

interface Rectangle {
  width: number;
  height: number;
  type: "rectangle";
}

type Shape = Circle | Square | Rectangle;

function calcArea(shape: Shape) {
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
//
//
//? Type Casting: => convert type
// implicit => made by typesctipt
// explicit => made by ourself

const pTag = <HTMLParagraphElement>document.querySelector(".paragraph")!;
pTag.textContent;

// const input = <HTMLInputElement>document.querySelector(".user-input")!;
// const input = document.querySelector(".user-input")! as HTMLInputElement;
const input = document.querySelector(".user-input");
if (input) {
  (input as HTMLInputElement).value;
}

// 1. <>
// 2. as

//? index properties.

// object => the key and value type is defined.

// { [key : keyType] : valueType}

interface Config {
  timeout: number;
  [key: string]: string | number | boolean;
}

const config: Config = {
  timeout: 1000,
  timeoutMsg: "The request is timed out.",
  successMsg: "success request.",
  isSuccess: true,
};

type Keys = "A" | "B" | "C";

type Options = {
  [key in Keys]: string;
};

const options: Options = {
  A: "A Value",
  B: "ss",
  C: "Ccc",
};

//? function overloading => define some funs with the same name,
// but different type and returns.

type CombineType = string | number;

function addFun(a: number, b: number): number;
function addFun(a: string, b: string): string;
function addFun(a: string, b: number): string;
function addFun(a: number, b: string): string;

function addFun(a: CombineType, b: CombineType) {
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

//? optional chaining: => ? : check for null or undefined.
type AlbumAPIResponse = {
  title: string;
  artist?: {
    name: string;
    bio?: string;
    previousAlbums?: string[];
  };
};

const album: AlbumAPIResponse = {
  title: "Albume  #1",
};

// const albumeBio = album.artist && album.artist.bio;
const albumeBio = album?.artist?.bio;

const callUpdateMetadata = (metadata: any) => Promise.resolve(metadata); // Fake API call

const updateAlbumMetadata = async (metadata: any, callback?: () => void) => {
  await callUpdateMetadata(metadata);

  callback?.();
};

//? nullish coalescing => ??

const userInput = "";

// const proccesedData = userInput || "Defalult Value";
// || => 0, "", null, undeifined (falsy)

const proccesedData = userInput ?? "Defalult Value";
// ?? => null or undeifned

const volume = 0;

const storedVolume = volume ?? 0.5;
