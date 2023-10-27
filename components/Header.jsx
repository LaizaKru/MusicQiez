// const lib = require('pg-hstore');
const React = require('react');

function Header({ user }) {
  return (
    <nav className=" header-h navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
      <a className="navbar-brand" href="/">
        Home
      </a>
      {user && (
        <li className="list-group-item list-group-item-primary">
          Привет,&nbsp;{user.login}! &nbsp;score:{user.score}
        </li>
      )}
            <a className="navbar-brand" href="/">
        Зарегистрироваться
      </a>
          <div className="video-background">
          <div className="video-foreground">
            <iframe
              width="1519"
              height="538"
              src="https://www.youtube.com/embed/iJ_pigL5-Lo?si=f_1JpKxZHtEUe5Xl&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ&amp;start=0"
              title="Bakr - Привет | Lyrics video | 2023 #Bakr #привет"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          
          </div>
        </div>
    </nav>
    
  );
}

module.exports = Header;
