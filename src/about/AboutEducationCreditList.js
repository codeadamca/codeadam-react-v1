import React from "react";

import Date from './../components/Date';

function AboutEducationCreditList(props) {

  const content = props.credits.map((credit, index) =>
    <div key={index}>
      <h3>{credit.title}</h3>
      <p className="ca-font-small-fixed">
        Description: <span dangerouslySetInnerHTML={{__html: credit.description}}></span>
        <br />
        Date: <Date date={credit.published_at} />
      </p>
    </div>
  );

  return (
    <div className="AboutEducationCreditList">
      
        {content}

    </div>
  );
  
}

export default AboutEducationCreditList;
