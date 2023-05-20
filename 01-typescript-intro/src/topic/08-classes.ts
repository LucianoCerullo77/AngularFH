export class Person {
  //   public name: string;
  //   private address: string;

  // if the property has the ? means that could be string || undefined
  // if the declaration is private it means it can't be visible on the site and we need to use it in our code
  // if the declaration is public, means it can be visible

  constructor(public name: string, private address: string) {
    // is more common to declare the type on the constructor
    // dependency injection on Angular !!!!
    this.name = name;
    this.address = address;
  }
}

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName,'New York');
  }
}

const ironMan = new Hero("IronMan", 45, "Tony Stark");

// ironman.address shouldn't be visible on the console, but typescript compiles to js, so it can be visible, but in ts
// is gonna show an error
console.log(ironMan);
