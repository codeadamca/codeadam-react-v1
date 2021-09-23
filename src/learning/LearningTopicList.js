import React from "react";

import LearningTopicPageList from './LearningTopicPageList';

function LearningTopicList(props) {

  const content = props.topics.map((topic, index) =>
    <>
      <article className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical">
        <div className="w3-center">
          <img src={topic.image} className="w3-image ca-image-medium" alt="" />
        </div>
        <LearningTopicPageList pages={topic.pages}></LearningTopicPageList>
      </article>
      <hr className="ca-hr" />
    </>
  );

  return (
    <div className="LearningTopicPageList">
      
        {content}

    </div>
  );
  
}

export default LearningTopicList;
