import React from "react";

import AboutEducationCreditList from './AboutEducationCreditList';

function AboutEducationList(props) {

  const content = props.educations.map((education, index) =>
    <article className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical" key={index}>
      <img src={education.image} className="w3-image" alt={education.name + " Logo"} />
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
