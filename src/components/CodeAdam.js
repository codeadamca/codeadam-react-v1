import React,{Component} from "react";

import codeBlock from './../images/code-block.png';

class CodeAdam extends Component {
  render() {
    return (
      <div className="Calendly">

        <div className="ca-container-800 w3-center">

          <hr className="ca-hr" />

          <a href="https://codeadam.ca">
            <img src={codeBlock} className="ca-image-small" alt="" />
          </a>
        </div>

      </div>
    );
  }
}

export default CodeAdam;