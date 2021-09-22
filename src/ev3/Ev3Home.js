import React,{Component} from "react";

import Ev3InstructionList from './Ev3InstructionList';

import gate from './images/ev3-gate.jpg';
import colour from './images/ev3-color-brick.jpg';
import sumo from './images/ev3-sumo.jpg';
import tool from './images/ev3-coder-tool.jpg';

class Ev3Home extends Component {
  render() {
    return (
      <div className="Ev3Home">

        <h2 className="w3-text-red w3-center">EV3 Building Instructions</h2>

        <Ev3InstructionList instructions={instructions}></Ev3InstructionList>

        <h2 className="w3-text-red w3-center">EV3 Documentation</h2>

        <ul>
          <li>
            <a href="https://education.lego.com/en-us/support/mindstorms-ev3/python-for-ev3">
              LEGO&reg; MINDSTORMS EV3
            </a>
          </li>
          <li>
            <a href="https://www.lego.com/en-us/themes/mindstorms/downloads">
              LEGO&reg; MINDSTORMS EV3 Software
            </a>
          </li>
          <li>
            <a href="https://education.lego.com/en-us/support/mindstorms-ev3/python-for-ev3">
              Getting started with LEGO&reg; MINDSTORMS EV3 and Python
            </a>
          </li>
          <li>
            <a href="https://www.ev3dev.org/">
              ev3dev Linux-Debian operating system for LEGO® MINDSTORMS EV3 and the Dexture BrickPi
            </a>
          </li>
          <li>
            <a href="https://www.dexterindustries.com/brickpi/">
              Dexture BrickPi
            </a>
          </li>
          <li>
            <a href="https://www.dexterindustries.com/BrickPi/brickpi-tutorials-documentation/program-it/python/">
              Getting started with the Dexture BrickPi and Python
            </a>
          </li>
        </ul>
        
        <hr className="ca-hr" />

      </div>
    );
  }
}

export default Ev3Home;

const instructions = [
  {
    name: 'Parking Gate Project',
    image: gate, 
    url: '/ev3/parking-gate',
    text: 'Building Instructions',
    external: false
  },
  {
    name: 'Colour Detection Project',
    image:colour, 
    url: '/ev3/colour-detection',
    text: 'Building Instructions',
    external: false
  },
  {
    name: 'Sumo Robot Project',
    image:sumo, 
    url: '/ev3/sumo-robot',
    text: 'Building Instructions',
    external: false
  },
  {
    name: 'EV3 Coder Tool',
    image:tool, 
    url: 'https://codeadam.ca/tools/ev3/',
    text: 'Open Coder Tool',
    external: true
  }
]