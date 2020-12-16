import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextLecture from "./TextLecture";
import VideoLecture from "./VideoLecture";

const LectureType = {
  Text: 1,
  Video: 2,
};

export default class Lecture extends Component {
  constructor() {
    super();
    this.state = {
      lessonInfo: {},
      lectureType: LectureType.Text,
    };
    this.handleClickVideo = this.handleClickVideo.bind(this);
    this.handleClickText = this.handleClickText.bind(this);
  }

  handleClickVideo() {
    this.setState((state) => ({
      lectureType: LectureType.Video,
    }));
  }

  handleClickText() {
    this.setState((state) => ({
      lectureType: LectureType.Text,
    }));
  }
  componentDidMount() {
    fetch("http://85.208.208.156:5000/api/module_entry?ModuleEntryId=3")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          lessonInfo: data,
        });
      });
  }
  videoContent() {
    return <VideoLecture />;
  }

  textContent() {
    return <TextLecture />;
  }
  render() {
    const lectureType = this.state.lectureType;
    let content;
    if (lectureType === LectureType.Text) {
      content = this.textContent();
    } else {
      content = this.videoContent();
    }
    return (
      <div className='container'>
        <section className='info-card frame'>
          <h1 className='article'> {this.state.lessonInfo.name} </h1>{" "}
          <p className='article'>{this.state.lessonInfo.description}</p>{" "}
        </section>{" "}
        <article className='lesson frame'>
          <header>
            <Link to='/' style={{ textDecoration: "none", background: "none" }}>
              <button className='btn-text-icon'>
                <div className='btn-icon course'> </div>К курсу
              </button>
            </Link>
            <ul className='lesson-type'>
              <li>
                <button onClick={this.handleClickVideo}>
                  <div
                    className={`btn-icon video-lesson ${
                      lectureType === LectureType.Video ? "active" : ""
                    }`}>
                    {" "}
                  </div>
                </button>
              </li>
              <li>
                <button onClick={this.handleClickText}>
                  <div
                    className={`btn-icon text-lesson ${
                      lectureType === LectureType.Text ? "active" : ""
                    }`}>
                    {" "}
                  </div>
                </button>
              </li>
            </ul>
          </header>{" "}
          {content}
        </article>{" "}
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
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className='frame info-card additional-info'>
          <h1 className='article'> Дополнительная информация </h1>{" "}
          <p className='UI'>{this.state.lessonInfo.additionalInfo}</p>
        </div>{" "}
      </div>
    );
  }
}
