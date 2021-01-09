import React from "react";
import { Link } from "react-router-dom";

const LectureType = {
  Text: 1,
  Video: 2,
};

function LectureContentHeader(props) {
  return (
    <header>
      <Link to='/' style={{ textDecoration: "none", background: "none" }}>
        <button className='btn-text-icon'>
          <div className='btn-icon course'></div>К курсу
        </button>
      </Link>
      <ul className='lesson-type'>
        <li>
          <button id='video-lesson' onClick={(e) => props.onClick(e.target.id)}>
            <div
              id='video-lesson-1'
              className={`btn-icon video-lesson ${
                props.value === LectureType.Video ? "active" : ""
              }`}></div>
          </button>
        </li>
        <li>
          <button id='text-lesson' onClick={(e) => props.onClick(e.target.id)}>
            <div
              id='text-lesson-1'
              className={`btn-icon text-lesson ${
                props.value === LectureType.Text ? "active" : ""
              }`}></div>
          </button>
        </li>
      </ul>
    </header>
  );
}

export default LectureContentHeader;
