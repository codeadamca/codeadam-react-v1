import React from "react";

function FooterSocial(props) {

  const content = props.links.map((link) =>
    <a href={link.url} className="ca-font-none">
        <img src={link.image} className="ca-image-small ca-margin-small" />
    </a>
  );

  return (
    <div className="FooterSocial">
    
      <article className="ca-container-600 w3-center">
        {content}
      </article>

    </div>
  );
  
}

export default FooterSocial;
