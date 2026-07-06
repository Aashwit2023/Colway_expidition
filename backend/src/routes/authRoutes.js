import express, { request } from "express";
import {home, login, signUp, requestCallback, createBooking, updatebooking } from "../controllers/authController.js";
const router = express.Router();

router.route("/").get(home);

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/requestCallback').post(requestCallback);

router.route('/booking').post(createBooking);
router.route('/booking/:id').patch(updatebooking);

export default router;