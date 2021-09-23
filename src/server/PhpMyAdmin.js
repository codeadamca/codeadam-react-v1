import React,{Component} from "react";

import logoPhpMyAdmin from './images/logo-phpmyadmin.png';

class PhpMyAdmin extends Component {
  render() {
    return (
      <div className="PhpMyAdmin">
      
        <h2 class="w3-text-red w3-center">Install phpMyAdmin</h2>
        <p>To install PHPMyAdmin open up the Google Cloud SSH tool and run the following commands:</p>
        <a href="https://www.phpmyadmin.net/">
          <img src={logoPhpMyAdmin} className="ca-image-medium" alt="" />
        </a>

        <ol>
          <li>
            <p>Install phpMyAdmin</p>
            <code>sudo apt-get install phpmyadmin</code>
            <p>Note: Keep the defaults for the first two questions and use your MySQL root password.</p>
          </li>
          <li>
            <p>Configure PHPMyAdmin</p>
            <code>
              sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
              <br />
              sudo a2enconf phpmyadmin
            </code>
          </li>
          <li>
            <p>Restart Apache:</p>
            <code>sudo service apache2 restart</code>
          </li>
          <li>
            <p>
              Visit the URL:
              <br />
              <code>http://something.domain.com/phpmyadmin</code>
              <br />
              Use the root MySQL username and password to log in. 
            </p>
          </li>
        </ol>        
        
        <hr className="ca-hr" />
        
      </div>
    );
  }
}

export default PhpMyAdmin;