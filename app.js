require("@babel/register");
const express = require("express");
const path = require("path");

const authRouter = require("./routers/view/register.router.js");
const ssr = require("./middleware/ssr");
const main = require("./routers/view/main.router.js");
const themes = require("./routers/view/themes.router.js");



const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(ssr);
app.use("/", main);

app.use("/themes", themes);



app.use("/", authRouter);

const PORT = 4000;


app.listen(PORT, () => {
  console.log("Орлы летят на 3000 серваке!");
});
