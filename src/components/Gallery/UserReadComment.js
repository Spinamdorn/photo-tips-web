import React, { useState, useEffect } from "react";

function UserReadComment({ img }) {
  const [comment, setComment] = useState(img.comment);
  const [mark, setMark] = useState(img.mark);
  return (
    <div className='content'>
      <p className='UI sub-t2'>
        Оценка: <span className='UI'>{mark}</span>
      </p>
      <p className='UI sub-t2'>Комментарий</p>
      <p className='comment UI'>{comment}</p>
    </div>
  );
}

export default UserReadComment;
