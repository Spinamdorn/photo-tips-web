import React from "react";
import LessonSubpart from "./LessonSubpart";

export default function VideoLecture({ content }) {
  if (!content | (content.length === 0)) {
    return (
      <div>
        <h1 className='article lesson'>Видео материалы не найдены</h1>
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
        <h1 className='article lesson'> Видео-лекция </h1>
        <div className='content'>{lessonSubparts}</div>
      </div>
    </div>
  );
}
