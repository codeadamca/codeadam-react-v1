import React,{Component} from "react";

import Title from '../components/Title';
import ArticleList from '../components/ArticleList';

class Industry extends Component {
  render() {
    return (
      <div className="Professional">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Industry Projects"></Title>
        <ArticleList filter="type" value="5" social="yes"></ArticleList>

      </div>
    );
  }
}

export default Industry;