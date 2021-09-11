import React from "react";

function NavSocial(props) {

  const content = props.links.map((link) =>
    <a href={link.url}>
      <img src={link.image} className="ca-image-icon ca-margin-small-horizontal" />
    </a>
  );

  return (
    <div className="NavSocial">
      {content}
    </div>
  );
  
}

export default NavSocial;
