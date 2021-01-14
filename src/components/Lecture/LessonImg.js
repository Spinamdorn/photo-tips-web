import React from "react";

export default function LessonImg({ content }) {
  if (!content) {
    return <div></div>;
  }
  var src = "http://85.208.208.156:5000/" + content;
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
