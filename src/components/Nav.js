import React,{Component} from "react";
import {Link} from 'react-router-dom';

import NavSocial from './NavSocial';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">

        <nav className="ca-nav w3-orange ca-border-bottom-gray w3-hide-small">
          <div className="w3-cell-row w3-padding-16">
            <div className="w3-cell w3-cell-middle w3-container">

              <Link to="/" className="w3-text-white ca-pt-sans ca-font-none">&#8962;</Link>
              <Link to="/teaching" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Teaching</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/research-publishings" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Research and Publishings</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/speaking-engagements" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Speaking Engagements</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/professional-development" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Professional Development</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/about" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">About Me</Link>

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