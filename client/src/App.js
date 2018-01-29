
import React, { Component } from "react";

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002/');

import Header from './header.js';
import Nav from './nav.js';
import Feed from './feed.js';
import Builder from './builder.js';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    view: 'feed',
    list: [ ],
    data: { },
    sub: false
  };
  this.navSwitch = this.navSwitch.bind(this);
  this.subscribe = this.subscribe.bind(this);
}

  navSwitch(e) { this.setState({ view: e.target.id }) }

  subscribe(type) {
    socket.on('pixelLoad', (msg) => {
      var oldList = this.state.list
      var oldData = this.state.data
      var split = msg.split(".")
      split.shift();
      if (this.state.list.indexOf(msg.split(".")[0]) === -1) {
        oldList.push(msg.split(".")[0])
        oldData[msg.split(".")[0]] = {}
        oldData[msg.split(".")[0]][split[0]] = { time: split[1]}
        this.setState({ list : oldList, data: oldData })
      } else {
        if(oldData[msg.split(".")[0]].hasOwnProperty(split[0])) {
          //console.log("that tag is already there")
          oldData[msg.split(".")[0]][split[0]].time = split[1]
        } else {
          //oldData[msg.split(".")[0]][split[0]] = { time: split[1]}
        }

        this.setState({ data: oldData })
      }
    });
    this.setState({ sub : true })
  }

  render() {
    //console.log(this.state)
    if(this.state.sub === false) { this.subscribe() }

    var view
    if(this.state.view === "feed") {
      view = <Feed data={this.state.data} campaignList={this.state.list}/>
    } else {
      view = <Builder />
    }

    return (
      <SocketProvider>
      <div className="App">
          <Header />
          <Nav view={this.state.view} navSwitch={this.navSwitch} />
          {view}
      </div>
      </SocketProvider>
    );
  }
}

export default App;
