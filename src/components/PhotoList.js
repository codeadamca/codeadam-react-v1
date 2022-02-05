import React from "react";

function PhotoList(props) {

  const content = props.photos.map((photos, index) =>
    <div className="w3-col s4" key={index}>
      <img src={photos.image} className="w3-image" alt="" />
    </div>
  );

  return (
    <div className="PhotoList">

      <hr className="ca-hr" />
      
      <article className="ca-container-800 w3-center w3-row">
        {content}
      </article>

      

    </div>
  );
  
}

export default PhotoList;
