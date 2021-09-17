import React,{Component} from "react";

import logoComposer from './images/logo-composer.png';
import composerInstalled from './images/composer-installed.png';

class Composer extends Component {
  render() {
    return (
      <div className="Composer">
          
        <h2 class="w3-center w3-text-red">Setting Up Composer</h2>

        <hr className="ca-hr" />

        <h3>Install Composer</h3>
        <p><a href="https://getcomposer.org/">Composer</a> is a dependency manager for PHP. Composer will help us work as a group together and ensure everyone has the same libraries for both server-side and client-side code.</p>
        <img src={logoComposer} alt="" className="ca-image-medium" />
        <p>Open your SSH tool from the Google Cloud admin (not Codeanywhere):</p>
        <ol>
          <li>
            <p>Run any updates your system may need</p>
            <code>
              sudo apt-get update
            </code>
          </li>
          <li>
            <p>Ensure all required packages are installed</p>
            <code>
              sudo apt-get install curl php-cli
            </code>
          </li>
          <li>
            <p>Download and intalls Composer:</p>
            <code>
              sudo curl -s https://getcomposer.org/installer | php
              <br />
              sudo mv composer.phar /usr/local/bin/composer
            </code>
          </li>
          <li>
            <p>Confirm composer is installed</p>
            <code>
              composer
            </code>
          </li>
        </ol>

        <img src={composerInstalled} alt="" width="300" />
    
        <hr class="ca-hr" />

        <h3>Add the Vendor Folder to .gitignore</h3>
        <p>Composer will install PHP libraries to the <code>vendor</code> folder. We want to exclude the vendor folder from the GitHub repository:</p>
        <ol>
          <li>
            <p>In Codeanywhere open your .gitignore file (crate one if needed) and add</p>
            <code>
              /vendor
            </code>
          </li>
          <li><p>Open up the SSH tool using Codeanywhere</p></li>
          <li><p>Navigate to your project directory</p></li>
          <li>
            <p>Commit the changes and push to the repository:</p>
            <code>
              git add -A
              <br />
              git / commit -am "Added .gitignore"
              <br />
              git push origin master
            </code>
          </li>
          <li>
            <p>If you do a pull with a new .gitignore, yo uwill need to clear the cache:</p>
            <code>
              git rm -r --cached .
              <br />
              git add .
            </code>
          </li>
        </ol>

        <hr class="ca-hr" />
      
        <h3>Add Our First Library</h3>
        <p>Now that Composer is installed let's add our first library. The only library that we have confirmed using at this point is jQuery, so let’s add that to our dependencies.</p>
        <ol>
          <li><p>Open up the SSH tool using Codeanywhere</p></li>
          <li><p>Navigate to your project directory</p></li>
          <li>
            <p>Create a Composer JSON file</p>
            <code>
              touch composer.json
            </code>
          </li>
          <li><p>Open the composer.json file using Codeanywhere</p></li>
          <li>
            <p>Add jQuery to the list of Required libraries</p>
            <code>
              &#123;
              <br />
              &nbsp; "require": &#123;
              <br />
              &nbsp; &nbsp; "components/jquery": "3.*"
              <br />
              &nbsp; &#125;
              <br />
              &#125;
            </code>
          </li>
          <li>
            <p>Run composer to include all required libraries:</p>
            <code>
              composer update
            </code>
          </li>
        </ol>

        <hr class="ca-hr" />
        
      </div>
    );
  }
}

export default Composer;