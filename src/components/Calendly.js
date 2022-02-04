import React,{Component} from "react";

import logoCalendly from './../images/logo-calendly.png';

class Calendly extends Component {
  render() {
    return (
      <div className="Calendly">

        <div className="ca-container-800 w3-center">

          <hr className="ca-hr" />

          <h2 className="w3-text-red">Students: Book an Appointment</h2>
          <a href="https://calendly.com/codeadamca">
            <img src={logoCalendly} className="ca-image-small" alt="" />
          </a>

        </div>

      </div>
    );
  }
}

export default Calendly;