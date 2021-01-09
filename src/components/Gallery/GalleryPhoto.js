import React from "react";

function GalleryPhoto(props) {
  return (
    <div>
      <img id={props.id} src={props.imgUrl} alt='' onClick={props.onClick} />
    </div>
  );
}

export default GalleryPhoto;
