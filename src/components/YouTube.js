import React,{Component} from "react";

class YouTube extends Component {
  render() {
    return (
      <div className="YouTube">
        
        <iframe className="embed-video" 
          src={"https://www.youtube.com/embed/" + this.props.id + "?rel=0"} 
          frameBorder="0" 
          title={"YouTube-" + this.props.id}
          width="100%"
          height="340"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>

      </div>
    );
  }
}

export default YouTube;