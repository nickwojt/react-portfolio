import React from "react";
import Nav from "./nav";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Nicholas Wojtalewicz</h1>
        <Nav></Nav>
      </header>
    );
  }
}

export default Header;
