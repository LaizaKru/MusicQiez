const React = require("react");
const Layout = require("./Layout");

function Themes({ themes }) {
  return (
    <Layout>
      <h1>Выбери тему и кайфуй</h1>
      <p>
        {themes.map((theme, index) => (
          <div className="card">
            <h3>
              <a href={`/themes/${theme.id}`}></a>
            </h3>
            <p>
              Тема {index}: {theme.title}
            </p>
            <div class="card-body">
              <img
                class="card-img-top"
                style={{ width: "200px" }}
                src={theme.img}
                alt={theme.title}
              />
            </div>
          </div>
        ))}
      </p>
    </Layout>
  );
}
module.exports = Themes;

// <!-- Карточка с card-img-top -->
// <div class="card">
//     <!-- Изображение -->
//     <img class="card-img-top" src="..." alt="...">
//     <!-- Текстовый контент -->
//     <div class="card-body">
//         <!-- ... -->
//     </div><
// </div><!-- Конец карточки -->
