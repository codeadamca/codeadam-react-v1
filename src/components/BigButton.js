import React,{Component} from "react";

import Button from './../components/Button';

class BigButton extends Component {
  render() {
    return (
      <div className="BigButton w3-padding-48 w3-dark-grey">

        <div className="ca-container-600 w3-center">

          <Button url={this.props.url} text={this.props.text} size="xlarge" icon="fas fa-chevron-right" colour={this.props.colour ? this.props.colour : null}></Button>

        </div>

      </div>
    );
  }
}

export default BigButton;