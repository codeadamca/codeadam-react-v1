import React,{Component} from "react";

import TopicList from './TopicList';

class LearningHeader extends Component {

  topicList(topics) {
    return (
      <>
        {topics.map((topic) => <img src={topic.image} width="60" alt="" />)}
      </>
    )
  }

  render() {
    return (
      <div className="LearningHeader">

        <header className="ca-border-bottom-gray">

          <div className="ca-third">
            
            <div className="ca-third-background" style={{backgroundImage:"url(" + this.props.banner + ")"}}></div>

            <div className="ca-third-content w3-cell-row">

              <div className="w3-cell w3-cell-middle w3-container w3-center">
                <div class={"w3-text-" + (this.props.background === "Light" ? "black" : "white")}>
                  
                  <h1>{this.props.title}</h1>
                  <TopicList topics={this.props.topics} />                  
                
                </div>
                
              </div>

            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default LearningHeader;