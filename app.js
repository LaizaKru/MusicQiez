require("@babel/register");
const express = require("express");
const path = require("path");
const authRouter = require("./routers/view/register.router.js");
const ssr = require("./middleware/ssr");
const main = require("./routers/view/main.router.js");
const game = require("./routers/view/gamePage.js");
const question = require("./routers/api/question.js");
const app = express();
// const indexroutes = require("./routers/index.routes");
// const parsers = require("body-parser");
// app.use(parsers.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(ssr);
app.use("/", main);

app.use("/", authRouter);

app.use("/game", game);

app.use("/question", question);
const PORT = 3000;

// app.use("/", indexroddutes);

app.listen(PORT, () => {
  console.log("rabotaem, sestri");
});
