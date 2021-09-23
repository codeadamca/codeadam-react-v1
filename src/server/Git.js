import React,{Component} from "react";

class Git extends Component {
  render() {
    return (
      <div className="Git">
              
        <h2 class="w3-center w3-text-red">Install Git</h2>

        <p>Before we start setting up everything today let’s make sure everything is up to date. Open the Google Cloud SSH tool and run the following command:</p>
        <code>
          sudo apt-get update
        </code>
        <p>Next install Git:</p>
        <code>
          sudo apt-get install git
        </code>
        <p>That's it, you can now start using Git with the command line. You can use Git with the SSH tool in the Google Cloud, or with the SSH tool in Codeanywhere.</p>

        <hr class="ca-hr" />

      </div>
    );
  }
}

export default Git;