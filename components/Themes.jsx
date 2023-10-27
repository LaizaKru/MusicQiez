const React = require("react");
const Layout = require("./Layout");

function Themes({ themes }) {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Выбери тему и кайфуй
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",

          width: "900px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {themes.map((theme, index) => (
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="card " style={{ width: "18rem" }}>
              <div class="card-body">
                <img class="card-img-top" src={theme.img} alt={theme.title} />
              </div>
              <h5 class="card-title">Тема: {theme.title}</h5>

              <a href={`/themes/${theme.id}`} class="btn btn-primary">
                Клик тута
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = Themes;

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
