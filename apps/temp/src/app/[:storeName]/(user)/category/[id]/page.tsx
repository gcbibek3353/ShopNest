// ProductsPage.tsx
import ProductsList from "@/components/ProductsList";
import { notFound } from "next/navigation";

export default async function ({ params = "car" }: any) {
  const products: any = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299.99,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Laptop",
      price: 1299.99,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 299.99,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  if (products.length <= 0) {
    console.log;
    notFound();
  }
  function capitalizeFirstLetter(string: string) {
    if (!string) return string; // Return if the string is empty
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Our Products : {capitalizeFirstLetter(params.id)}
      </h1>

      <ProductsList products={products} />
    </div>
  );
}
