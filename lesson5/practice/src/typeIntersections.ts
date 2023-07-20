type Plant = {
  name: string;
  type: string;
}

type Perennial = {
  bloom: string;
}

type VirginiaCreeper = Plant & Perennial;

const creeper: VirginiaCreeper = {
  name: "Virginia Creeper",
  type: "vine",
  bloom: "Spring",
}

// another example
// type Product = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// };

// type Review = {
//   id: string;
//   productId: string;
//   rating: number;
//   comment: string;
// };

// type ProductWithReviews = Product & {
//   reviews: Review[];
// };

// 1
type Product = {
  name: string;
  price: number;
}

type Shipping = {
  weight: number;
  shippingCost: number;
}

type ShippableProduct = Product & Shipping;

let yubaProduct: ShippableProduct = {
  name: "Yuba",
  price: 15,
  weight: 5,
  shippingCost: 12.99,
}

// 2
interface ShippableProduct2 extends Product, Shipping {}

let mouse: ShippableProduct2 = {
  name: "Computer Mouse",
  price: 12,
  weight: 14,
  shippingCost: 2.99,
}
