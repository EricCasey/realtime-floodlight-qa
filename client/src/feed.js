import React, { Component } from "react";

import TimeAgo from 'react-timeago';

class Feed extends Component {
  state = {
  };

  render() {
    var campaignList = this.props.campaignList
    var view
    if(campaignList[0] === []) {
      view = "No Pixels Firing"
    } else {
      // console.log(campaignList)
      view = campaignList.map((campaign, num) => {

        //console.log(this.props.data[campaign])
        var time = Date(this.props.data[campaign].time)
        //console.log(campaign)
        //console.log(time)

        return <div key={num} className="feedEl">
                <div className="led-box">
                  <div className="led-red"></div>
                </div>
                <h4>{campaign}</h4>
                <p>Last Data: <TimeAgo date={time}/></p>
                <p className="tagList">Tags: {Object.keys(this.props.data[campaign]).forE}</p>
              </div>
      })
    }
    return (
      <div className="Feed">
        <h1>Pixel Load Feed</h1>
        {view}
      </div>
    );
  }
}

export default Feed;
