import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

 const  gobackHandler = () => {
    // navigate("/user");
    navigate(-2);
  }

  return (
    <div className="bg-zinc-200 mt-10 w-1/2 m-auto p-3">
      <h1 className="text-2xl font-bold text-center">
        Welcome to the Home Page
      </h1>
      <p className="mt-5 text-2xl">user {name}</p>
      <div className="flex justify-center mt-5">
        <button onClick={gobackHandler} className="p-2 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600">
          Go Back
        </button>
      </div>
    </div>
  );
}
