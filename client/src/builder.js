import React, { Component } from "react";

class Builder extends Component {
  constructor(props) {
  super(props)
  this.state = {
    cIn: 'foo',
    tIn: 'bar'
  };
  this.onCchange = this.onCchange.bind(this);
  this.onTchange = this.onTchange.bind(this);
}

onCchange (e) {
  this.setState({ cIn : e.target.value })
}
onTchange (e) {
  this.setState({ tIn : e.target.value })
}

  render() {

    return (
      <div className="Builder">
        <h1>Builder</h1>
        <div className="builderA">

        <div className="cIn">
          <h4>Campaign Name Input</h4>
          <input type="text" name="cname" onChange={this.onCchange} />
        </div>

        <div className="tIn">
          <h4>Tag Name Input</h4>
          <input type="text" name="cname" onChange={this.onTchange}/>
        </div>

        <div className="output">
        <p>PIGGY BACK ONE OF THESE INTO THE TAG YOU WANT TO TRACK</p>
        <br/>
        <p>URL:</p>
        {`http://localhost:3002/api/pixel/?campaign=${this.state.cIn}&tag=${this.state.tIn}`}
        <br/><br/>
        <p>IMG PIXEL:</p>
        {`<img src="http://localhost:3002/api/pixel/?campaign=${this.state.cIn}&tag=${this.state.tIn}" />`}
        </div>

        </div>
      </div>
    );
  }
}

export default Builder;
