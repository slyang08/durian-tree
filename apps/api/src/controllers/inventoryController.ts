// apps/api/src/controllers/inventoryController.ts
import { Request, Response } from "express";
import * as inventoryService from "../services/inventoryService";

export async function createInventory(req: Request, res: Response) {
  try {
    const { storeId, date, items } = req.body;

    const inventory = await inventoryService.createInventory({
      storeId,
      date,
      items,
    });

    res.status(201).json(inventory);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
