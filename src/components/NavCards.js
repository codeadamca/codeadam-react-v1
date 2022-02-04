import React from "react";
import {Link} from 'react-router-dom';

function NavCards(props) {

  const content = props.links.map((link, index) =>
    <div className="w3-cell" key={index}>
      <i className={link.icon + " fa-3x w3-text-gray w3-padding-16"} aria-hidden="true"></i>
      <br />
      <Link to={link.href} className="ca-font-small-fixed">
        {link.name}
      </Link>
    </div>
  );

  return (
    <div className="NavCards">

      <hr className="ca-hr" />

      <div className="ca-container-600 w3-center">
        <h2 className="w3-text-red">{props.title}</h2>
        <div className="w3-cell-row">

          {content}

        </div>
      </div>

    </div>
  );
  
}

export default NavCards;
