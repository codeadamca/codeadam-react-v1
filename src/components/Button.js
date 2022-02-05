import React,{Component} from "react";

import {Link} from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link to={this.props.url}>
        <button className={"w3-button w3-" + (this.props.colour ? this.props.colour : "blue") + " w3-" + (this.props.size ? this.props.size : "medium")}>
          {this.props.text}
          {
            this.props.icon
            ? <span>&nbsp; <i className={this.props.icon}></i></span>
            : null
          }
        </button>
      </Link>
    );
  }
}

export default Button;