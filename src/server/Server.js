import React,{Component} from "react";
import {Switch} from 'react-router-dom';

import {Page} from './../extensions/Page';

import Title from './../components/Title';

import ServerHome from './ServerHome';

import Composer from './Composer';
import Git from './Git';
import Lamp from './Lamp';
import PhpMyAdmin from './PhpMyAdmin';
import Webmin from './Webmin';

import Nginx from './Nginx';
import Ssl from './Ssl';
import Nodejs from './Nodejs';
import Pm2 from './Pm2';

import GoogleCloud from './GoogleCloud';
import Codeanywhere from './Codeanywhere';

class Server extends Component {
    render() {
      return (
        <div className="Server ca-container-600">
  
          <div className="ca-nav-spacer w3-hide-small"></div>
  
          <Title title="Sever Setup"></Title>

          <Switch>

            <Page exact path="/server-setup" component={ServerHome}></Page>

            <Page path="/server-setup/apache-php-mysql" component={Lamp} title="Lamp"></Page>
            <Page path="/server-setup/webmin-firewall" component={Webmin} title="Webmin"></Page>
            <Page path="/server-setup/phpmyadmin" component={PhpMyAdmin} title="phpMyAdmin"></Page>
            <Page path="/server-setup/git" component={Git}></Page>
            <Page path="/server-setup/composer" component={Composer}></Page>

            <Page path="/server-setup/nginx" component={Nginx}></Page>
            <Page path="/server-setup/ssl" component={Ssl}></Page>
            <Page path="/server-setup/nodejs" component={Nodejs}></Page>
            <Page path="/server-setup/pm2" component={Pm2}></Page>

            <Page path="/server-setup/google-cloud" component={GoogleCloud}></Page>
            <Page path="/server-setup/codeanywhere-cloud" component={Codeanywhere}></Page>
            
          </Switch>
          
  
        </div>
      );
    }
  }
  
  export default Server;
