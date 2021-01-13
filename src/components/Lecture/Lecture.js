import React, { useState } from "react";
import { useParams } from "react-router-dom";

import LectureTitle from "./LectureTitle";
import LectureContentHeader from "./LectureContentHeader";
import LectureContentFooter from "./LectureContentFooter";
import LectureAdditional from "./LectureAdditional";
import TextLecture from "./TextLecture";
import VideoLecture from "./VideoLecture";
import "../../css/lesson.css";

const LectureType = {
  Text: 1,
  Video: 2,
};

async function loadLesson(lessonId) {
  var response = await fetch(
    "http://85.208.208.156:5000/api/module_entry?ModuleEntryId=" + lessonId,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

function Lecture() {
  const { lessonId } = useParams();
  const [lectureType, setLectureType] = useState(LectureType.Text);
  const [lesson, setLesson] = useState({});
  loadLesson(lessonId).then((data) => {
    setLesson(data);
  });

  if (!lesson) {
    return (
      <div>
        <h1 className='UI'>Урок не найден</h1>
      </div>
    );
  }

  // handleClickContentType(contentType) {
  //   contentType = contentType.split("-")[0];
  //   if (contentType === "video") {
  //     this.handleClickVideo();
  //   } else if (contentType === "text") {
  //     this.handleClickText();
  //   }
  // }

  // handleClickVideo() {
  //   this.setState((state) => ({
  //     lectureType: LectureType.Video,
  //   }));
  // }

  // handleClickText() {
  //   this.setState((state) => ({
  //     lectureType: LectureType.Text,
  //   }));
  // }

  // videoContent() {
  //   return <VideoLecture />;
  // }

  // textContent() {
  //   return <TextLecture />;
  // }

  let additionalInfo = lesson.additionalInfo;
  let content;
  if (lectureType === LectureType.Text) {
    content = <TextLecture content={lesson.textLecture} />;
  } else {
    content = <VideoLecture content={lesson.videoLecture} />;
  }
  return (
    <div className='container'>
      <LectureTitle value={lesson} />
      <article className='lesson frame'>
        <LectureContentHeader
          value={lectureType}
          // onClick={(i) => this.handleClickContentType(i)}
        />
        {content}
      </article>{" "}
      <LectureContentFooter />
      {additionalInfo ? <LectureAdditional additionalInfo={additionalInfo} /> : ""}
    </div>
  );
}

export default Lecture;
