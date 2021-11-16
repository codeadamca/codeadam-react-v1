import React from "react";

function TopicList(props) {

  const content = props.topics.map((topic, index) =>
    <a href={topic.url}>
      <img src={topic.image} className="w3-image ca-image-small w3-padding-small" alt="" />
    </a>
  );

  return (
    <div className="TopicList">
      
      {content}

    </div>
  );
  
}

export default TopicList;
