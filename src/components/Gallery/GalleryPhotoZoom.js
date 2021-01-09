import React, { Component } from "react";

export default class GalleryPhotoZoom extends Component {
  render() {
    var imgUrl = this.props.imgUrl;
    var imgName = this.props.imgUrl.split("/").slice(-1);
    return (
      <div id='modal' className='modal'>
        <div className='photo-zoom' onKeyPress={this.props.onKeyPress}>
          <div className='photo'>
            <img id='modalImg' src={imgUrl} alt='' />
          </div>
          <div className='description'>
            <p className='UI sub-t2'>Сведения о фото</p>
            <p className='UI sub-t1 module-name'>Начало</p>
            <div className='close' onClick={this.props.onClick}>
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
          </div>
        </div>
      </div>
    );
  }
}
