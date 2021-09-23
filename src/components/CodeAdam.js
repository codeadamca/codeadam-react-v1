import React,{Component} from "react";

import codeBlock from './../images/code-block.png';

class CodeAdam extends Component {
  render() {
    return (
      <div className="Calendly">

        <div className="ca-container-600 w3-center">
          <a href="/">
            <img src={codeBlock} className="ca-image-small" alt="" />
          </a>
        </div>

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default CodeAdam;