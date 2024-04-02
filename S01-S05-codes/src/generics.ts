//? Generics => function, class, interface, ..., built-in generics, 3rd-part lib.
// => re-usable componnet, code, fucntion, class, interface.

function getArray<T extends string | number>(items: T[]): T[] {
  // T is a plceholder : جای خالی
  return new Array().concat(items); // []
}

const arr2 = getArray<number>([1, 2, 3]); // T => number
arr2.push(4);
getArray<string>(["A", "B", "C"]); // T => string

// function getArray(items: (string | number)[]): (string | number)[] {
//   return new Array().concat(items);
// }

// const arr = getArray(["A", 1]);

// arr.push("B");
// arr.push(2);
// getArray<number>([1, 2, 3]); // T => number
// getArray<string>(["A", "B", "C"]); // T => string
// getArray([{}, 1]); => Error

//? built-in generics:

const users: Array<string> = [];
// const users2: string[] = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("the promise is resolved.");
  }, 1000);
});

promise.then((data) => {
  console.log(data.toUpperCase());
});

//? Constraints

function mergeObjects<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObjects({ name: "Saheb" }, { age: 28 });

//? keyof constraint

function getPropety<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const client = { name: "Saheb", age: 28 };
// client["age"]

getPropety(client, "name"); // "Saheb"
getPropety(client, "age"); // 28
//? Generic class => will be discussed in the next seasons.

//? Generic utility types. => predefined generics.
// can be used to create or manipulte other new types.

type Person = {
  name: string;
  email: string;
  age: number;
};

// 1. Partial => create partial version
type PartialPerson = Partial<Person>;

// interface PartialPerson { // optional
//   name?: string | undefined;
//   email?: string | undefined;
//   age?: number | undefined;
// }

// 2. Required => create required version

type Person2 = {
  name?: string | undefined;
  email?: string | undefined;
  age?: number | undefined;
};

type RequiredPerson = Required<Person2>;

//3. Omit => remove some properties.
type PersonWithoutEmail = Omit<Person, "email">;

//4. pick => pick some properties
type PersonWithEmailAndName = Pick<Person, "email" | "name">;

// multiple utility ?? => Yes.
type PartialPick = Partial<Pick<Person, "name" | "email">>;

// 5. Record => create new object => to map type on another type!
// keys: passed as a first argument.
// values : Basic type

// type UnionPerson = "person1" | "person2";
type Persons = Record<"person1" | "person2", Person>; // Record<keys, T>

const persons3: Persons = {
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

// 6. Readonly
type ReadOnlyPerson = Readonly<Person>;

const person4: ReadOnlyPerson = {
  name: "Saheb",
  age: 28,
  email: "user@test.com",
};

// person4.name = "addd";

// combine utilites:
// challenge: name => name is optional

type PersonWithOnlyName = Omit<
  Partial<Pick<Person, "name" | "email">>,
  "email"
>;

//? Generics VS Union Types:
