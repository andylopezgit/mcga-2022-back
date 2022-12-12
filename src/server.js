const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const productsRouter = require("../src/routes/index.js");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use("/", productsRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => {
      app.listen({ port: 3000 });
      console.log("🟢 DB Connected");
    })
    .catch((err) => {
      console.log("🔴 There was an error on the DB connection method.");
      console.log(err);
    });
}
