import React,{Component} from "react";

class Tinkercad extends Component {
  render() {
    return (
      <div className="Tinkercad">
        
        <iframe width="100%" height="450" 
          src={"https://www.tinkercad.com/embed/" + this.props.id}
          frameBorder="0" marginwidth="0" 
          title={"Tinkercad-" + this.props.id}
          marginheight="0" scrolling="no"></iframe>

      </div>
    );
  }
}

export default Tinkercad;