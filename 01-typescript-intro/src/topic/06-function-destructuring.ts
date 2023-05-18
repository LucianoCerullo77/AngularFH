export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 200,
};

export interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => (total += price));

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax,
});

console.log("Total", total);
console.log("Tax:", totalTax);

export {};
