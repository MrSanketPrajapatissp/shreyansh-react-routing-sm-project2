import React from "react";

function Card({ key, index, values, handleClick }) {
  const { image, name, artist, added } = values;

  return (
    <div
      key={key}
      className="w-60 bg-zinc-100 p-4 flex gap-4 rounded-md pb-10 relative mt-10"
    >
      <div className="bg-orange-500 w-20 h-20 rounded-md">
        <img
          src={image}
          alt="Song Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h3 className="text-lg font-semibold">{name}</h3>
        <h2 className="text-xs"> {artist}</h2>
      </div>

      <button
        onClick={() => handleClick(index)}
        className={` ${
          added
            ? "bg-pink-500 hover:bg-pink-600"
            : "bg-orange-600 hover:bg-orange-600"
        } text-xs text-white absolute rounded-full  text-nowrap px-4 py-3 bottom-0 left-1/2 translate-y-[50%] translate-x-[-50%]`}
      >
        {added ? "Added" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default Card;
