import React,{Component} from "react";

import TweetEmbed from 'react-tweet-embed'

class Twitter extends Component {
  render() {
    return (
      <div className="Twitter">
        
        <TweetEmbed id={this.props.id}></TweetEmbed>

      </div>
    );
  }
}

export default Twitter;