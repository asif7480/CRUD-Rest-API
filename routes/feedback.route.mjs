import { Router } from "express";
import {
  getAllFeedback,
  getSingleFeedback,
  addFeedback,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedback.controller.mjs";
const router = Router();

router.route("/").get(getAllFeedback).post(addFeedback);

router
  .route("/:id")
  .get(getSingleFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);

export default router;
