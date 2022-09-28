import React,{Component} from "react";
import {Link} from 'react-router-dom';

import NavSocial from './NavSocial';

import codeBlockWhite from './../images/code-block-white.png';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">

        <nav className="ca-nav w3-black ca-border-bottom-gray w3-hide-small">
          <div className="w3-cell-row w3-padding-16">
            <div className="w3-cell w3-cell-middle w3-container">

              {process.env.REACT_APP_CODEADAMCA
                ? <>
                  <Link to="/" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">
                    <img src={codeBlockWhite} className="ca-image-icon" alt="Code Adam Logo" width="" />
                  </Link>
                  <Link to="/teaching" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Teaching</Link>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <Link to="/research-publishings" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Research and Publishings</Link>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <Link to="/speaking-engagements" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Speaking Engagements</Link>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <Link to="/professional-development" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Professional Development</Link>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <Link to="/about" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">About Me</Link>
                </>
                : <>
                  <a href="https://codeadam.ca/" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">
                    <img src={codeBlockWhite} className="ca-image-icon" alt="Code Adam Logo" width="" />
                  </a>
                  <a href="https://codeadam.ca/teaching.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Teaching</a>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <a href="https://codeadam.ca/research-publishings.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Research and Publishings</a>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <a href="https://codeadam.ca/speaking-engagements.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Speaking Engagements</a>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <a href="https://codeadam.ca/professional-development.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Professional Development</a>
                  <span className="w3-text-white ca-pt-sans">|</span>
                  <a href="https://codeadam.ca/about.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">About Me</a>
                </>  
              }

            </div>
            <div className="w3-cell w3-cell-middle w3-container w3-right-align w3-hide-small w3-hide-medium">
              
              <NavSocial></NavSocial>

            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Nav;