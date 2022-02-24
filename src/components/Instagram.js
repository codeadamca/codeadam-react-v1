import React,{Component} from "react";
import styles from './Instagram.css';

class Instagram extends Component {
  render() {
    return (
      <div className="Instagram">

        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink={"https://www.instagram.com/p/" + this.props.id + "/"}
          data-instgrm-version="8" 
          style={{
            background:'#FFF', 
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
            margin: '1px', 
            maxWidth:'658px', 
            padding: 0, 
            width: '99.375%'}}>
        </blockquote>

      </div>
    );
  }
}

export default Instagram;