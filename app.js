const express = require("express");
const path = require("path");
require("@babel/register");
// const ssr = require("./middleware/ssr");
const app = express();
// const indexroutes = require("./routers/index.routes");
// const parsers = require("body-parser");
const PORT = 3000;
// app.use(parsers.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(ssr);
// app.use("/", indexroutes);

app.listen(PORT, () => {
  console.log("rabotaem, sestri");
});
