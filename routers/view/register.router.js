const router = require('express').Router();
const Register = require('../../components/Register');

router.get('/register', (req, res) => {
  try {
    console.log('ya utu');
    const html = res.renderComponent(Register, {});
    console.log(html);
    res.send(html);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
