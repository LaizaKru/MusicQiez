const router = require("express").Router();
const MainPage = require("../../components/MainPage");

router.get("/", (req, res) => {
  try {
    const html = res.renderComponent(MainPage, { title: "Main page" });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
