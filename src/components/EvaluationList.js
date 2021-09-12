import React from "react";

function EvaluationList(props) {

  const content = props.evaluations.map((evaluation) =>
    <blockquote>
      <i className="fas fa-quote-left" aria-hidden="true"></i>
      &nbsp;
      {evaluation.content}
      &nbsp;
      <i className="fas fa-quote-right" aria-hidden="true"></i>
    </blockquote>
  );

  return (
    <div className="EvaluationList">
      
      <article className="w3-text-dark-gray ca-container-600">

        <h2 className="w3-text-red">Evaluation of my Teaching</h2>
        <p>Student feedback is important to me. Here is some of my recent student feedback successes:</p>

        {content}

      </article>

      <hr className="ca-hr" />

    </div>
  );
  
}

export default EvaluationList;
