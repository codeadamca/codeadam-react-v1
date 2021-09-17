import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Nginx extends Component {
  render() {
    return (
      <div className="Nginx">
      
        <h2 class="w3-center w3-text-red">Installing Nginx</h2>

        <hr class="ca-hr" />

        <h3>Install Nginx</h3>

        <p>Open up the SSH tool in the Google Cloud and run the following commands:</p>
        <ol>
          <li>
            <p>Check for any updates:</p>
            <code>
              sudo apt-get update
            </code>
          </li>
          <li>
            <p>Install Nginx:</p>
            <code>
              sudo apt-get install nginx
            </code>
          </li>
          <li>
            <p>Adjust the Firewall to allow for HTTP and HTTPS traffic:</p>
            <code>
              sudo apt-get install ufw
              <br />
              sudo ufw allow 'Nginx HTTP'
            </code>
          </li>
          <li>
            <p>You can check to ensure everything is working by running the following command:</p>
            <code>
              systemctl status nginx
            </code>
            <p>Look for the work <strong>Active</strong> in the output.</p>
          </li>
        </ol>

        <hr className="ca-hr" />

        <h3>SSL, Node.js, and PM2</h3>

        <p>Install an <Link to="/server-setup/ssl">SSL</Link>, <Link to="/server-setup/nodejs">Node.js</Link>, and <Link to="/server-setup/pm2">PM2</Link>. THen return to this tutorial.</p>

        <hr className="ca-hr" />

        <h3>Configuring Nginx</h3>
        <p>We are going to Setup Nginx as a Proxy. Using the SSH command line from the Google Cloud let's configure Nginx:</p>
        <ol>
          <li>
            <p>Open up the Nginx configuration file:</p>
            <code>
              sudo nano /etc/nginx/sites-available/default
            </code>
          </li>
          <li>
            <p>Change the server name in the configuration file to:</p>
            <code>
              server_name something.domain.com;
            </code>
          </li>
          <li>
            <p>Change the location definition to redirect requests to our <code>index</code> NodeJS application:</p>
            <code>
              location / &#123;
              <br />
              &nbsp; proxy_pass http://localhost:8080;
              <br />
              &nbsp; proxy_http_version 1.1;
              <br />
              &nbsp; proxy_set_header Upgrade $http_upgrade;
              <br />
              &nbsp; proxy_set_header Connection 'upgrade';
              <br />
              &nbsp; proxy_set_header Host $host;
              <br />
              &nbsp; proxy_cache_bypass $http_upgrade;
              <br />
              &#125;
            </code>
          </li>
          <li>
            <p>And finally restart Nginx to apply changes:</p>
            <code>
              sudo systemctl restart nginx
            </code>
          </li>
        </ol>
        <p>Now if you visit your subdomain you will see the <strong>Hello World!</strong> message from the <code>index</code> NodeJS application.</p>

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default Nginx;