import React from "react";

export default function LessonImg(props) {
  return (
    <div style={{ display: props.value ? "block" : "none" }}>
      <div className='lesson-img'>
        <div className='lesson-img-container'>
          <img className='picture' src={props.value.imgUrl} alt='Example for the lesson' />
        </div>
        <div className='title'>
          <p className='article'>{props.value.imgTitle}</p>
        </div>
      </div>
    </div>
  );
}
