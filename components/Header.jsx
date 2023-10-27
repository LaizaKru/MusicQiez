// const lib = require('pg-hstore');
const React = require('react');

function Header({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
      <a className="navbar-brand" href="/">
        Home
      </a>
      {user && (
        <li className="list-group-item list-group-item-primary">
          Привет,&nbsp;{user.login}! &nbsp;score:{user.score}
        </li>
      )}
    </nav>
  );
}

module.exports = Header;
