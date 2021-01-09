import React from "react";

function LectureTitle(props) {
  return (
    <section className='info-card frame'>
      <h1 className='article'> {props.value.name} </h1>
      <p className='article'>{props.value.description}</p>
    </section>
  );
}

export default LectureTitle;
