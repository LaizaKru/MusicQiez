const React = require("react");
const Header = require("./Header");

module.exports = function Layout({ title, children, user }) {
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
        <link href="/styles/style.css" rel="stylesheet" />
        {/* <link href="/music/" rel="stylesheet" /> */}
        <script defer src="/scripts/answerForm.js" />
      </head>
      <Header user={user} />
      <body>{children}</body>
    </html>
  );
};
