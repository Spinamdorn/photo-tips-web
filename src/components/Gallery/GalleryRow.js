import React from "react";
import GalleryPhoto from "./GalleryPhoto";

function GalleryRow(props) {
  var startIndex = props.size * props.rowNumber;

  var photosComponents = props.photos
    .slice(0 + startIndex, props.size + startIndex)
    .map((subpart) => {
      return (
        <GalleryPhoto
          key={subpart.id}
          id={subpart.id}
          imgUrl={subpart.thumbnailUrl}
          onClick={() => props.onClick(subpart)}
        />
      );
    });
  return <div className='row'>{photosComponents}</div>;
}

export default GalleryRow;
