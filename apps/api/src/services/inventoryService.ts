// apps/api/src/services/inventoryService.ts
import { prisma } from "../lib/prisma";
import { CreateInventoryDTO } from "@liushushu/shared";

interface CreateInventoryInput {
  storeId: number;
  date: string;
  items: {
    varietyId: number;
    quantity: number;
    price: number;
  }[];
}

export async function createInventory(data: CreateInventoryDTO) {
  const { storeId, date, items } = data;

  const existing = await prisma.inventory.findUnique({
    where: {
      storeId_date: {
        storeId,
        date: new Date(date),
      },
    },
  });

  if (existing) {
    throw new Error("Inventory for this date already exists.");
  }

  return prisma.inventory.create({
    data: {
      storeId,
      date: new Date(date),
      items: {
        create: items.map((item) => ({
          varietyId: item.varietyId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: true,
    },
  });
}
