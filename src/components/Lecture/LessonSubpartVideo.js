import React from "react";
import ReactPlayer from "react-player/file";

function LessonSubpartVideo({ content }) {
  var src = "https://phototips.xyz/" + content;
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
