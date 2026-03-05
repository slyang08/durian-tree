// apps/api/src/routes/inventoryItemRoutes.ts
import { Router } from "express";
import * as inventoryController from "../controllers/inventoryItemController";

const router: Router = Router();

router.patch("/:id", inventoryController.updateQuantity);

export default router;
