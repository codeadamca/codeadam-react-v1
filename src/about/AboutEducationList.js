import React from "react";

import AboutEducationCreditList from './AboutEducationCreditList';

function AboutEducationList(props) {

  const content = props.educations.map((education) =>
    <article className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical">
      <img src={education.image} className="w3-image" />
      <AboutEducationCreditList credits={education.credits}></AboutEducationCreditList>
    </article>
  );

  return (
    <div className="AboutEducationList">
      
        {content}

        <hr className="ca-hr" />

    </div>
  );
  
}

export default AboutEducationList;
