import React,{Component} from "react";

class Ted extends Component {
  render() {
    return (
      <div className="Ted">

        <div style={{maxWidth:854}}>
          <div style={{position:'relative',height:0,paddingBottom:56.25+'%'}}>
            <iframe 
              src={"https://embed.ted.com/talks/"+this.props.id}
              width="854" 
              height="480" 
              style={{position:'absolute',left:0,top:0,width:100+'%',height:100+'%'}} 
              frameBorder="0" 
              scrolling="no" 
              allowFullscreen>
            </iframe>
          </div>
        </div>

      </div>
    );
  }
}

export default Ted;