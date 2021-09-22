import React,{Component} from "react";
import {Link} from 'react-router-dom';

import logoPhp from './images/logo-php.png';
import logoMysql from './images/logo-mysql.png';
import logoGit from './images/logo-git.png';
import logoComposer from './images/logo-composer.png';
import logoWebmin from './images/logo-webmin.png';
import logoApache from './images/logo-apache.png';

import logoNginx from './images/logo-nginx.png';
import logoNodejs from './images/logo-nodejs.png';
import logoNpm from './images/logo-npm.png';
import logoPm2 from './images/logo-pm2.png';

import logoCodeanywhere from './images/logo-codeanywhere.png';
import logoGoogleCloud from './images/logo-google-cloud.png';

class ServerHome extends Component {
  render() {
    return (
      <div className="ServerHome">

        <h2 className="w3-text-red w3-center">LAMP using the Google Cloud</h2>

        <p>
        Ths following steps will walk you through setting up a LAMP stack using the Google Cloud Computer Engine.
        </p>  
    
        <ul>
          <li>
            <Link to="/server-setup/apache-php-mysql">
              Installing Apache, PHP and MySQL
            </Link>
          </li>
          <li>
            <Link to="/server-setup/webmin-firewall">
              Installing Webmin and Adjust Firewall
            </Link>
          </li>
          <li>
            <Link to="/server-setup/phpmyadmin">
              Install PHPMyAdmin
            </Link>
          </li>
          <li>
            <Link to="/server-setup/git">
              Install Git
            </Link>
          </li>
          <li>
            <Link to="/server-setup/composer">
              Setting up Composer
            </Link>
          </li>
        </ul>
    
        <div className="w3-center">
          <a href="http://www.php.net/"><img src={logoPhp} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://www.mysql.com/"><img src={logoMysql} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://git-scm.com/"><img src={logoGit} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://getcomposer.org/"><img src={logoComposer} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="http://www.webmin.com/"><img src={logoWebmin} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="http://httpd.apache.org/"><img src={logoApache} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
        </div>

        <hr className="ca-hr" />

        <h2 className="w3-text-red w3-center">Node.js using the Google Cloud</h2>

        <p>
          Ths following steps will walk you through setting up a basic Node.js server using the Google Cloud Computer Engine.
        </p>
    
        <ul>
          <li>
            <Link to="/server-setup/nginx">
              Installing Nginx
            </Link>
          </li>
          <li>
            <Link to="/server-setup/ssl">
              Installing an SSL
            </Link>
          </li>
          <li>
            <Link to="/server-setup/nodejs">
              Installing Node.js
            </Link>
          </li>
          <li>
            <Link to="/server-setup/pm2">
              Installing and Configuring PM2
            </Link>
          </li>
        </ul>

        <div className="w3-center">
          <a href="https://nodejs.org/en/"><img src={logoNodejs} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://www.nginx.com/"><img src={logoNginx} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="http://pm2.keymetrics.io/"><img src={logoPm2} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://www.npmjs.com/"><img src={logoNpm} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
        </div>
        
        <hr className="ca-hr" />
        
        <h2 className="w3-text-red w3-center">Shared Instructions</h2>

        <p>
          The following tutorials are used by both sets of instructions above. 
        </p>
        
        <ul>
          <li>
            <Link to="/server-setup/shared-compute-instance">
              Setting up a Google Cloud Compute Instance
            </Link>
          </li>
          <li>
            <Link to="/server-setup/shared-ide">
              Setting up Codeanywhere
            </Link>
          </li>
        </ul>

        <div className="w3-center">
          <a href="https://cloud.google.com/"><img src={logoGoogleCloud} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
          <a href="https://codeanywhere.com/"><img src={logoCodeanywhere} alt="" className="ca-image-small ca-margin-small-horizontal" /></a>
        </div>
        
        <hr className="ca-hr" />

      </div>
    );
  }
}

export default ServerHome;