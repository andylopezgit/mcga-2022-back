//const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");

const productsRouter = require("../src/routes/index.js");

const url =
  "mongodb+srv://andy:universidad@clustermcga2022.rhpftgp.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use("/", productsRouter);

mongoose
  .connect(url)
  .then(() => {
    app.listen({ port: 3000 });
    console.log("🟢 DB Connected");
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });
