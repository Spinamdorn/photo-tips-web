import React, { Component } from "react";
import LessonSubpart from "./LessonSubpart";
import lectureData from "../data/lectureData";

const lessonComponents = lectureData.map((subpart) => {
  return <LessonSubpart key={subpart.id} text={subpart.text} img={subpart.img} />;
});
const rawText =
  "Николай Александрович Морозов написал три больших сочинения на стыке предметных областей истории культуры и естествознания:     «Откровение в грозе и буре» (1907), «Пророки» (1914) и 7-томный «Христос» (1924—1932), в которых попытался представить библейские    тексты как отражение реальных астрономических наблюдений раннесредневековых астрономов-христиан и сформулировал теорию тотальной    фальсификации человеческой истории («античность — это средневековье»), сильно повлиявшую на взгляды представителей «Новой хронологии».    Эти сочинения вызвали негативные рецензии профессиональных философов и историков: В.Эрна, Н. Никольского, А. Рановича, А. Мишулина.    «Откровение в грозе и буре», опубликованное в США в 1940—1941 годах в виде реферата, подверглось критике американского астронома    Николая Бобровникова.Интерес к «историологическим» воззрениям Н.А.Морозова был в 1970 - е годы возрождён математиком Московского    университета М. М. Постниковым и вслед за ним A. T. Фоменко и некоторыми их коллегами.";

export default class TextLecture extends Component {
  componentDidMount() {
    fetch("http://85.208.208.156:5000/api/module?ModuleId=1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className='container'>
        <section className='info-card frame'>
          <h1 className='article'> 1.1 Название урока </h1>{" "}
          <p className='article'>
            {" "}
            Краткое описание лекции, уже не в несколько слов, можно в пару предложений.{" "}
          </p>{" "}
        </section>{" "}
        <article className='lesson frame'>
          <header>
            <button className='btn-text-icon'>
              {" "}
              {/* <a href="table-of-contents.html" className="back"> */}{" "}
              <div className='btn-icon course'> </div>К курсу {/* </a> */}{" "}
            </button>{" "}
            <ul className='lesson-type'>
              <li>
                {" "}
                {/* <a href="video-lesson.html"> */} <div className='btn-icon video-lesson'> </div>{" "}
                {/* </a> */}{" "}
              </li>{" "}
              <li>
                {" "}
                {/* <a href="#"> */} <div className='btn-icon text-lesson active'> </div>{" "}
                {/* </a> */}{" "}
              </li>{" "}
            </ul>
          </header>{" "}
          <div className='lesson-material'>
            <div className='lesson-part'>
              <h1 className='article lesson'> Заголовок </h1>{" "}
              <div className='content'>
                <LessonSubpart
                  text={rawText}
                  img={{
                    imgUrl: "../images/lesson_1_1.png",
                    imgTitle: "Портрет Н. А. Морозова кисти И. Е. Репина, 1906",
                  }}
                />
              </div>{" "}
            </div>{" "}
            <div className='lesson-part'>
              <h1 className='article lesson'> Глава 1 </h1>{" "}
              <div className='content'>{lessonComponents}</div>{" "}
            </div>{" "}
          </div>{" "}
        </article>{" "}
        <div className='nav-footer'>
          <ul>
            <li className='previous-lesson'>
              <button className='btn-text-icon'>
                {" "}
                {/* <a href="#"> */} <div className='btn-icon'> </div>
                Предыдущий урок {/* </a> */}{" "}
              </button>{" "}
            </li>{" "}
            <li className='next-lesson'>
              <button className='btn-text-icon'>
                {" "}
                {/* <a href="#"> */}
                Следующий урок <div className='btn-icon'> </div> {/* </a> */}{" "}
              </button>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className='frame info-card additional-info'>
          <h1 className='article'> Дополнительная информация </h1>{" "}
          <ul>
            <li> Ссылки </li> <li> Примеры </li> <li> и т.п. </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    );
  }
}
