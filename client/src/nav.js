import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
  super(props)
  this.state = {};
  this.classMaker = this.classMaker.bind(this);
}

classMaker(el) {
  if(el === this.props.view) {
    return "navOption navSel"
  } else {
    return "navOption"
  }
}

  render() {

    return (
      <div className="Nav">

        <div
        className={this.classMaker("feed")}
        id="feed"
        onClick={this.props.navSwitch}>
          <p
          id="feed"
          onClick={this.props.navSwitch}>
            Live Feed
          </p>
        </div>

        <div
        className={this.classMaker("builder")}
        id="builder"
        onClick={this.props.navSwitch}>
          <p
          id="builder"
          onClick={this.props.navSwitch}>
            Pixel Builder
          </p>
        </div>
      </div>
    );
  }
}

export default Nav;
