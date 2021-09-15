import React from "react";

function ToolsCategoryToolList(props) {

  const content = props.tools.map((tool) =>
    <div className="w3-half w3-center">
      <a href={tool.url}>
        <img src={tool.image} className="w3-image" />
      </a>
      <h3>{tool.name}</h3>
    </div>
  );

  return (
    <div className="ToolsCategoryLinkList">
      
      {content}

    </div>
  );
  
}

export default ToolsCategoryToolList;
