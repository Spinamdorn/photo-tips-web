import React from "react";
import ReactPlayer from "react-player/file";

function LessonSubpartVideo({ content }) {
  var src = "http://85.208.208.156:5000/" + content;
  return (
    <div className='lesson-subpart video-container'>
      <ReactPlayer url={src} width='100%' height='100%' controls={true} />
      <div className='title'>
        <p className='article'>Лучшее видео в мире</p>
      </div>
    </div>
  );
}

export default LessonSubpartVideo;
