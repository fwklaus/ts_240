type Building = {
  floors: number;
  address: string,
}

type Apartment = {
  units: number;
  name: string;
}

type PublicHousing = Building & Apartment;

let terraceGardens: PublicHousing = {
  floors: 8,
  address: "35612 Aldwych Ct.",
  units: 12,
  name: "Terrace Gardens",
}

// 1
type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;

const item: ShippableProduct = {
  name: "Biotin",
  price: 9.99,
  weight: 5,
  shippingCost: 3.99,
}

interface ShippableProduct2 extends Product, Shipping {}

const item2: ShippableProduct2 = {
  name: "Melatonin",
  price: 15.99,
  weight: 6,
  shippingCost: 3.99,
}

// 1
// type error
// type aliases in TS are considered "closed"
// we cannot redeclare a type

// 2
// executes without any issues
// we declare a variable `user` using `const`, and type it to the `UserInterface` interface. We then call `greetUser` which explicitly types the `user` parameter to `UserType`
// this example demonstrates how TS uses structural typing to determine the assignability of objects. In this case, a UserInterface interface is assignable to a UserType type because they have have a compatible shape.