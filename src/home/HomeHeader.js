import React,{Component} from "react";

import homeVideo from './../video/home-video.mp4';

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">

        <header className="ca-border-bottom-gray">

          <div className="ca-fullscreen">
            <video preload="auto" autoPlay loop muted className="ca-fullscreen-background">
                <source src={homeVideo} />
            </video>
            <div className="ca-fullscreen-content w3-cell-row">
                <div className="w3-cell w3-cell-middle w3-container w3-center">
                    
                <h1 className="w3-text-white ca-font-medium ca-pt-sans">Adam Thomas</h1>
                <h2 className="w3-text-red ca-font-large ca-pt-sans">I Teach Code!</h2>
                <p className="w3-text-white ca-font-small ca-pt-sans w3-center">
                    Self-taught full-stack developer.
                    <br />
                    Learning code and teaching code at Humber College, Toronto, Canada.
                </p>
                </div>
            </div>
          </div>

        </header>

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default HomeHeader;