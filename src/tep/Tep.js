import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

class Tep extends Component {
  render() {
    return (
      <div className="Tep">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="TEP Requirements"></Title>

        <article className="w3-text-dark-gray ca-container-800">

          <hr className="ca-hr" />
          <p>As part of the <a href="http://www.humber.ca/centreforteachingandlearning/professional-development/teaching-excellence-program/introduction.html">Teaching Excellence Program</a> at <a href="http://humber.ca">Humber College</a> we are required to complete a series of projects:</p>

        </article>

        <ArticleList filter="type" value="7" social="yes"></ArticleList>

      </div>
    );
  }
}

export default Tep;

