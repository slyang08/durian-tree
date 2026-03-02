// apps/web/src/features/inventory/api.ts
import { CreateInventoryDTO } from "@liushushu/shared";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createInventory(data: CreateInventoryDTO) {
  const res = await fetch(`${BASE_URL}/inventories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create inventory");
  }

  return res.json();
}
