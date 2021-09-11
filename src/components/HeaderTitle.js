import React,{Component} from "react";

class HeaderTitle extends Component {
  render() {
    return (
      <div className="HeaderTitle w3-center">

        {this.props.title && <h1 className="w3-text-dark-grey">{this.props.title}</h1>}

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default HeaderTitle;