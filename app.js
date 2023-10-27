require("@babel/register");
const express = require("express");
const path = require("path");
const app = express();
// const indexroutes = require("./routers/index.routes");
// const parsers = require("body-parser");
// app.use(parsers.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
const ssr = require("./middleware/ssr");
app.use(ssr);
const main = require("./routers/view/main.router.js");
app.use("/", main);
const authRouter = require("./routers/view/register.router.js");
app.use("/", authRouter);
const PORT = 4000;

// app.use("/", indexroddutes);

app.listen(PORT, () => {
  console.log("rabotaem, sestri");
});
