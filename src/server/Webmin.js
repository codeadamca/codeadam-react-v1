import React,{Component} from "react";

import logoWebmin from './images/logo-webmin.png';

class Webmin extends Component {
  render() {
    return (
      <div className="Webmin">
        
        <h2 className="w3-center w3-text-red">Install Webmin and Open Firewall</h2>

        <hr className="ca-hr" />

        <h3>Install Webmin</h3>
        <p>Download and Install the Webmin configuration tool:</p>
        <a href="http://www.webmin.com/">
          <img src={logoWebmin} className="ca-image-medium" alt="" />
        </a>
        <code>
          cd /
          <br />
          sudo wget http://prdownloads.sourceforge.net/webadmin/webmin_1.580_all.deb
          <br />
          sudo dpkg -i webmin_1.580_all.deb
          <br />
          sudo apt-get -f install
        </code>
        
        <hr className="ca-hr" />
        
        <h3>Change Root Password</h3>
        <p>You will use the root username and password to log into Webmin, so we will need to change the root password:</p>
        <code>
          sudo passwd
        </code>
        
        <hr className="ca-hr" />
        
        <h3>Adjust Firewall</h3>
        <p>
          The Webmin configuration tool uses the URL 
          <code>https://999.999.999.999:10000</code>
          (use your Google external IP address) so we need to open up port 10000 on the firewall:
        </p>
        <ol>
          <li><p>Click <strong>VPC Network</strong> in the main menu.</p></li>
          <li><p>Click <strong>Firewall Rules</strong>.</p></li>
          <li><p>Click <strong>Create Firewall Rule</strong>.</p></li>
          <li>
          <p>Use the following settings:</p>
          <ul>
            <li>Name: allow-webmin</li>
            <li>Targets: All Instance in the Network</li>
            <li>IP Range: 0.0.0.0/0</li>
            <li>Protocols and Ports: Specified protocols</li>
            <li>Protocols and Ports: tcp:10000</li>
          </ul>
          <p>Note: Everything else can remain as the defaults.</p>
          </li>
          <li>
          <p>Click <strong>Create</strong>.</p>
          </li>
        </ol>
        <p>
          You should now be able to log into Webmin. Go to 
          <a href="https://999.999.999.999:10000">https://999.999.999.999:10000</a>
          (use your Google external IP address) using Chrome. It will warn you regarding an insecure SSL, just 
          proceed anyway. Log in using <code>root</code> and your root password.
        </p>
        <p>Once you are logged into Webmin click the <strong>Upgrade Webmin</strong> button.</p>
        <p>Once the upgrade is done refresh Webmin. If it is not working restart the server:</p>
        <code>
          sudo reboot
        </code>
        <p>If the upgrade worked go to <strong>System Information</strong> and update packages if needed (44 package updates are available).</p>
        
        <hr className="ca-hr" />

        <h3>MySQL in Webmin</h3>
        <p>Log in to Webmin and go to <strong>Servers</strong> and then <strong>MySQL Database Server</strong>. Enter your password and Webmin is now configured for MySQL.</p>
        
        <hr className="ca-hr" />
    
      </div>
    );
  }
}

export default Webmin;