import React,{Component} from "react";
import {Link} from 'react-router-dom';

import facebook from './../images/facebook.jpeg';
import instagram from './../images/instagram.jpeg';
import linkedin from './../images/linkedin.jpeg';
import twitter from './../images/twitter.jpeg';
import youtube from './../images/youtube.jpeg';

import NavSocial from './NavSocial';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">

        <nav className="ca-nav w3-orange ca-border-bottom-gray">
          <div className="w3-cell-row w3-padding-16">
            <div className="w3-cell w3-cell-middle w3-container">

              <Link to="/" className="w3-text-white ca-pt-sans">&#8962;</Link>
              <Link to="/teaching" className="w3-text-white ca-pt-sans ca-margin-small">Teaching</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/research-publishings" className="w3-text-white ca-pt-sans ca-margin-small">Research and Publishings</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/speaking-engagements" className="w3-text-white ca-pt-sans ca-margin-small">Speaking Engagements</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/professional-development" className="w3-text-white ca-pt-sans ca-margin-small">Professional Development</Link>
              <span className="w3-text-white ca-pt-sans">|</span>
              <Link to="/about" className="w3-text-white ca-pt-sans ca-margin-small">About Me</Link>

            </div>
            <div className="w3-cell w3-cell-middle w3-container w3-right-align w3-hide-medium">
              
              <NavSocial links={social}></NavSocial>

            </div>
          </div>
        </nav>

      </div>
    );
  }
}

const social = [
  {image: facebook},
  {image: linkedin},
  {image: instagram},
  {image: twitter},
  {image: youtube}
];

export default Nav;