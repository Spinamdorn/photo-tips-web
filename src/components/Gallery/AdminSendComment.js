import React, { useState, useEffect } from "react";

function AdminSendComment({ img, isInput, updateComment }) {
  var idImg = img.id;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comment, setComment] = useState(img.comment);
  const [isValidComment, setIsValidComment] = useState(false);
  const [mark, setMark] = useState(img.mark);
  const [isValidMark, setIsValidMark] = useState(false);
  const [sendComment, setSendComment] = useState(false);
  const [isReadySubmit, setIsReadySubmit] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [sendCommentBody, setSendCommentBody] = useState({});
  useEffect(() => {
    setComment(img.comment);
    setMark(img.mark);
    setIsSucces(false);
  }, [idImg, img]);

  useEffect(() => {
    if ((comment.length > 0) & (comment !== "string")) {
      setIsValidComment(true);
    } else {
      setIsValidComment(false);
    }
  }, [comment]);
  useEffect(() => {
    if (mark > 0) {
      setIsValidMark(true);
    } else {
      setIsValidMark(false);
    }
  }, [mark]);
  useEffect(() => {
    if (isValidComment || isValidMark) {
      setSendCommentBody({
        submissionId: idImg,
        status: "Passed",
        comment: comment,
        mark: parseInt(mark),
      });
      setIsReadySubmit(true);
    } else {
      setIsReadySubmit(false);
    }
  }, [comment, mark, idImg, isValidComment, isValidMark]);
  useEffect(() => {
    if (sendComment && isReadySubmit) {
      async function fetchSendComment() {
        setIsLoading(true);
        setIsError(false);
        try {
          await fetch("https://phototips.xyz/api/submission/update", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sendCommentBody),
          });
          setIsLoading(false);
          setIsSucces(true);
        } catch (error) {
          setIsError(true);
        }
      }
      fetchSendComment();
      updateComment({
        id: sendCommentBody.submissionId,
        comment: sendCommentBody.comment,
        mark: sendCommentBody.mark,
        status: "Passed",
      });
      setSendComment(false);
    }
  }, [isReadySubmit, sendComment, sendCommentBody, updateComment]);
  return (
    <div className='content'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <form className='feedback'>
          <div className='input'>
            <p className='UI sub-t2'>
              Прошлая оценка: <span className='UI'>{img.mark}</span>
            </p>
            <label htmlFor='mark'>
              <p className='UI sub-t2'>Новая оценка</p>
            </label>
            <div
              className='radio'
              onChange={(e) => {
                setMark(e.target.value);
              }}>
              <div className='checkboxgroup'>
                <label htmlFor='1'>
                  <p className='UI sub-t1'>1</p>
                </label>
                <input id='mark_1' type='radio' value='1' name='mark' />
              </div>
              <div className='checkboxgroup'>
                <label htmlFor='mark_2'>
                  <p className='UI sub-t1'>2</p>
                </label>
                <input id='mark_2' type='radio' value='2' name='mark' />
              </div>
              <div className='checkboxgroup'>
                <label htmlFor='mark_3'>
                  <p className='UI sub-t1'>3</p>
                </label>
                <input id='mark_3' type='radio' value='3' name='mark' />
              </div>
              <div className='checkboxgroup'>
                <label htmlFor='mark_4'>
                  <p className='UI sub-t1'>4</p>
                </label>
                <input id='mark_4' type='radio' value='4' name='mark' />
              </div>
              <div className='checkboxgroup'>
                <label htmlFor='mark_5'>
                  <p className='UI sub-t1'>5</p>
                </label>
                <input id='mark_5' type='radio' value='5' name='mark' />
              </div>
            </div>

            <label htmlFor='comment'>
              <p className='UI sub-t2'>Комментарий</p>
            </label>
            <input
              id='comment'
              type='text'
              value={comment}
              onFocus={() => isInput(true)}
              onBlur={() => isInput(false)}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              className='light'
              placeholder='Введите комментарий'
            />
          </div>
          <button
            className='std'
            disabled={!isReadySubmit}
            onClick={(e) => {
              e.preventDefault();
              setSendComment(true);
            }}>
            Отправить
          </button>
          {!isReadySubmit ? <p className='UI caption'>Заполните хотя бы одно поле</p> : ""}
          {isSucces ? <p className='UI caption'>Оценка была отправлена</p> : ""}
          {isError ? <p className='UI caption'>Произошла ошибка</p> : ""}
        </form>
      )}
    </div>
  );
}

export default AdminSendComment;
