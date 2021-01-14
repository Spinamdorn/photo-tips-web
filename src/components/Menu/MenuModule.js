import React, { useState } from "react";
import MenuModuleLesson from "./MenuModuleLesson";

const ModuleStatus = {
  notStarted: 1,
  inProgress: 2,
  finish: 3,
};

function MenuModule(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [moduleStatus, setModuleStatus] = useState(ModuleStatus.notStarted);
  const module = props.module;
  if (!module) {
    return <div></div>;
  }
  var countLessons = module.entries.length;
  const wordLesson = (countLessons) => {
    switch (countLessons % 10) {
      case 1:
        return "урок";
        break;
      case 2:
      case 3:
      case 4:
        return "урока";
        break;
      default:
        return "уроков";
        break;
    }
  };
  const lessonContent = module.entries.map((subpart) => {
    return (
      <li>
        <MenuModuleLesson
          key={module.indexNumber + "_" + subpart.id}
          lesson={subpart}
          moduleNumber={module.indexNumber}
        />
      </li>
    );
  });
  let classStatus;
  if (moduleStatus === ModuleStatus.notStarted) {
    classStatus = "not-started";
  } else if (moduleStatus === ModuleStatus.inProgress) {
    classStatus = "in-progress";
  } else {
    classStatus = "finish";
  }
  return (
    <div className={`module ${classStatus} ${isOpen ? "" : "close"}`}>
      <div className='description'>
        <div className='main-info'>
          <div className='icon module-status'></div>
          <div>
            <h2 className='UI'>{module.name}</h2>
            <p className='UI'>{module.description}</p>
          </div>
        </div>
        <div className='materials'>
          <ul>
            <li>
              <div className='icon homework'></div>
              <p className='lesson-name UI priority-2'>1 домашнее задание</p>
            </li>
            <li>
              <div className='icon lessons'></div>
              <p className='lesson-name UI priority-2'>
                {countLessons} {wordLesson(countLessons)}
              </p>
            </li>
          </ul>
          <button id='module-2' className='icon open' onClick={() => setIsOpen(!isOpen)}></button>
        </div>
      </div>
      <div className='full-description'>
        <ul>{lessonContent}</ul>
      </div>
    </div>
  );
}

export default MenuModule;
