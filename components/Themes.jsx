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
          height: "100px",
          width: "900px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {themes.map((theme, index) => (
          <div
            className="d-flex flex-column align-items-center mb-4"
            style={{ height: "400px" }}
          >
            <div className="card " style={{ width: "18rem", height: "100%" }}>
              <div className="card-body">
                <img
                  className="card-img-top"
                  style={{ height: "300px" }}
                  src={theme.img}
                  alt={theme.title}
                />
              </div>
              <h5 className="card-title">Тема: {theme.title}</h5>

              <a href={`/themes/${theme.id}`} className="btn btn-primary">
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
