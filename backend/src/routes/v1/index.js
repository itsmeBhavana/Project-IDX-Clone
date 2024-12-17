import express from "express";
import { pingCheck } from "../../controllers/pingController.js";

const router = express.Router();

router.use("/", pingCheck);

export default router;
