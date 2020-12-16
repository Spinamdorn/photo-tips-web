import React, { Component } from "react";
import LessonImg from "./LessonImg";

export default class LessonSubpart extends Component {
  render() {
    return (
      <div className='lesson-subpart'>
        <p className='article'>{this.props.text}</p>
        {this.props.img ? <LessonImg value={this.props.img} /> : ""}
      </div>
    );
  }
}
