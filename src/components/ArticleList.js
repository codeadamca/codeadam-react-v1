import React from "react";

import ArticleListResources from './ArticleListResources';

function ArticleList(props) {

  const content = props.articles.map((article) =>
    <article className="w3-text-dark-gray ca-container-600">
      <h2 className="w3-text-red w3-center">{article.title}</h2>
      <img src={article.image} className="w3-image w3-center" />
      <div dangerouslySetInnerHTML={{__html: article.content}} />
      <div className="ca-font-small-fixed">
        <ArticleListResources resources={article.resources}></ArticleListResources>
        Date: {article.date}
      </div>
    </article>
  );

  return (
    <div className="ArticleList">
      
        {content}

        <hr className="ca-hr" />

    </div>
  );
  
}

export default ArticleList;
