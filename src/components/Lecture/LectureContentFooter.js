import React from "react";
import { Link } from "react-router-dom";

function LectureContentFooter({ lessonId }) {
  lessonId = parseInt(lessonId);
  var prevLesson = lessonId !== 1 ? lessonId - 1 : lessonId;
  var nextLesson = lessonId + 1;
  return (
    <div className='nav-footer'>
      <ul>
        <li className='previous-lesson'>
          <Link to={"/photo-tips-web/lecture/" + prevLesson}>
            <button className='btn-text-icon'>
              <div className='btn-icon'> </div>
              Предыдущий урок
            </button>
          </Link>
        </li>
        <li className='next-lesson'>
          <Link to={"/photo-tips-web/lecture/" + nextLesson}>
            <button className='btn-text-icon'>
              Следующий урок
              <div className='btn-icon'> </div>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LectureContentFooter;
