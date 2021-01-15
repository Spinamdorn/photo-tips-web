import React, { Component } from "react";
import MenuModule from "./MenuModule";
import "../../css/menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
    };
  }

  componentDidMount() {
    fetch("https://phototips.xyz/api/module/listAllIn")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          module: data,
        });
      });
  }

  render() {
    var modules = this.state.module;
    if (!modules) {
      return <div></div>;
    }
    const moduleContent = modules.map((subpart) => {
      return (
        <li>
          <MenuModule key={subpart.id} module={subpart} />
        </li>
      );
    });
    return (
      <div className='container table-of-contents'>
        <div className='last-used-module'>
          <h1 className='UI'>Продолжить обучение</h1>
          <div className='frame'>
            <MenuModule key={-1} module={this.state.module[0]} />
          </div>
        </div>

        <section className='all-modules'>
          <h1 className='UI'>Модули</h1>
          <div className='frame'>
            <ul>{moduleContent}</ul>
          </div>
        </section>
      </div>
    );
  }
}
