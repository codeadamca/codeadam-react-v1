import React from "react";

function NavSocial(props) {

  const content = props.links.map((link) =>
    <img src={link.image} className="ca-image-icon ca-margin-small" />
  );

  return (
    <div className="NavSocial">
      {content}
    </div>
  );
  
}

export default NavSocial;
