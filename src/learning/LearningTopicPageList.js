import React from "react";

function LearningTopicPageList(props) {

  const content = props.pages.map((page) =>
    <tr>
      <td>
        <a href={"/learning/" + page.url} className="ca-font-tiny-fixed">
          {page.title}
        </a>
      </td>
      <td className="w3-center ca-nobr">
        {
          page.topics.map((topic, index) => 
            <img src={topic.image} className="w3-image ca-image-icon" alt="" />
          )
        }
      </td>
      <td className="w3-center ca-nobr">
        {
          page.tinkercadId 
          ? <i className="fas fa-th ca-margin-tiny-horizontal" aria-hidden="true"></i>
          : null
        }
        {
          page.arduinoId 
          ? <i className="fas fa-infinity ca-margin-tiny-horizontal" aria-hidden="true"></i>
          : null
        }
        {
          page.githubId 
          ? <i className="fab fa-github ca-margin-tiny-horizontal" aria-hidden="true"></i>
          : null
        }
        {
          page.youtubeId 
          ? <i className="fab fa-youtube ca-margin-tiny-horizontal" aria-hidden="true"></i>
          : null
        }
      </td>
    </tr>
  );

  return (
    <div className="LearningTopicPageList">
      
      <div className="w3-container">
        <table cellPadding="0" cellSpacing="0" border="0" className="w3-table w3-bordered ">
          <tbody>
            {content}
          </tbody>
        </table>
      </div>

    </div>
  );
  
}

export default LearningTopicPageList;
