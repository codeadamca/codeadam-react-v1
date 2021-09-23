import React,{Component} from "react";

class SoundCloud extends Component {
  render() {
    return (
      <div className="SoundCloud">
        
        <iframe 
          title={"soundcloud-" + this.props.id}
          width="100%" 
          height="300" 
          scrolling="no" 
          rameborder="no" 
          allow="autoplay" 
          src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.props.id + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}></iframe>
      </div>
    );
  }
}

export default SoundCloud;