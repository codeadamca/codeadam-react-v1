import React from "react";

function SocialList(props) {

  const content = props.links.map((link, index) =>
    <a href={link.url} className="ca-font-none" key={index}>
      <img src={link.image} className="ca-image-small ca-margin-small-horizontal ca-margin-small-vertical" alt="" />
    </a>
  );

  return (
    <div className="SocialList">
    
      <article className="ca-container-600 w3-center">
        {content}
      </article>

      <hr className="ca-hr" />

    </div>
  );
  
}

export default SocialList;
