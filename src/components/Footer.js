import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer w3-center">

        <Link to="/" className="ca-pt-sans ca-font-none">&#8962;</Link>
      
      </div>
    );
  }
}

export default Footer;