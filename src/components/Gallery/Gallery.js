import React, { Component } from "react";
import GalleryRow from "./GalleryRow";
import GalleryPhotoZoom from "./GalleryPhotoZoom";
import galleryData from "../../data/galleryData";
export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      moduleName: "Начало",
      size: 5,
      rowNumbers: [0],
      photos: galleryData,
      isOpenZoom: false,
      currentImg: {},
      prevImg: {},
      nextImg: {},
    };
    this.handleClickOpenPhoto = this.handleClickOpenPhoto.bind(this);
    this.handleClickClosePhoto = this.handleClickClosePhoto.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //   setCurrent(id) {
  //     currentImg = $("#" + id);
  //     let prev = currentImg.prev();
  //     let next = currentImg.next();
  //     if (prev.length) {
  //       prevImg = prev;
  //     } else {
  //       prevImg = $("#" + images.get(-1).id);
  //     }
  //     if (next.length) {
  //       nextImg = next;
  //     } else {
  //       nextImg = $("#" + images.get(0).id);
  //     }
  //   }

  //   openImg(clickedId) {
  //     setCurrent(clickedId);
  //     var source = currentImg.attr("src");
  //     $("#modalImg").attr("src", source);
  //     $(".modal").css("display", "block");
  //   }

  handleClickClosePhoto() {
    this.setState({
      isOpenZoom: false,
      currentImg: null,
      prevImg: null,
      nextImg: null,
    });
  }

  handleClickOpenPhoto(id, imgUrl) {
    this.setState({
      isOpenZoom: true,
      currentImg: imgUrl,
    });
  }

  //   handleKeyPress(event) {
  //     console.log("key pressed");
  // switch (event.key) {
  //   case "Left": // IE/Edge specific value
  //   case "ArrowLeft":
  //     //   getPrevImg();
  //     break;
  //   case "Right": // IE/Edge specific value
  //   case "ArrowRight":
  //     //   getNextImg();
  //     break;
  //   case "Esc": // IE/Edge specific value
  //   case "Escape":
  //     console.log("esc pressed");
  //     this.handleClickClosePhoto();
  //     break;
  //   default:
  //     return; // Quit when this doesn't handle the key event.
  // }
  //   }

  componentDidMount() {
    var countPhotos = galleryData.length;
    var countRows = Math.ceil(countPhotos / this.state.size);
    var rowsNumbers = Array.apply(null, { length: countRows }).map(Number.call, Number);
    this.setState((state) => ({
      rowNumbers: rowsNumbers,
    }));
  }

  render() {
    var rowsComponents = this.state.rowNumbers.map((i) => {
      return (
        <GalleryRow
          key={i}
          rowNumber={i}
          size={this.state.size}
          photos={this.state.photos}
          onClick={(i, j) => this.handleClickOpenPhoto(i, j)}
        />
      );
    });

    return (
      <div className='gallery container'>
        <div className='frame gallery module last-used-module'>
          <h1 className='UI'>{this.state.moduleName}</h1>
          {rowsComponents}
        </div>
        {this.state.isOpenZoom ? (
          <GalleryPhotoZoom
            imgUrl={this.state.currentImg}
            onClick={() => this.handleClickClosePhoto()}
            onKeyPress={this.handleKeyPress}
          />
        ) : null}
      </div>
    );
  }
}
