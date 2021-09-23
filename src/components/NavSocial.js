import React from "react";

function NavSocial(props) {

  const content = props.links.map((link, index) =>
    <a href={link.url} key={index}>
      <img src={link.image} className="ca-image-icon ca-margin-small-horizontal" alt="" />
    </a>
  );

  return (
    <div className="NavSocial">
      {content}
    </div>
  );
  
}

export default NavSocial;
