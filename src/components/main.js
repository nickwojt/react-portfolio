import React from "react";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </main>
    );
  }
}

export default Main;
