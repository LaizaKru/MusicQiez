const React = require('react');

function Header({ user }) {
  return (
    <header>
      <ul className="animals-header">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/facts/add-form">Добавить новый факт</a>
        </li>
        Привет, {user}!
      </ul>
    </header>
  );
}

module.exports = Header;