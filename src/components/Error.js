import React,{Component} from "react";

class Error extends Component {
  render() {
    return (
      <div className="Error w3-center">
        {this.props.message}
      </div>
    );
  }
}

export default Error;