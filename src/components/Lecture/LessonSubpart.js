import React from "react";
import LessonImg from "./LessonImg";
import LessonSubpartText from "./LessonSubpartText";
import LessonSubpartVideo from "./LessonSubpartVideo";

export default function LessonSubpart({ type, content }) {
  var component;
  if (type === "Video") {
    component = <LessonSubpartVideo content={content} />;
  } else if (type === "Text") {
    component = <LessonSubpartText content={content} />;
  } else if (type === "Image") {
    component = <LessonImg content={content} />;
  }
  return <div className='lesson-subpart'>{component}</div>;
}
