// route/contact.route.js

import express from "express";
import { sendMessage } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/send", sendMessage);

export default router;