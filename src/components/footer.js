import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-section">
          <h4>
            Made by <span id="author">Nicholas Wojtalewicz</span>
          </h4>
          <p>All Rights Reserved</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
