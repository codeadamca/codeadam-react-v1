import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

class Speaking extends Component {
  render() {
    return (
      <div className="Speaking">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Speaking Engagements"></Title>
        <ArticleList filter="type" value="1" social="yes"></ArticleList>

      </div>
    );
  }
}

export default Speaking;

