import React, { useState, useEffect } from "react";
import AdminSendComment from "./AdminSendComment";
import UserReadComment from "./UserReadComment";

export default function GalleryPhotoZoom({
  img,
  onClick,
  updatePhoto,
  maxIndex,
  isAdmin,
  updateComment,
}) {
  var index = img.indexNumber;
  var imgUrl = img.fileUrl;
  var imgName = `IMG-${index}.jpeg`;
  var prevPhoto = index > 0 ? index - 1 : maxIndex - 1;
  var nextPhoto = index < maxIndex - 1 ? index + 1 : 0;
  const [inputMode, setInputMode] = useState(false);

  useEffect(() => {
    function handleKeyPress(event) {
      switch (event.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          if (!inputMode) {
            updatePhoto(prevPhoto);
          }
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          if (!inputMode) {
            updatePhoto(nextPhoto);
          }
          break;
        case "Esc": // IE/Edge specific value
        case "Escape":
          console.log("esc press");
          onClick();
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    // event.preventDefault();
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextPhoto, prevPhoto, onClick, updatePhoto, inputMode]);
  return (
    <div id='modal' className='modal'>
      <div className='photo-zoom'>
        <div className='photo'>
          <div className='icon-arrow left' onClick={() => updatePhoto(prevPhoto)}></div>
          <img id='modalImg' src={imgUrl} alt='full screen' />
          <div className='icon-arrow right' onClick={() => updatePhoto(nextPhoto)}></div>
        </div>
        <div className='description'>
          <p className='UI sub-t2'>Сведения о фото</p>
          <p className='UI sub-t1 module-name'>Начало</p>
          <div className='close' onClick={onClick}>
            <div className='btn-icon'></div>
          </div>
          <div className='meta-info'>
            <div className='icon-text datetime'>
              <div className='btn-icon'></div>
              <p className='UI'>Ср. 20 окт. 2020 г., 13:56</p>
            </div>
            <div className='icon-text resolution'>
              <div className='btn-icon'></div>
              <p className='UI'>
                {imgName}
                <br />
                12.2&nbsp;Мпикс. 4032×3024 1,9&nbsp;МБ
              </p>
            </div>
            <div className='icon-text device'>
              <div className='btn-icon'></div>
              <p className='UI'>
                Smartphone
                <br />
                ƒ/1,8 1/30 4,25&nbsp;мм ISO&nbsp;130
              </p>
            </div>
          </div>
          <div className='feedback'>
            <h2 className='UI'>Обратная связь</h2>
            {isAdmin ? (
              <AdminSendComment img={img} isInput={setInputMode} updateComment={updateComment} />
            ) : (
              <UserReadComment img={img} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
