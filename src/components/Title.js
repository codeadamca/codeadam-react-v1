import React,{Component} from "react";

class Title extends Component {
  render() {
    return (
      <div className="Title">

        <div className="w3-center">
          {this.props.title && <h1 className="w3-text-dark-grey">{this.props.title}</h1>}
        </div>

      </div>
    );
  }
}

export default Title;