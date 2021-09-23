import React from "react";

function TeachingTechnologyList(props) {

  const content = props.technologies.map((technology, index) =>
    <a href={technology.url} key={index}>
      <img src={technology.image} className="w3-image ca-image-small ca-margin-small-vertical ca-margin-small-horizontal" alt="" />
    </a>
  );

  return (
    <div className="TeachingTechnologyList w3-center">
      
        {content}

        <hr className="ca-hr" />

    </div>
  );
  
}

export default TeachingTechnologyList;
