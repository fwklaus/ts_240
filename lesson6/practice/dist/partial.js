"use strict";
// 1
// Find product to update by productId
// If found, apply partial update with using object spreading
// Else log out "Product not found"
const products = [
    {
        id: 1,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
function updateProduct(productId, updatedValues) {
    let productIdx = products.findIndex(product => product.id === productId);
    if (productIdx !== undefined) {
        let product = products[productIdx];
        products[productIdx] = Object.assign(Object.assign({}, product), updatedValues);
    }
    else {
        console.log("Product not found");
    }
}
updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
});
console.log(JSON.stringify(products));
