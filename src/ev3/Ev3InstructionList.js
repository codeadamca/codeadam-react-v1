import React from "react";
import {Link} from 'react-router-dom';

function Ev3InstructionList(props) {

  const content = props.instructions.map((instruction) =>
    <div className="w3-half w3-center ca-margin-small-vertical">
      {
        instruction.external
        ? <a href={instruction.url}>
            <img src={instruction.image} className="w3-image" alt="" />
          </a>
        : <Link to={instruction.url}>
            <img src={instruction.image} className="w3-image" alt="" />
          </Link>
      }        
      <h3 className="ca-no-bottom-margin">{instruction.name}</h3>
      {
        instruction.external
        ? <a href={instruction.url}>
            {instruction.text}
          </a>
        : <Link to={instruction.url}>
            {instruction.text}
          </Link>
      } 
    </div>
  );

  return (
    <div className="Ev3InstructionList w3-center">
      
      <div className="w3-container">
        {content}
      </div>

      <hr className="ca-hr ca-clear" />

    </div>
  );
  
}

export default Ev3InstructionList;