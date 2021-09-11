import React from "react";

function PhotoList(props) {

  const content = props.photos.map((photos) =>
    <div class="w3-col s4">
      <img src={photos.image} class="w3-image" />
    </div>
  );

  return (
    <div className="PhotoList">
      
      <div class="w3-row">
        {content}
      </div>

      <hr className="ca-hr" />

    </div>
  );
  
}

export default PhotoList;
