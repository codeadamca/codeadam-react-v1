import React from "react";

function TeachingTechnologyList(props) {

  const content = props.technologies.map((technology) =>
    <a href={technology.url}>
      <img src={technology.image} className="w3-image ca-image-small ca-margin-small-vertical ca-margin-small-horizontal" />
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
