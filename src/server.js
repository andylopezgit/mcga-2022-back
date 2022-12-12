const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const productsRouter = require("../src/routes/index.js");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://mcga-final-22-lopez-gomez.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());

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
