const router = require("express").Router();
const { Question, User } = require("../../db/models");

router.post("/:questionId/check", async (req, res) => {
  try {
    const { questionId } = req.params;
    const question = await Question.findOne({ where: { id: questionId } });
    if (question) {
      const correct = question.answer == req.body.answer; // в боди будет, что пользователь отправит через фетч
      if (correct) {
        res.app.locals.user.score += 1;
        await res.app.locals.user.save();
      }
      res.json({ correct, score: res.app.locals.user.score });
    } else {
      res.json({ message: "Такого вопроса нет" });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
