import React from "react";

function Topics(props) {

  const content = props.topics.map((topic, index) =>
    <a href={topic.url} key={index}>
      <img src={topic.image} className="w3-image ca-image-small ca-margin-small-vertical ca-margin-small-horizontal" alt="" />
    </a>
  );

  return (
    <div className="Topics w3-center">
      
        {content}

    </div>
  );
  
}

export default Topics;
