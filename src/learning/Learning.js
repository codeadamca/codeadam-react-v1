import React,{Component} from "react";
import {Route, Switch} from 'react-router-dom';

import LearningHome from './LearningHome';
import Tutorial from './Tutorial';
import TutorialDetails from './TutorialDetails';

class Learning extends Component {
    render() {
      return (
        <div className="Server ca-container-600">
  
          <div className="ca-nav-spacer w3-hide-small"></div>

          <Switch>
            <Route exact path="/learning" component={LearningHome} />
            <Route path="/learning/:url" component={Tutorial} />
          </Switch>

        </div>
      );
    }
  }
  
  export default Learning;
