require('@babel/register');
const express = require('express');
const path = require('path');
const authRouter = require('./routers/view/register.router.js');
// const ssr = require("./middleware/ssr");
const app = express();
// const indexroutes = require("./routers/index.routes");
// const parsers = require("body-parser");
// app.use(parsers.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);

const PORT = 3000;
// app.use(ssr);
// app.use("/", indexroutes);

app.listen(PORT, () => {
  console.log('rabotaem, sestri');
});
