import React, { useState } from 'react';
import { MenuItemsJoin } from './MenuItemsJoin';
import './Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsJoin.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
