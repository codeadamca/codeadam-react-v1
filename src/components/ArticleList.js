import React from "react";

import ArticleResourceList from './ArticleResourceList';
import Instagram from './Instagram';
import SoundCloud from './SoundCloud';
import Twitter from './Twitter';

function ArticleList(props) {

  const content = props.articles.map((article) =>
    <>
      <article className="w3-text-dark-gray ca-container-600">
        <h2 className="w3-text-red w3-center">{article.title}</h2>
        {
          article.url 
          ? <a href={article.url}><img src={article.image} className="w3-image w3-center" /></a>
          : <img src={article.image} className="w3-image w3-center" />
        }
        {
          article.instagram_id
          ? <Instagram id={article.instagram_id}></Instagram>
          : null
        }
        {
          article.twitter_id
          ? <Twitter id={article.twitter_id}></Twitter>
          : null
        }
        {
          article.soundcloud_id
          ? <SoundCloud id={article.soundcloud_id}></SoundCloud>
          : null
        }
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
