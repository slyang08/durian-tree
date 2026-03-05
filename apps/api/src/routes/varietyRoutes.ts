// apps/api/src/routes/varietyRoutes.ts
import { Router } from "express";
import * as varietyController from "../controllers/varietyController";

const router: Router = Router();

router.get("/", varietyController.getAllVarieties);
router.post("/", varietyController.createVariety);
router.get("/:id", varietyController.getVarietyById);
router.patch("/:id", varietyController.updateVariety);
router.delete("/:id", varietyController.softDeleteVariety);

export default router;
