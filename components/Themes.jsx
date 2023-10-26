const React = require("react");
const Layout = require("./Layout");

function Themes({ themes }) {
  return (
    <Layout>
      <div>
        <h1>Выбери тему и кайфуй</h1>
        <p>
          {themes.map((theme, index) => (
            <div>
              <h3>
                <a href={`/themes/${theme.id}`}></a>
              </h3>
              <p>
                Тема {index}: {theme.title}
              </p>
              <img
                style={{ width: "200px" }}
                src={theme.img}
                alt={theme.title}
              />
            </div>
          ))}
        </p>
      </div>
    </Layout>
  );
}
module.exports = Themes;
