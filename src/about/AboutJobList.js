import React from "react";

function AboutJobList(props) {

  const content = props.jobs.map((job, index) =>
    <article className="w3-text-dark-gray ca-container-800 ca-margin-medium-vertical" key={index}>
      <img src={job.image} className="w3-image" alt="" />
      <p dangerouslySetInnerHTML={{__html: job.description}}></p>
      <div className="ca-font-small-fixed">
        Institution: <a href="job.url">{job.name}</a>
        <br />
        Date: {job.duration}
      </div>
    </article>
  );

  return (
    <div className="AboutJobList">

      <hr className="ca-hr" />

      <h2 className="w3-text-red w3-center">Industry Experience</h2>

      {content}

    </div>
  );
  
}

export default AboutJobList;
