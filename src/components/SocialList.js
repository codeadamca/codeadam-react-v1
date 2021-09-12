import React from "react";

function SocialList(props) {

  const content = props.links.map((link, index) =>
    <>
      {(props.links.length > 8 && index % 6 == 0 && index > 0) ? <br /> : null}
      <a href={link.url} className="ca-font-none">
        <img src={link.image} className="ca-image-small ca-margin-small-horizontal ca-margin-small-vertical" />
      </a>
    </>
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
