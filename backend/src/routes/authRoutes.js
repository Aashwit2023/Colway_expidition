import express, { request } from "express";
import {home, login, signUp, requestCallback, createBooking } from "../controllers/authController.js";
const router = express.Router();

router.route("/").get(home);

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/requestCallback').post(requestCallback);

router.route('/booking').post(createBooking);

export default router;