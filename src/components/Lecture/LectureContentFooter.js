import React from "react";
import { Link } from "react-router-dom";

function LectureContentFooter() {
  return (
    <div className='nav-footer'>
      <ul>
        <li className='previous-lesson'>
          <Link to='/lecture'>
            <button className='btn-text-icon'>
              <div className='btn-icon'> </div>
              Предыдущий урок
            </button>
          </Link>
        </li>
        <li className='next-lesson'>
          <Link to='/lecture'>
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
