import React from "react";

export default function LessonImg({ content }) {
  if (!content) {
    return <div></div>;
  }
  var src = "https://phototips.xyz/" + content;
  return (
    <div>
      <div className='lesson-img'>
        <div className='lesson-img-container'>
          <img className='picture' src={src} alt='Example for the lesson' />
        </div>
        {/* <div className='title'>
          <p className='article'>{props.value.imgTitle}</p>
        </div> */}
      </div>
    </div>
  );
}
