require("dotenv").config();
const port = process.env.PORT || 4000;

const express = require("express");

const app = express();
const path = require("path");

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});

// formulario 
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.use(express.static((__dirname, "public")));

//login
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.use(express.static((__dirname, "public")));
