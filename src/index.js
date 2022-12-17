const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

require("dotenv").config();
const userRoute = require("./routes/user");

// settings
const app = express();
app.use(cors());
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Bienvenido");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectando a MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("servidor listo en el puerto", port));
const MongoClient = require('mongodb').MongoClient;
