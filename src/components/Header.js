import React,{Component} from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header ca-adjust-nav">

        <header className="ca-border-bottom-gray w3-blue">

          <div className="w3-center">
            
            <h1 className="w3-text-white w3-padding-64">{this.props.title}</h1>  
          
          </div>

        </header>

      </div>
    );
  }
}

export default Header;