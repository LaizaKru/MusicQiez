
const React = require('react');
const Layout = require('./Layout');

function Main({ title,user }) {

  return (
    <Layout title={title} user={user}>
      <link href="/stylesMain.css" rel="stylesheet" />
      <div className="main_page main-header">
        <header className="jumbotron text-center text_header">
          <h1 className="display-4 fst-italic" style={{ marginTop: '20px' }}>
            Добро пожаловать музыкальный на квиз!
          </h1>
        </header>

        <section
          className="container text-center "
          style={{ marginTop: '10%' }}
        >
          <a

            href="/themes"
            className="btn mb-2 btn-header"
            style={{ background: "b", borderColor: "#a44e6b", color: "black" }}

          >
            <h2>Угадываем музыку</h2>
          </a>
          <p className="p-header">
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
