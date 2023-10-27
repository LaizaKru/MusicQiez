const router = require("express").Router();
const ThemesPage = require("../../components/Themes");
const { Theme } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll();

    const html = res.renderComponent(ThemesPage, { themes });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
