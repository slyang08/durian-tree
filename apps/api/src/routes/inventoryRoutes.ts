// apps/api/src/routes/inventoryRoutes.ts
import { Router } from "express";
import { createInventory } from "../controllers/inventoryController";

const router: Router = Router();

router.post("/", createInventory);

export default router;
