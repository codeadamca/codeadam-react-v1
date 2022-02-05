import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div className="ca-container-800 w3-center">

          <hr className="ca-hr"></hr>

          <Switch>
            <Route path="/server-setup/*">
              <Link to="/server-setup" className="ca-pt-sans ca-font-none ca-font-big-fixed">
                &#9666;
              </Link>
            </Route>
            <Route path="/">
              <Link to="/" className="ca-pt-sans ca-font-none ca-font-big-fixed">
                &#8962;
              </Link>
            </Route>
          </Switch>

        </div>        
        
      </div>
    );
  }
}

export default Footer;