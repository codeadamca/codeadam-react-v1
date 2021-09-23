import React,{Component} from "react";
import {Link} from 'react-router-dom';

import apacheDirectives from './images/apache-directives.png';
import ssh from './images/ssh.png';
import sshCommendLine from './images/ssh-command-line.png';

class Lamp extends Component {
  render() {
    return (
      <div className="Lamp">
        
        <h2 className="w3-text-red w3-center">Installing Apache, PHP and MySQL</h2>

        <hr className="ca-hr" />

        <h3>Command Line</h3>
        <p>Not that you have an instance running we need to configure it as a web server. Most of this will be done through the command line so click on <strong>Compute Engine</strong> and open up the SSH tool in a browser window:</p>
        <img src={ssh} width="400" alt="" />
        <p>We need to run all of the commands as the <code>root</code> user so we will need to prefix most command with <code>sudo</code>. Some of the commands will ask for confirmation [y/n], enter <strong>y</strong> and press enter.</p>
        <img src={sshCommendLine} width="300" alt="" /> 

        <hr className="ca-hr" />        
        
        <h3>Install Apache</h3>
        <code>
          sudo apt-get install apt-utils
          <br />
          sudo apt-get install apache2 apache2-utils
          <br />
          sudo service apache2 restart
        </code>
        <p>At this point your server should be delivering web pages. Visit your external IP address in a browser <code>http://999.999.999.999</code> to view the default Apache page.</p>

        <hr className="ca-hr" />
        
        <h3>Install PHP</h3>
        <p>Install PHP and all required libraries:</p>
        <code>
          sudo apt-get install php
          <br />
          sudo apt-get install php-dev php-gd php-pear php-curl
          <br />
          sudo apt-get install php-xmlrpc php-xsl 
          <br />
          sudo apt-get install libapache2-mod-php
          <br />
          sudo service apache2 restart
        </code>
        <p>Run the update command:</p>
        <code>
          sudo apt-get update
        </code>
        
        <hr className="ca-hr" />
        
        <h3>Install MySQL</h3>
        <code>
          sudo apt-get install mysql-server
          <br />
          sudo apt-get install php-mysql mysql-client
        </code>
        <p>Note: Set MySQL root password to something you will remember</p>
        <p>Run the update command again:</p>
        <code>
          sudo apt-get update
        </code>
        
        <hr className="ca-hr" />
        
        <h3>Install Webmin</h3>
        <p><Link to="/server-setup/webmin-firewall">Install Webmin</Link> and then return to this tutorial.</p>

        <hr className="ca-hr" />
        
        <h3>Configure an Apache Virtual Server</h3>
        <p>Choose a subdomain to do your development with (something.domain.com). Log in to your domain registrar, create an A 
          record for your subdomain, and point it to your Compute Instance public IP address. These steps will be different for each 
          registrar.</p>
        <p>Return to Webmin and follow these steps:</p>
        <ol>
          <li><p>Click <strong>Servers</strong> and then <strong>Apache Webservers</strong>.</p></li>
          <li>
            <p>Click <strong>Create Virtual Host</strong> and use the following settings:</p>
            <ul>
              <li>Port: 80</li>
              <li>Document Root: /var/www/something.domain.com</li>
              <li>Server Name: something.domain.com</li>
            </ul>
          </li>
          <li>
            <p>Click <strong>Create Now</strong>.</p>
          </li>
          <li>
            <p>Click on the <strong>Virtual Server</strong> link for the new server.</p>
          </li>
          <li>
            <p>Add <code>AllowOverride All</code> right before the <code>&lt;/Directory&gt;</code> and click <strong>Save</strong>.</p>
            <img src={apacheDirectives} width="300" alt="" />
          </li>
          <li><p>Click on <strong>Apply Changes</strong> (top right).</p></li>
          <li><p>Click <strong>Others</strong> and <strong>File Manager</strong>, navigate to <code>/var/www/something.domain.com</code> and create an index.html file with some testing text in the file.</p></li>
        </ol>
        <p>Visit your subdomain in a browser and you should see your index file.</p>
        
        <hr className="ca-hr" />

      </div>
    );
  }
}

export default Lamp;