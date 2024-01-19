import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start flex justify-start">
          <a
            href="/"
            className="btn btn-ghost text-2xl font-bold text-violet-600"
          >
            superprof
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-semibold" href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className="font-semibold" href="/">
                Apprendre
              </a>
            </li>
            <li>
              <a className="font-semibold" href="/">
                Donner des cours
              </a>
            </li>
            <li>
              <a className="font-semibold" href="/">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            href="/"
            className="btn bg-[#030032] text-white font-medium rounded-full"
          >
            Se Connecter
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
