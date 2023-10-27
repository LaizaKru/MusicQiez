const router = require("express").Router();
const Register = require("../../components/Register");
const { User } = require("../../db/models");
router.get("/register", (req, res) => {
  try {
    const html = res.renderComponent(Register, {});
    res.send(html);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const { Login, Password } = req.body;
    // console.log(Login);
    const user = await User.create({
      login: Login,
      password: Password,
      score: 0,
    });
    res.app.locals.user = user;
    res.redirect("/themes");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
