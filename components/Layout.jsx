const React = require("react");
// const NavBar = require("./NavBar");

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link href="/stylesNavBar.css" rel="stylesheet" />
        <link href="/styles/style.css" rel="stylesheet" />
        <script defer src="/scripts/answerForm.js" />
      </head>
      <body>{children}</body>
    </html>
  );
};
