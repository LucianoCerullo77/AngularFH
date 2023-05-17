function addNumber(a: number, b: number) {
  // this is gonna show void if theres no return in the function
  // ALWAYS HAVE STRICT MODE ON TS, ANY is not okay!
  return a + b;
}
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  // is recomended to order the arguments by obligatory, optionals, and optional with default value
  return firstNumber * base;
}

// resolve is number type as default value due to addNumber
const resolve: number = addNumber(1, 2);
const resolve2: string = addNumbersArrow(1, 2);
const multiplyResolve: number = multiply(5);

console.log({ resolve, resolve2, multiplyResolve });

////////////////////////////////////////////////////////////////

// Functions with objects as parameters

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Hp : ${this.hp}`);
  },
};
healCharacter(strider, 0);

strider.showHp();

export {};
