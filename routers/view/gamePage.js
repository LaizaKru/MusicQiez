const router = require("express").Router();
const GamePage = require("../../components/GamePage");
const { Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const { questionIndex, themeId } = req.query;
    const questions = await Question.findAll({ where: { themeId: themeId } });
    const html = res.renderComponent(GamePage, {
      title: "Game page",
      question: questions[questionIndex],
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
