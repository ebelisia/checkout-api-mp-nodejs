const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");
const paymentconroller = require("./controllers/paymentController");
const walletcontroller = require("./controllers/walletController");

router.get("/", controller.renderHomePage);
router.post("/checkout", walletcontroller.walletbutton);
router.get("/checkout", controller.renderHomePage);
router.post("/pagar", paymentconroller.createPayment);
router.post("/wallet", walletcontroller.walletbutton);

module.exports = router;
