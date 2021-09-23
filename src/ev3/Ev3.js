import React,{Component} from "react";
import {Switch} from 'react-router-dom';
import {Page} from './../extensions/Page';

import Title from './../components/Title';

import Ev3Home from './Ev3Home';

import Colour from './Colour';
import Parking from './Parking';
import Sumo from './Sumo';

class Ev3 extends Component {
  render() {
    return (
      <div className="Ev3 ca-container-600">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="EV3 Programming Resources"></Title>

        <Switch>

          <Page exact path="/ev3" component={Ev3Home}></Page>

          <Page path="/ev3/parking-gate" component={Parking} title="EV3 Parking Gate"></Page>
          <Page path="/ev3/colour-detection" component={Colour} title="EV3 Colour Detection"></Page>
          <Page path="/ev3/sumo-robot" component={Sumo} title="EV3 Sumo Robot"></Page>
          
        </Switch>
        

      </div>
    );
  }
}

export default Ev3;