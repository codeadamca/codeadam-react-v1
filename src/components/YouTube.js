import React,{Component} from "react";

class YouTube extends Component {
  render() {
    return (
      <div className="YouTube">

        <iframe 
          width="100%" 
          height="338" 
          src={"https://www.youtube.com/embed/"+this.props.id}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>

      </div>
    );
  }
}

export default YouTube;