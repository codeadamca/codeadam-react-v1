import React from "react";

function ArticleResourceList(props) {

  const content = props.resources.map((resource, index) =>
    <>
      {index > 0 ? ' | ' : null}
      <a href={resource.url}>{resource.name}</a>
    </>
  );

  return (
    <div className="ArticleResourceList">
      
        Resources: {' '}
        {content}

    </div>
  );
  
}

export default ArticleResourceList;
