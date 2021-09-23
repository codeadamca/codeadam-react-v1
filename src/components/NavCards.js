import React from "react";

function NavCards(props) {

  const content = props.links.map((link, index) =>
    <div className="w3-cell" key={index}>
      <i className={link.icon + " fa-3x w3-text-gray w3-padding-16"} aria-hidden="true"></i>
      <br />
      <a href={link.href} className="ca-font-small-fixed">
        {link.name}
      </a>
    </div>
  );

  return (
    <div className="NavCards">

      <div className="ca-container-600 w3-center">
        <h2 className="w3-text-red">{props.title}</h2>
        <div className="w3-cell-row">

          {content}

        </div>
      </div>

      <hr className="ca-hr" />

    </div>
  );
  
}

export default NavCards;
