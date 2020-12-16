import React, { Component } from "react";
import MenuModule from "./MenuModule";

export default class Menu extends Component {
  render() {
    return (
      <div className='container'>
        <div className='last-used-module'>
          <h1 className='UI'>Продолжить обучение</h1>
          <div className='frame'>
            <MenuModule key='0' />
          </div>
        </div>

        <section className='all-modules'>
          <h1 className='UI'>Модули</h1>
          <div className='frame'>
            <ul>
              <li>
                <MenuModule key='1' />
              </li>
              <li>
                <MenuModule key='2' />
              </li>
              <li>
                <MenuModule key='3' />
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
