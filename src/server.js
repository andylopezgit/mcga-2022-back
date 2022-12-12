const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const productsRouter = require("../src/routes/index.js");
app.use(cors());
const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use(cors());
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
