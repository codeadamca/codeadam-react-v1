import React from "react";

import Date from './../components/Date';

function AboutJobList(props) {

  const content = props.jobs.map((job, index) =>
    <article className="w3-text-dark-gray ca-container-800 ca-margin-medium-vertical" key={index}>
      <img src={job.image} className="w3-image" alt="" />
      <p dangerouslySetInnerHTML={{__html: job.description}}></p>
      <div className="ca-font-small-fixed">
        Institution: <a href="job.url">{job.name}</a>
        <br />
        Date: <Date date={job.published_at} />
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
