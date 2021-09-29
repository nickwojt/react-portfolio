import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="main main-contact" id="contact">
        <div className="h2">
          <h2>Contact Info</h2>
        </div>
        <div className="p list">
          <p>303-319-2191</p>
          <a href="mailto:nicholaswojt@outlook.com">nicholaswojt@outlook.com</a>
          <a href="https://github.com/nickwojt" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-wojtalewicz-78b833144"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://my.indeed.com/p/nicholasw-4guzl29" target="_blank">
            Resume
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
