import React from "react";
import dayplanner from "../images/dayplanner.png";
import venu from "../images/venu.png";
import generator from "../images/generator.png";
import placeholder from "../images/coding2.jpg";
class Projects extends React.Component {
  render() {
    return (
      <section className="main main-projects" id="projects">
        <div className="h2">
          <h2>Projects</h2>
        </div>
        <div className="projects-container">
          <div className="big">
            <div className="card">
              <a href="https://nickwojt.github.io/venu/" target="_blank">
                <img src={venu} alt="laptop" title="Open Laptop" />
              </a>
              <div className="card-body">
                <h3>Venu-Concert Finder</h3>
                <p className="card-text">
                  HTML, CSS, JS, JQuery, Moment.js, Bulma
                  <br />
                  <a href="https://github.com/nickwojt/venu" target="_blank">
                    Github
                  </a>
                  <br />
                  <a href="https://nickwojt.github.io/venu/" target="_blank">
                    Application
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="small">
            <div className="card-small">
              <a
                href="https://nickwojt.github.io/password-generator/"
                target="_blank"
              >
                <img src={generator} alt="laptop" title="Open Laptop" />
              </a>
              <div className="card-body">
                <h3>Password Generator</h3>
                <p className="card-text">
                  HTML, CSS, JS, JQuery
                  <br />
                  <a
                    href="https://github.com/nickwojt/password-generator"
                    target="_blank"
                  >
                    Github
                  </a>
                  <br />
                  <a
                    href="https://nickwojt.github.io/password-generator/"
                    target="_blank"
                  >
                    Application
                  </a>
                </p>
              </div>
            </div>
            <div className="card-small">
              <a
                href="https://nickwojt.github.io/business-day-planner/"
                target="_blank"
              >
                <img src={dayplanner} alt="laptop" title="Open Laptop" />
              </a>
              <div className="card-body">
                <h3>Business Day Planner</h3>
                <p className="card-text">
                  HTML, CSS, JS, JQuery, Bootstrap
                  <br />
                  <a
                    href="https://github.com/nickwojt/business-day-planner"
                    target="_blank"
                  >
                    Github
                  </a>
                  <br />
                  <a
                    href="https://nickwojt.github.io/business-day-planner/"
                    target="_blank"
                  >
                    Application
                  </a>
                </p>
              </div>
            </div>
            <div className="card-small">
              <a href="#">
                <img src={placeholder} alt="laptop" title="Open Laptop" />
              </a>
              <div className="card-body">
                <h3>Project 3</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  <a href="#">Github</a>
                  <br />
                  <a href="#">Application</a>
                </p>
              </div>
            </div>
            <div className="card-small">
              <a href="#">
                <img src={placeholder} alt="laptop" title="Open Laptop" />
              </a>
              <div className="card-body">
                <h3>Project 5</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  <a href="#">Github</a>
                  <br />
                  <a href="#">Application</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
