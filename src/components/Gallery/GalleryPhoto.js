import React from "react";

function GalleryPhoto(props) {
  return (
    <div className='wrapper'>
      <img id={props.id} src={props.imgUrl} alt='gallery' onClick={props.onClick} />
    </div>
  );
}

export default GalleryPhoto;
