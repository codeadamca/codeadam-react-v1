import React,{Component} from "react";

class Arduino extends Component {
  render() {
    return (
      <div className="Arduino">
        
        <iframe src={"https://create.arduino.cc/editor/professoradam/" + this.props.id + "/preview?embed"}
          style={{height:"450px",width:"100%",margin:"10px 0"}} 
          title={"Arduino-" + this.props.id}
          frameBorder="0"></iframe>

      </div>
    );
  }
}

export default Arduino;