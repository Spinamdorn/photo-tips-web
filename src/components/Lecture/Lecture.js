import React, { Component } from "react";
import { Link } from "react-router-dom";

import LectureTitle from "./LectureTitle";
import LectureContentHeader from "./LectureContentHeader";
import LectureContentFooter from "./LectureContentFooter";
import LectureAdditional from "./LectureAdditional";
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

  handleClickContentType(contentType) {
    contentType = contentType.split("-")[0];
    if (contentType === "video") {
      this.handleClickVideo();
    } else if (contentType === "text") {
      this.handleClickText();
    }
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
    fetch("http://85.208.208.156:5000/api/module_entry?ModuleEntryId=1")
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
    let additionalInfo = this.state.lessonInfo.additionalInfo;
    let content;
    if (lectureType === LectureType.Text) {
      content = this.textContent();
    } else {
      content = this.videoContent();
    }
    return (
      <div className='container'>
        <LectureTitle value={this.state.lessonInfo} />
        <article className='lesson frame'>
          <LectureContentHeader
            value={lectureType}
            onClick={(i) => this.handleClickContentType(i)}
          />
          {content}
        </article>{" "}
        <LectureContentFooter />
        {additionalInfo ? <LectureAdditional additionalInfo={additionalInfo} /> : ""}
      </div>
    );
  }
}
