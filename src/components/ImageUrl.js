import React,{Component} from "react";

class ImageUrl extends Component {
  render() {
    return (
      <p className="ImageUrl w3-center ca-font-tiny-fixed">
        <a href={this.props.url}>
          {this.props.url}
        </a>
      </p>
    );
  }
}

export default ImageUrl;