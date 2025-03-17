import React from "react";
import { NavLink } from "react-router";

function Nav() {
  return (
    <header data-bs-theme="dark">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            React Tryouts
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            databstoggle="collapse"
            databstarget="#navbarCollapse"
            ariacontrols="navbarCollapse"
            ariaexpanded="false"
            arialabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link active" ariacurrent="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jokes">
                  Jokes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="counters">
                  Counters
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
