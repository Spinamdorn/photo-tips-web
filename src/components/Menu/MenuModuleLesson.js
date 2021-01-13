import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LessonStatus = {
  notStarted: 1,
  inProgress: 2,
  finish: 3,
};

function MenuModuleLesson(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     lessonName: {},
  //     lessonStatus: LessonStatus.notStarted,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   this.setState((state) => ({
  //     lessonStatus: LessonStatus.inProgress,
  //   }));
  // }
  const [lessonStatus, setLessonStatus] = useState(LessonStatus.notStarted);
  const lesson = props.lesson;
  if (!lesson) {
    return <div></div>;
  }
  let classStatus;
  if (lessonStatus === LessonStatus.notStarted) {
    classStatus = "";
  } else if (lessonStatus === LessonStatus.inProgress) {
    classStatus = "in-progress";
  } else {
    classStatus = "finish";
  }
  return (
    <div>
      <Link
        to={"/lecture/" + lesson.id}
        moduleEntryId={props.moduleNumber}
        onClick={() => setLessonStatus(LessonStatus.inProgress)}>
        <p className={`element-number ${classStatus}`}>
          {props.moduleNumber}.{lesson.indexNumber}
        </p>
        <p className='lesson-name UI priority-2'>{lesson.name}</p>
        <p className='duration UI priority-2'>{5 * lesson.indexNumber} мин</p>
      </Link>
    </div>
  );
}

export default MenuModuleLesson;
