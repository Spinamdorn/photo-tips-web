import React from "react";

function LessonSubpartVideo({ content }) {
  var src = "http://85.208.208.156:5000/" + content;
  return (
    <div className='lesson-subpart video-container'>
      {src}
      <div className='title'>
        <p className='article'>Лучшее видео в мире</p>
      </div>
    </div>
  );
}

export default LessonSubpartVideo;
