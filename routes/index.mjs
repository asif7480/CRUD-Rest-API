import { Router } from "express";
import feedbackRoutes from "./feedback.route.mjs"

const router = Router();

router.use("/api/v1/feedback", feedbackRoutes)

export default router