import React from "react";
import { Link,Outlet } from "react-router-dom";
function User() {

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-300 text-5xl mb-2 ">User</h1>
      <div className="text-2xl mt-10 flex flex-col ">
        <Link className="bg-red-200  mb-3 p-3 hover:bg-red-300" to="/user/Anuj">Anuj</Link>
        <Link className="bg-red-200  mb-3 p-3 hover:bg-red-300" to="/user/Anubhav">Anubhav</Link>
        <Link className="bg-red-200  mb-3 p-3 hover:bg-red-300" to="/user/Anuraj">Anuraj</Link>
      </div>
      <hr/>

      <Outlet/>

    </div>
  );
}

export default User;
