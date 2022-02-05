import React,{Component} from "react";

import TweetEmbed from 'react-tweet-embed'

class Twitter extends Component {
  render() {
    return (
      <div className={"Twitter w3-padding-32 w3-" + (this.props.colour ? this.props.colour : "white")}>
        
        <div className="ca-container-550 w3-center">

          <TweetEmbed id={this.props.id}></TweetEmbed>

        </div>

      </div>
    );
  }
}

export default Twitter;