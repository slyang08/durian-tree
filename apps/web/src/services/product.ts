import { Product } from "@liushushu/types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8080/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
