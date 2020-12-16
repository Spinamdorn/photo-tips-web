import React, { Component } from "react";

export default class VideoLecture extends Component {
  render() {
    return (
      <div className='lesson-material'>
        <div className='lesson-part'>
          <h1 className='article lesson'> Заголовок </h1>
          <div className='content'>
            <div className='lesson-subpart video-container'>
              {/* <div className='video-container'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/H76pEfqywAc'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen></iframe>
                  </div> */}
              <div className='title'>
                <p className='article'>Лучшее видео в мире</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
