import React, { useState, useEffect } from "react";
import GalleryRow from "./GalleryRow";
import GalleryPhotoZoom from "./GalleryPhotoZoom";
import "../../css/gallery.css";

export default function Gallery({ token }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  var moduleName = "Ваши фотографии";
  const size = 5;
  const [rowNumbers, setRowNumbers] = useState([0]);
  const [photos, setPhotos] = useState([]);
  const [isOpenZoom, setIsOpenZoom] = useState(false);
  const [currentImg, setCurrentImg] = useState(-2);
  const [currentImgUrl, setCurrentImgUrl] = useState();
  const filePath = "https://phototips.xyz/";
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://phototips.xyz/api/photo/listBy?UserToken=" + token);
        const json = await response.json();
        setPhotos(
          json.map((i, j) => {
            return { indexNumber: j, id: i.id, fileUrl: filePath + i.fileUrl };
          })
        );
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchData();
  }, [token]);

  useEffect(() => {
    var countPhotos = photos.length;
    var countRows = Math.ceil(countPhotos / size);
    var newRows = Array.apply(null, { length: countRows }).map(Number.call, Number);
    setRowNumbers(newRows);
  }, [photos]);

  useEffect(() => {
    if ((currentImg > -1) & (currentImg < photos.length)) {
      setIsOpenZoom(true);
      setCurrentImgUrl(photos[currentImg].fileUrl);
    }
  }, [currentImg, photos]);

  useEffect(() => {
    if (!isOpenZoom) {
      setCurrentImg(-2);
    }
  }, [isOpenZoom]);

  var rowsComponents = rowNumbers.map((i) => {
    return (
      <GalleryRow
        key={i}
        rowNumber={i}
        size={size}
        photos={photos}
        onClick={(x) => setCurrentImg(x)}
      />
    );
  });

  return (
    <div className='gallery container'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <div className='frame gallery module last-used-module'>
            {isError && <div>Something went wrong ...</div>}
            <h1 className='UI'>{moduleName}</h1>
            {rowsComponents}
          </div>
          {isOpenZoom ? (
            <GalleryPhotoZoom
              index={currentImg}
              imgUrl={currentImgUrl}
              updatePhoto={(i) => setCurrentImg(i)}
              onClick={() => {
                setIsOpenZoom(false);
              }}
              maxIndex={photos.length}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
