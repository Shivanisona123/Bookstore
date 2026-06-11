import express from "express";
import { buyCourse } from "../controller/purchase.controller.js";

const router = express.Router();

router.post("/buy", buyCourse);

export default router;