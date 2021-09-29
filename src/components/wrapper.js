import React from "react";
import Header from "./header";
import Article from "./article";
import Main from "./main";
import Footer from "./footer";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Article></Article>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Wrapper;
