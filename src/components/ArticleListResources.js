import React from "react";

function ArticleListResources(props) {

  const bar = String.fromCodePoint(0x00A9);
  const content = props.resources.map((article, index) =>
    <>
      {index > 0 ? ' | ' : null}
      <a href={article.url}>{article.name}</a>
    </>
  );

  return (
    <div className="ArticleListResources">
      
        Resources: {' '}
        {content}

    </div>
  );
  
}

export default ArticleListResources;
