import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

import articles from './articles.json';

class Speaking extends Component {
  render() {
    return (
      <div className="Speaking">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Speaking Engagements"></Title>
        <ArticleList articles={articles}></ArticleList>

      </div>
    );
  }
}

export default Speaking;

