const express = require("express");
const app = express();
const router = require("./router");
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

app.listen(3000, () => {
  console.log("The server is now running on Port 3000");
});



