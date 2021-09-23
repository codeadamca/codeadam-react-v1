import React from "react";

function ArticleResourceList(props) {

  const content = props.resources.map((resource, index) =>
    <span key={index}>
      {index > 0 ? ' | ' : null}
      <a href={resource.url}>{resource.name}</a>
    </span>
  );

  return (
    <div className="ArticleResourceList">
      
        Resources: {' '}
        {content}

    </div>
  );
  
}

export default ArticleResourceList;
