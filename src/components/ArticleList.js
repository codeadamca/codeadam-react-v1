import React from "react";

import ArticleResourceList from './ArticleResourceList';

function ArticleList(props) {

  const content = props.articles.map((article) =>
    <>
      <article className="w3-text-dark-gray ca-container-600">
        <h2 className="w3-text-red w3-center">{article.title}</h2>
        <img src={article.image} className="w3-image w3-center" />
        <p dangerouslySetInnerHTML={{__html: article.content}}></p>
        <div className="ca-font-small-fixed">
          <ArticleResourceList resources={article.resources}></ArticleResourceList>
          Date: {article.published_at}
        </div>
      </article>
      <hr className="ca-hr" />
    </>
  );

  return (
    <div className="ArticleList">
      
        {content}

    </div>
  );
  
}

export default ArticleList;
