import React,{Component} from "react";



class Tutorial extends Component {

  saySomething = (something) => {
    console.log(something);
  }

  render() {

    

    const { url } = this.props.match.params;

    console.log(url);
    this.saySomething('test');

    return (

      
      <div className="Tutorial">

        <div className="ca-nav-spacer w3-hide-small"></div>
              
        {url}


        

      </div>
    );
  }
}

export default Tutorial;