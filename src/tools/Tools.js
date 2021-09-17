import React,{Component} from "react";

import Title from './../components/Title';

import ToolsCategoryList from './ToolsCategoryList';

import categories from './categories.json';

class Tools extends Component {
  render() {
    return (
      <div className="Tools w3-container">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Classroom Tools"></Title>

        <ToolsCategoryList categories={categories}></ToolsCategoryList>

      </div>
    );
  }
}

export default Tools;
