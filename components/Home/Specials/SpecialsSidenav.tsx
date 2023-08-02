import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";

export default function SpecialsSidenav() {
  const [activeClass, setActiveClass] = useState(1);
  return (
    <ul className='specials-nav'>
      <li
        onClick={() => setActiveClass(1)}
        className={`cursor-pointer ${
          activeClass === 1 ? "specials-active" : ""
        }`}
      >
        <p>Recomended</p>
        <ArrowForwardIos className='icon' />
      </li>
      <li
        onClick={() => setActiveClass(2)}
        className={`cursor-pointer ${
          activeClass === 2 ? "specials-active" : ""
        }`}
      >
        <p>Favorite&apos;s</p>
        <ArrowForwardIos className='icon' />
      </li>

      <li
        onClick={() => setActiveClass(3)}
        className={`cursor-pointer ${
          activeClass === 3 ? "specials-active" : ""
        }`}
      >
        <p>Completed</p>
        <ArrowForwardIos className='icon' />
      </li>
      <li
        onClick={() => setActiveClass(4)}
        className={`cursor-pointer ${
          activeClass === 4 ? "specials-active" : ""
        }`}
      >
        <p>Coming Up</p>
        <ArrowForwardIos className='icon' />
      </li>
    </ul>
  );
}
