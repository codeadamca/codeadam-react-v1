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

        <article>
          <h2 className="w3-text-red w3-center">Learning Code, Teaching Code</h2>
          <p>In an attempt to pass things I have learned on to students and fellow developers (and sometimes to avoid learning the same thing twice), I have attempted to log my learning. Hopefully this list will grow as I continue to learn.</p>
        </article>

        <hr className="ca-hr" />

        <LearningTopicList topics={topics}></LearningTopicList>

      </div>
    );
  }
}

export default Learning;
