import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

import articles from './articles.json';

class Technology extends Component {
  render() {
    return (
      <div className="Technology">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Technology in the Classroom"></Title>

        <article class="w3-text-dark-gray ca-container-600">

          <p>I believe that technology can be used to vastly improve student engagement and learning. However, technology should be never be used for technology sake.</p>
          <p>Below are a list of technologies I have successfully integrated into my classroom:</p>
          <hr class="ca-hr" />

        </article>

        <ArticleList articles={articles}></ArticleList>

      </div>
    );
  }
}

export default Technology;

