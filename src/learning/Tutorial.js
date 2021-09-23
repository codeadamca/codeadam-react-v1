import React,{Component} from "react";

class Tutorial extends Component {
  render() {

    fetch('./topics.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('data:', data);
    })

    const { url } = this.props.match.params;

    return (

      
      <div className="Tutorial">

        <div className="ca-nav-spacer w3-hide-small"></div>
              
        {url}


        

      </div>
    );
  }
}

export default Tutorial;