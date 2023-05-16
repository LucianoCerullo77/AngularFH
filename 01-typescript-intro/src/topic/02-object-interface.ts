// if i dont know if my variable is going to change, just keep it as a constant
const skills: string[] = ["Bash", "Counter", "Healing"];

// Interface is used to define our object literals how do we want to be, like string, number, boolean, array, string array, etc.

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
  //hometown: string | undefined is similar;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);
console.table(skills);

export {};
