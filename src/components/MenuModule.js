import React, { Component } from "react";
import MenuModuleLesson from "./MenuModuleLesson";

const ModuleStatus = {
  notStarted: 1,
  inProgress: 2,
  finish: 3,
};

export default class MenuModule extends Component {
  constructor() {
    super();
    this.state = {
      moduleName: "Модуль N",
      moduleDescription: "Описание буквально в несколько слов",
      moduleStatus: ModuleStatus.notStarted,
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //   componentDidMount() {
  //     this.setState({
  //       moduleName: "Модуль N",
  //       moduleDescription: "Описание буквально в несколько слов",
  //     });
  //   }

  handleClick() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }
  render() {
    const isOpen = this.state.isOpen;
    const moduleStatus = this.state.moduleStatus;
    const moduleName = this.state.moduleName;
    const moduleDescription = this.state.moduleDescription;
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
              <h2 className='UI'>{moduleName}</h2>
              <p className='UI'>{moduleDescription}</p>
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
                <p className='lesson-name UI priority-2'>3 урока</p>
              </li>
            </ul>
            <button id='module-2' className='icon open' onClick={this.handleClick}></button>
          </div>
        </div>
        <div className='full-description'>
          <ul>
            <li>
              <MenuModuleLesson key='0' />
            </li>
            <li>
              <MenuModuleLesson key='1' />
            </li>
            <li>
              <MenuModuleLesson key='2' />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
