// 1
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  let productIdx = products.findIndex(product => product.id === productId);

  if (productIdx !== -1 ) {
    let product = products[productIdx];
    products[productIdx] = {...product, ...updatedValues};
  } else {
    console.log("Product not found");
  }
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});


console.log(JSON.stringify(products)); // [{"id":1,"name":"Updated Product Name","price":99.99,"description":"A sample product for demonstration"}]
