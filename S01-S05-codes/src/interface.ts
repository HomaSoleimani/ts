//? what is interface

// primitive: number, string, null, boolean, undefined
type Address = string;
type NullOrUndefined = null | undefined;

type Client = {
  name: string;
  age: number;
};

// interface => create Object type => object, function, class
// summary => class, object => interface  , else => type

interface Client2 {
  name: string;
  age: number;
}

//! interface cannot be used for primitives.

// union type: Union type can only be defined using type
type Trasnport = "Bike" | "Bus" | "Car";

// combine two interface to create new union type!
interface CartButtery {
  power: number;
}
interface Engine {
  type: string;
}

type HybridCar = Engine | CartButtery;

// function => prefered way is type.

type AddFn = (a: number, b: number) => number;

interface Add {
  (a: number, b: number): number;
}

interface Teacher {
  name: string;
  age: number;
  speak(): void;
  caclSalary(a: number): number;
}

// extend vs intersection

type VIPClient = Client & { benefits: string[] };

// extend:
interface VIPClient2 extends Client {
  benefits: string[];
}

