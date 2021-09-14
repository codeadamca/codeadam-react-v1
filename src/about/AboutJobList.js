import React from "react";

function AboutJobList(props) {

  const content = props.jobs.map((job) =>
    <article className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical">
      <img src={job.image} className="w3-image" />
      <p dangerouslySetInnerHTML={{__html: job.description}}></p>
      <div className="ca-font-small-fixed">
        Institution: <a href="job.url">{job.name}</a>
        <br />
        Date: {job.published_at}
      </div>
    </article>
  );

  return (
    <div className="AboutJobList">
      
        {content}

        <hr className="ca-hr" />

    </div>
  );
  
}

export default AboutJobList;
