import React from "react";

function ToolsCategoryToolList(props) {

  const content = props.tools.map((tool) =>
    <div className="w3-half w3-center ca-margin-small-vertical">
      <a href={tool.url}>
        <img src={tool.image} className="w3-image" alt="" />
      </a>
      <h3 className="ca-no-bottom-margin">{tool.name}</h3>
      <a href={tool.url}>{tool.domain}</a>
    </div>
  );

  return (
    <div className="ToolsCategoryLinkList">
      
      <div className="w3-container">
        {content}
      </div>

    </div>
  );
  
}

export default ToolsCategoryToolList;
