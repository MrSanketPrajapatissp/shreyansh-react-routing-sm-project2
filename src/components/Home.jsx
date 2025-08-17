import React from "react";

export default function Home() {
  return (
        <div className="bg-zinc-200 mt-10 w-1/2 m-auto p-3">
          <h1 className="text-2xl font-bold text-center">
            Welcome to the Home Page
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi
            debitis repudiandae ullam ab eos quas saepe reiciendis laborum quod modi
            sapiente nobis a adipisci magnam ipsa, tempora, amet totam?
          </p>
          <div className="flex justify-center mt-5">
            <button className="p-2 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600">
              Explore More
            </button>
          </div>
        </div>
  );
}
