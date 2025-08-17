import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="p-4 h-15 bg-zinc-300">
        <ul className=" flex flex-row justify-center gap-10">
          <li>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : "",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : "",
                };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(e) => {
                return {
                  color: e.isActive ? "tomato" : "",
                  fontWeight: e.isActive ? "bold" : "",
                };
              }}
              to="/user"
            >
              User
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
