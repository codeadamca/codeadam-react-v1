import React,{Component} from "react";
import {Route, Switch} from 'react-router-dom';

import LearningHome from './LearningHome';
import Tutorial from './Tutorial';

class Learning extends Component {
    render() {
      return (
        <div className="Server">

          <Switch>
            <Route exact path="/learning" component={LearningHome} />
            <Route path="/learning/:slug" component={Tutorial} />
          </Switch>

        </div>
      );
    }
  }
  
  export default Learning;
