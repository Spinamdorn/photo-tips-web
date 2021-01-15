import React, { useState, useEffect } from "react";
import MenuModule from "./MenuModule";
import "../../css/menu.css";

export default function Menu() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modules, setModules] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://phototips.xyz/api/module/listAllIn");
        const json = await response.json();
        setModules(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  const moduleContent = modules.map((subpart) => {
    return (
      <li>
        <MenuModule key={subpart.id.toString()} module={subpart} />
      </li>
    );
  });

  return (
    <div className='container table-of-contents'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className='last-used-module'>
            <h1 className='UI'>Продолжить обучение</h1>
            {isError && <div>Something went wrong ...</div>}
            <div className='frame'>
              <MenuModule module={modules[0]} />
            </div>
          </div>

          <section className='all-modules'>
            <h1 className='UI'>Модули</h1>
            <div className='frame'>
              <ul>{moduleContent}</ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
