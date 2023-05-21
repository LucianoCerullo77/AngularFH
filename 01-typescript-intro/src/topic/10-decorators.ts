function classDecorator<T extends { new (...args: any[]): {} }>(
  // idk what this does! but shows no errors
  // usually we don't create decorators, we use those that angular provides, so no worries
  // So, what is a decorator? They are functions that can modify the comportaiment of classes, properties and methods
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "abc123";

  print() {
    console.log("Hello World");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
