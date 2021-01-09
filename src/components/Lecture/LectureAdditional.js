import React from "react";

function LectureAdditional(props) {
  return (
    <div className='frame info-card additional-info'>
      <h1 className='article'> Дополнительная информация </h1>{" "}
      <p className='UI'>{props.additionalInfo}</p>
    </div>
  );
}

export default LectureAdditional;
