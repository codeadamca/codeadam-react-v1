import React from "react";

function AboutEducationCreditList(props) {

  const bar = String.fromCodePoint(0x00A9);
  const content = props.credits.map((credit, index) =>
    <>
      <h3>{credit.title}</h3>
      <p className="ca-font-small-fixed">
        Description: <span dangerouslySetInnerHTML={{__html: credit.description}}></span>
        <br />
        Date: {credit.date}
      </p>
    </>
  );

  return (
    <div className="AboutEducationCreditList">
      
        {content}

    </div>
  );
  
}

export default AboutEducationCreditList;
