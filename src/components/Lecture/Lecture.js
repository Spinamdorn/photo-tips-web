import React, { useState, useEffect } from "react";
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

function Lecture() {
  const { lessonId } = useParams();
  const [lectureType, setLectureType] = useState(LectureType.Text);
  const [lesson, setLesson] = useState({});

  useEffect(() => {
    async function fetchLesson() {
      const response = await fetch(
        "https://phototips.xyz/api/module_entry?ModuleEntryId=" + lessonId
      );
      const json = await response.json();
      setLesson(json);
    }
    fetchLesson();
  }, [lessonId]);

  if (!lesson) {
    return (
      <div>
        <h1 className='UI'>Урок не найден</h1>
      </div>
    );
  }
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
          onClickText={() => setLectureType(LectureType.Text)}
          onClickVideo={() => setLectureType(LectureType.Video)}
        />
        {content}
      </article>{" "}
      <LectureContentFooter lessonId={lessonId} />
      {additionalInfo ? <LectureAdditional additionalInfo={additionalInfo} /> : ""}
    </div>
  );
}

export default Lecture;
