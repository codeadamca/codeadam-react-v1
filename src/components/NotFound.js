import React,{Component} from "react";

import Title from './../components/Title';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound w3-center ca-container-600">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Oops!"></Title>

        <h2 className="w3-text-red">Page Not Found</h2>
        
        <div className="w3-left-align">

          <p>There was an error while loading this page. Where would you like to go next:</p>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/teaching">Teaching</a></li>
            <li><a href="/research-publishings">Research and Publishings</a></li>
            <li><a href="/speaking-engagements">Speaking Engagements</a></li>
            <li><a href="/professional-development">Professional Development</a></li>
            <li><a href="/about">About Me</a></li>
          </ul>
        
        </div>

        <hr className="ca-hr"></hr>

      </div>
    );
  }
}

export default NotFound;