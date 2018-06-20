import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-end nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Garp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
