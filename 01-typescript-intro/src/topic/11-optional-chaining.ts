export interface Passenger {
  name: string;
  children?: string[];
}

const passengerOne: Passenger = {
  name: "Luciano",
};

const passengerTwo: Passenger = {
  name: "Fernando",
  children: ["Nathalie", "Elizabeth"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(`${passenger.name} has ${howManyChildren} childrens`);
  return howManyChildren;
};

printChildren(passengerOne);
printChildren(passengerTwo);

const printChildrenNumber = (passenger: Passenger): number => {
  // children ? .  will be optional, if this exists.
  // children ! . will be forced, there always be a result
  // non null asertion operator is called !
  const howManyChildren = passenger.children!.length;

  console.log(`${passenger.name} has ${howManyChildren} childrens`);

  return howManyChildren;
};

printChildrenNumber(passengerTwo);
