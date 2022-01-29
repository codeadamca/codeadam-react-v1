import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

class Tinkering extends Component {
  render() {
    return (
      <div className="Tinkering">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Tinkering"></Title>
        <ArticleList filter="type" value="4" social="yes"></ArticleList>

      </div>
    );
  }
}

export default Tinkering;

