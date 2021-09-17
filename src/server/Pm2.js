import React,{Component} from "react";

import logoPm2 from './images/logo-pm2.svg';

class Pm2 extends Component {
  render() {
    return (
      <div className="Pm2">      
        
        <h2 class="w3-center w3-text-red">Installing and Configuring PM2</h2>

        <hr className="ca-hr" />
        
        <h3>Installing PM2</h3>
        <p>Install PM2 using the SSH tool from Google Cloud.</p>
        <a href="https://nodejs.org/en/">
          <img src={logoPm2} alt="" className="ca-image-medium" />
        </a>
        <p>Use this command:</p>
        <code>
          sudo npm install -g pm2
        </code>

        <hr className="ca-hr" />

        <h3>Configure PM2</h3>
        <p>Locate the app.js file and start it using PM2:</p>
        <code>
          cd /var/www/apps/index
          <br />
          pm2 start app.js --name "index"
        </code>
        <p>If you then run this commandit will list the active NodeJS processes:</p>
        <code>
          pm2 list
        </code>
        <p>We then need to tell PM2 to start app.js in startup:</p>      
        <code>
          pm2 startup systemd
        </code>
        <p>This command will create some output and provide a command that needs to be run. Copy and paste this command and push enter. It will look something like this:</p>
        <code>
          sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u googleuser --hp /home/googleuser
        </code>
        <p>You will need the following command to restart your NodeJS applications when developing:</p>
        <code>
          pm2 restart index
        </code>
        
        <hr className="ca-hr" />
        
      </div>
    );
  }
}

export default Pm2;