import React, { useState, useEffect } from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryPhotoZoom from "./GalleryPhotoZoom";
import "../../css/gallery.css";

export default function Gallery({ token }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  var moduleName = "Ваши фотографии";
  const size = 5;
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAllPhoto, setIsAllPhoto] = useState(true);
  const [rowNumbers, setRowNumbers] = useState([0]);
  const [photos, setPhotos] = useState([]);
  const [newPhotos, setNewPhotos] = useState([]);
  const [currentList, setCurentList] = useState([]);
  const [isOpenZoom, setIsOpenZoom] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [updateComment, setUpdateComment] = useState();
  const [newImgIndex, setNewImgIndex] = useState(-2);
  const filePath = "https://phototips.xyz/";
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://phototips.xyz/api/user?Token=" + token);
        const json = await response.json();
        setIsAdmin(json.isAdmin);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchData();
  }, [token]);

  useEffect(() => {
    async function fetchData(url) {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(url + token);
        const json = await response.json();
        setPhotos(
          json.map((i, j) => {
            return {
              indexNumber: j,
              id: i.id,
              fileUrl: filePath + i.photo?.fileUrl,
              thumbnailUrl: filePath + i.photo?.thumbnailUrl,
              status: i.status,
              comment: i.comment,
              mark: i.mark,
            };
          })
        );
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    var url = isAdmin
      ? "https://phototips.xyz/api/submission/listAllBy?AdminToken="
      : "https://phototips.xyz/api/submission/listBy?UserToken=";
    fetchData(url);
  }, [token, isAdmin]);

  useEffect(() => {
    setNewPhotos(photos.filter((photo) => photo.status === "Checking"));
  }, [photos]);
  useEffect(() => {
    if (isAllPhoto) {
      setCurentList(photos);
    } else {
      setCurentList(newPhotos);
    }
  }, [isAllPhoto, photos, newPhotos]);

  useEffect(() => {
    var countPhotos = currentList.length;
    var countRows = Math.ceil(countPhotos / size);
    var newRows = Array.apply(null, { length: countRows }).map(Number.call, Number);
    setRowNumbers(newRows);
  }, [currentList]);

  useEffect(() => {
    if (newImgIndex > -1 && newImgIndex < photos.length) {
      setCurrentImg(photos[newImgIndex]);
    }
  }, [newImgIndex, photos]);

  useEffect(() => {
    if (currentImg) {
      setIsOpenZoom(true);
    }
  }, [currentImg]);

  useEffect(() => {
    if (updateComment) {
      var foundIndex = photos.findIndex((x) => x.id === updateComment.id);
      var oldData = photos[foundIndex];
      var newData = {
        ...oldData,
        comment: updateComment.comment,
        mark: updateComment.mark,
        status: updateComment.status,
      };
      photos[foundIndex] = newData;
    }
  }, [updateComment, photos]);

  useEffect(() => {
    if (!isOpenZoom) {
      setCurrentImg(0);
    }
  }, [isOpenZoom]);

  var header = isAdmin ? (
    <header>
      <h1 className='UI'>Фотографии студентов</h1>
      <div className='tabs'>
        <ul>
          <li>
            <button
              className={`no-brdr ${isAllPhoto ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setIsAllPhoto(true);
              }}>
              Все фотографии
            </button>
          </li>
          <li>
            <button
              className={`no-brdr ${!isAllPhoto ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setIsAllPhoto(false);
              }}>
              Новые фотографии
            </button>
          </li>
        </ul>
      </div>
    </header>
  ) : (
    <h1 className='UI'>{moduleName}</h1>
  );
  return (
    <div className='gallery container'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <div className='frame gallery module last-used-module'>
            {isError && <div>Something went wrong ...</div>}
            {photos.length < 1 ? (
              <h1 className='UI'>Вы еще не сделали ни одной фотографии</h1>
            ) : (
              <div>
                {header}
                {/* {rowsComponentsAll} */}
                <GalleryGrid
                  source={currentList}
                  rowNumbers={rowNumbers}
                  setCurrentImg={setCurrentImg}
                />
              </div>
            )}
          </div>
          {isOpenZoom ? (
            <GalleryPhotoZoom
              img={currentImg}
              updatePhoto={(i) => setNewImgIndex(i)}
              updateComment={setUpdateComment}
              onClick={() => {
                setIsOpenZoom(false);
              }}
              maxIndex={photos.length}
              isAdmin={isAdmin}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
