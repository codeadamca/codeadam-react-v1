import React from "react";

import ToolsCategoryLinkList from './ToolsCategoryLinkList';

function ToolsCategoryList(props) {

  const content = props.categories.map((category, index) =>
    <>
      {
        index > 0
        ? <hr className="ca-hr" />
        : null
      }
      <article className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical">
        <h2 className="w3-text-red w3-center">{category.name}</h2>
        <ToolsCategoryLinkList tools={category.tools}></ToolsCategoryLinkList>
      </article>   ``   
    </>
  );

  return (
    <div className="ToolsCategoryList">
      
        {content}

        <hr className="ca-hr" />

    </div>
  );
  
}

export default ToolsCategoryList;
