import React,{Component} from "react";

import logoNodejs from './images/logo-nodejs.png';

class Nodejs extends Component {
  render() {
    return (
      <div className="Nodejs">

        <h2 className="w3-center w3-text-red">Installing Node.js</h2>

        <hr className="ca-hr" />
        
        <h3>Confirm that nano is Installed</h3>
        <code>
          which nano
        </code>
        <p>If the nano package is not installed, install it:</p>
        <code>
          sudo apt-get install nano
        </code>
        <h3>Installing Node.js</h3>
        <p>Install Node.js using the SSH command line.</p>
        <a href="https://nodejs.org/en/">
          <img src={logoNodejs} alt="" className="ca-image-medium" />
        </a>
        <p>Follow these commands:</p>
        <code>
          sudo apt-get install npm
          <br />
          sudo npm cache clean -f
          <br />
          sudo npm install -g n
          <br />
          sudo n stable
        </code>

        <hr className="ca-hr" />

        <h3>Create Node.js Application</h3>
        <p>Using Codeanywhere create a folder called <code>/var/www/apps</code>. This is were we will place our Node.js applications. We will use a folder for each application. Ceate another folder called <code>/var/www/apps/index</code>:</p>
        <p>Create a files called <code>app.js</code> in the <code>index</code> folder. Place this JavaScript in the new file:</p>
        <code>
          #!/usr/bin/env nodejs
          <br />
          var http = require('http');
          <br />
          http.createServer(function (req, res) &#123;
          <br />
          &nbsp; res.writeHead(200, &#123;Content-Type': 'text/plain'&#123;);
          <br />
          &nbsp; res.end('Hello World\n');
          <br />
          &#125;).listen(8080, 'localhost');
          <br />
          console.log('Server running at http://localhost:8080/');
        </code>

        <hr className="ca-hr" />

        <h3>Check File Permissions</h3>
        <p>Make sure that the permissions on the new Node.js file is set up properly:</p>
        <code>
          sudo chmod -R 776 /var/www
          <br />
          sudo chown -R www-data:www-data /var/www
        </code>

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default Nodejs;