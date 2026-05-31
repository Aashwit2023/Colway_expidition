import express, { request } from "express";
import {home, login, signUp, requestCallback} from "../controllers/authController.js";
const router = express.Router();

router.route("/").get(home);

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/requestCallback').post(requestCallback);

export default router;