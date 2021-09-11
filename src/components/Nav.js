import React,{Component} from "react";

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

              <a href="/" className="w3-text-white ca-pt-sans">&#8962;</a>
              <a href="/teaching" className="w3-text-white ca-pt-sans ca-margin-small">Teaching</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="/research-publishings" className="w3-text-white ca-pt-sans ca-margin-small">Research and Publishings</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="/speaking-engagements" className="w3-text-white ca-pt-sans ca-margin-small">Speaking Engagements</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="/professional-development" className="w3-text-white ca-pt-sans ca-margin-small">Professional Development</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="/about" className="w3-text-white ca-pt-sans ca-margin-small">About Me</a>

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