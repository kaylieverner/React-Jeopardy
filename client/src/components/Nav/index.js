import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Jeopardy
      </a>
      <a className="navbar-brand" href="/login">
        Log In
      </a>
      <a className="navbar-brand" href="/">
        Logout
      </a>
      <a className="navbar-brand" href="/play">
        Play
      </a>
      <a className="navbar-brand" href="/practice">
        Practice
      </a>
      <a className="navbar-brand" href="/leaderboard">
        Leaderboard
      </a>
    </nav>
  );
}

export default Nav;
