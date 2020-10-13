
import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Headernav from "../../Reuseable/Headernav";
import Info from "./Info";

class Home extends Component {
  render() {
    return (
      <>
        <Headernav />
        <Dropdown />
        <Info />
      </>
    );
  }
}

export default Home;
