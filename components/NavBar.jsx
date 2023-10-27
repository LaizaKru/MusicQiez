const React = require("react");

function NavBar({ user }) {
  return (
    <div>
      <div>
        <nav>
          {/* <div className="container-fluid"> */}
          <ul>
            <li>
              <a href="/">В начало</a>
            </li>
            {user && (
              <li>
                Привет, {user.name}! Твой счет: {user.score}
              </li>
            )}
          </ul>
          {/* </div> */}
        </nav>
      </div>
    </div>
  );
}

module.exports = NavBar;
