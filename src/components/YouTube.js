import React,{Component} from "react";

class YouTube extends Component {
  render() {
    return (
      <div className="YouTube">
        
        <iframe class="embed-video" 
          src={"https://www.youtube.com/embed/" + this.props.id + "?rel=0"} 
          frameborder="0" 
          width="100%"
          height="340"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>

      </div>
    );
  }
}

export default YouTube;