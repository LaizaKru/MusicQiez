const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");
function Main({ title }) {
  return (
    <Layout title={title}>
      <link href="/stylesMain.css" rel="stylesheet" />
      <div className="main_page">
        <header className="jumbotron text-center">
          <h1 className="display-4">Добро пожаловать музыкальный на квиз!</h1>
        </header>

        <section className="container text-center">
          <a
            href="/register"
            className="btn btn-danger mb-2"
            style={{ background: "b", borderColor: "#a44e6b", color: "black" }}
          >
            <h2>Зарегестрируйтесь, чтобы начать игру</h2>
          </a>
          <p>
            Желаем удачи и надеемся, что наш квиз принесет вам много
            удовольствия.
          </p>
          {/* <img src="/cat.jpeg" alt="Картинка с милыми котиками" className="img-fluid rounded"/> */}
        </section>
      </div>
    </Layout>
  );
}

module.exports = Main;
