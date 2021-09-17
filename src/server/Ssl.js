import React,{Component} from "react";

import logoLetsEncrypt from './images/logo-letsencrypt.svg';

class Ssl extends Component {
  render() {
    return (
      <div className="Ssl">
      
        <h2 className="w3-center w3-text-red">Installing an SSL</h2>
        <p>Let's Encrypt is a certificate authority that offers free SSL certificates through an automated process.</p>
        <a href="https://letsencrypt.org/">
          <img src={logoLetsEncrypt} alt="" className="ca-image-medium" />
        </a>
        <p>There are instructions on installing a Let's Encrypt SSL that can be followed in the Digital Ocean tutorials:</p>
        <p>
          <a href="https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04">
            https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
          </a>
        </p>

        <hr className="ca-hr" />
        
      </div>
    );
  }
}

export default Ssl;