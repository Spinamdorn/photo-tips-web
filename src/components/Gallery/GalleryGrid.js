import React from "react";
import GalleryRow from "./GalleryRow";
function GalleryGrid({ source, rowNumbers, setCurrentImg }) {
  const size = 5;
  var rowsComponents = rowNumbers.map((i) => {
    return (
      <GalleryRow
        key={i}
        rowNumber={i}
        size={size}
        photos={source}
        onClick={(x) => setCurrentImg(x)}
      />
    );
  });
  return <div>{rowsComponents}</div>;
}

export default GalleryGrid;
