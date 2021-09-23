import React,{Component} from "react";

import Title from './../components/Title';

import LearningTopicList from './LearningTopicList';

import topics from './topics.json';

class Learning extends Component {
  render() {
    return (
      <div className="Learning w3-container">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Learning Code"></Title>

        <LearningTopicList topics={topics}></LearningTopicList>

      </div>
    );
  }
}

export default Learning;
