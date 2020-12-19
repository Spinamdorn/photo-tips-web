import React, { Component } from "react";
import { Link } from "react-router-dom";

const LessonStatus = {
  notStarted: 1,
  inProgress: 2,
  finish: 3,
};

export default class MenuModuleLesson extends Component {
  constructor() {
    super();
    this.state = {
      lessonName: {},
      lessonStatus: LessonStatus.notStarted,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      lessonStatus: LessonStatus.inProgress,
    }));
  }

  render() {
    const lessonStatus = this.state.lessonStatus;
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
        <Link to='/lecture' onClick={this.handleClick}>
          <p className={`element-number ${classStatus}`}>1.1</p>
          <p className='lesson-name UI priority-2'>Название первого урока</p>
          <p className='duration UI priority-2'>44 мин</p>
        </Link>
      </div>
    );
  }
}
