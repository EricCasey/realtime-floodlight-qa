import React, { Component } from "react";

class Header extends Component {
  state = {
  };

  render() {

    return (
      <div className="Header">
        <img className="logo" src="http://www.thenewbase.com/fileadmin/templates/pb2016/images/newbase-logo.jpg" role="presentation"/>
        <p>Real-time Pixel QA Tool - Created by Eric Casey in 2018 for NewBase Toronto</p>
      </div>
    );
  }
}

export default Header;
