import React from "react";

function PhotoList(props) {

  const content = props.photos.map((photos) =>
    <div className="w3-col s4">
      <img src={photos.image} className="w3-image" />
    </div>
  );

  return (
    <div className="PhotoList">
      
      <article className="ca-container-600 w3-center w3-row">
        {content}
      </article>

      <hr className="ca-hr" />

    </div>
  );
  
}

export default PhotoList;
