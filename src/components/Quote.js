import React,{Component} from "react";

class Quote extends Component {
  render() {
    return (
      <div className="Quote w3-orange w3-text-white w3-padding w3-padding-24 w3-left-align">
        <h3>
          <i className="fas fa-quote-left"></i>
          &nbsp;
          {this.props.text}
          &nbsp;
          <i className="fas fa-quote-right"></i>
        </h3>
        <em>
          {this.props.name}
          <br />
          {this.props.title}
        </em>
      </div>
    );
  }
}

export default Quote;