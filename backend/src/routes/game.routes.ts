import express from "express";
import { tap, state } from "../controllers/game.controller.js";
import { verifyVK } from "../middleware/vk.middleware.js";

const router = express.Router();

router.use(verifyVK);

router.post("/api/tap", tap);
router.get("/api/state", state);

export default router;