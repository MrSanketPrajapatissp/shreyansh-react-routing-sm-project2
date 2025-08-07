import React from "react";
import Style from "./style.module.css";

function Navbar({songData}) {
  
  return (
    <div className="w-full px-4 py-3 flex  justify-between items-center">
      <h3 className={`${Style.a} ${Style.b}`}>Orange</h3>

      <div className="bg-orange-500 text-white rounded-md flex gap-2 p-2 text-sm ">
        <h3>Favourites</h3>
        <p>{songData.filter((item) => item.added === true).length}</p>
      </div>
    </div>
  );
}

export default Navbar;
