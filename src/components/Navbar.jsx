import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between text-black cursor-pointer">
      <div className="left flex items-center gap-3">
        <img className="h-12" src="img/jsbin.png" alt="" />
        <ul className="flex gap-4 ">
          <li>File</li>
          <li>Add Library</li>
          <li>Share</li>
        </ul>
      </div>

      <div className="middle ">
        <ul className="flex mt-3 gap-3">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>

          <li>
            <a href="#">Output</a>
          </li>
        </ul>
      </div>

      <div className="right flex">
        <ul className="flex mt-3">
          <li>Login or Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
