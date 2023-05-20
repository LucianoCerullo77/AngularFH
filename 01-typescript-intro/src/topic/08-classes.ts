export class Person {
  public name: string;
  private address: string;
  // if the property has the ? means that could be string || undefined
  // if the declaration is private it means it can't be visible on the site and we need to use it in our code
  // if the declaration is public, means it can be visible

  constructor() {
    this.name = "Pedro";
    this.address = "New York";
  }
}

const ironMan = new Person();

// ironman.address shouldn't be visible on the console, but typescript compiles to js, so it can be visible, but in ts
// is gonna show an error
console.log(ironMan.name);
