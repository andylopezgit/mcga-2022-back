//const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");

const productsRouter = require("../src/routes/products");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use(router);

mongoose
  .connect(
    "mongodb+srv://andy:universidad@clustermcga2022.rhpftgp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: 3000 }, () => {
      //console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });
