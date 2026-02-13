const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");

// router.get('/', (req, res) => {
//     res.send("Hello world using Router")
// });

router.route("/").get(authControllers.home);

router.route('/login').post(authControllers.login);


module.exports = router;