// Partial
type User2 = {
  name: string;
  age: number;
  email: string;
};

const partialUser: Partial<User> = {
  name: "John",
};

// use case example

type ApiConfig = {
  page: number;
  pageSize: number;
  sort: "asc" | "desc";
};

const defaultConfig: ApiConfig = {
  page: 1,
  pageSize: 10,
  sort: "asc",
};

async function fetchUsers(config: Partial<ApiConfig> = {}): Promise<void> {
  const finalConfig = { ...defaultConfig, ...config };

  const response = await fetch(
    `/api/users?page=${finalConfig.page}&pageSize=${finalConfig.pageSize}&sort=${finalConfig.sort}`
  );
  const data = await response.json();

  console.log(data);
}

// Fetch users with default config
fetchUsers();

// Fetch users with custom config
fetchUsers({ page: 2, sort: "desc" });

// 1
// implement the updateProduct function based on the provided requirements
// implement the updateProduct function based on the provided requirements
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
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update using object spreading
  // Else log out "Product not found"
  let product = products.find(obj => obj.id === productId);

  if (product) {
    product = {...product, ...updatedValues};
    console.log(product);
  } else {
    console.log("Product not found");
  }
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});
