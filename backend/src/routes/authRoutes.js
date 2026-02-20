import express from "express";
import {home, login} from "../controllers/authController.js";
const router = express.Router();

router.route("/").get(home);

router.route('/login').post(login);

export default router;