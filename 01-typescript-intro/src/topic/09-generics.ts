export function whatsMyType<T>(argument: T): T {
  // A generic type is <T>
  // never use ANY, this could cause errors like concat numbers with strings
  // also we can use .ExampleOfParams() even is this param doesn't exist and it wont throw any error
  return argument;
}

let amIString = whatsMyType<string>("Hello world");

let amINumber = whatsMyType<number>(100);

let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
