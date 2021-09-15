import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

import articles from './articles.json';

class Research extends Component {
  render() {
    return (
      <div className="Research">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Research and Publishings"></Title>
        <ArticleList articles={articles}></ArticleList>

      </div>
    );
  }
}

export default Research;

