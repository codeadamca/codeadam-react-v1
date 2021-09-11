import React from "react";

function AboutEducationListCredits(props) {

  const bar = String.fromCodePoint(0x00A9);
  const content = props.credits.map((credit, index) =>
    <>
      <h3>{credit.title}</h3>
      <p class="ca-font-small-fixed">
        Description: <span dangerouslySetInnerHTML={{__html: credit.description}}></span>
        <br />
        Date: {credit.date}
      </p>
    </>
  );

  return (
    <div className="AboutEducationListCredits">
      
        {content}

    </div>
  );
  
}

export default AboutEducationListCredits;
