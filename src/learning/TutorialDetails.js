import React from "react";

import topics from './topics.json';

function TutorialDetails(props) {

  const content = topics.map((topic, index) =>
    <>

      {
        topic.pages.map((page) =>
          <>
            {
              props.url === page.url 
                ?   
                  <>
                    {props.url} - {page.url}
                  </>
                : null
            }
          </>
        )
      }
    </>
  );

  return (
    <div className="LearningTopicPageList">
      
        {content}

    </div>
  );
  
}

export default TutorialDetails;
