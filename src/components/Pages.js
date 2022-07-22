import React,{Component} from "react";

import pages from './../images/pages.jpg';

class CodeAdam extends Component {
  render() {
    return (
      <div className="Pages">

        <div className="ca-container-800 w3-center">

          <hr className="ca-hr" />

          <a href="https://pages.codeadam.ca">
            <img src={pages} className="ca-image-large" alt="Sample Assignments" />
          </a>
        </div>

      </div>
    );
  }
}

export default CodeAdam;