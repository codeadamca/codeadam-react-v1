import React,{Component} from "react";

class Meme extends Component {
  render() {
    return (
      <div className={"Meme w3-padding-32 w3-" + (this.props.colour ? this.props.colour : "white")}>

        <div className="ca-container-600 w3-center">

          {
            this.props.caption
            ? <h3 className="w3-text-grey">{this.props.caption}:</h3>
            : null
          }

          <img src={this.props.image} className="w3-image" alt="" />

          <br />
          
          <span className="w3-text-dark-grey ca-font-tiny-fixed">
            {this.props.title} [Digital Image]. {this.props.date}.
            Retrieved from <a href="https://www.reddit.com/r/ProgrammerHumor/">https://www.reddit.com/r/ProgrammerHumor/</a>
          </span>

        </div>

      </div>
    );
  }
}

export default Meme;