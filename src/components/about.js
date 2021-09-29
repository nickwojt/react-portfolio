import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="main main-about" id="about">
        <div className="h2">
          <h2>About Me</h2>
        </div>
        <div className="p">
          <div>
            <p>
              My name is Nicholas Wojtalewicz. I am a junior full stack
              developer.
            </p>
          </div>
          <br />
          <p>My skills:</p>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Redux</li>
              <li>Regex</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
