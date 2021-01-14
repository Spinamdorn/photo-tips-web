import React from "react";
import LessonSubpart from "./LessonSubpart";

export default function TextLecture(props) {
  var content = props?.content;
  if (!content) {
    return (
      <div>
        <h1 className='UI'>Урок не найден</h1>
      </div>
    );
  }
  var lessonSubparts = content
    .sort((a, b) => a - b)
    .map((subpart) => {
      return <LessonSubpart key={subpart.id} type={subpart.type} content={subpart.content} />;
    });

  return (
    <div className='lesson-material'>
      <div className='lesson-part'>
        <h1 className='article lesson'> Текстовая лекция </h1>
        <div className='content'>{lessonSubparts}</div>
      </div>
    </div>
  );
}
