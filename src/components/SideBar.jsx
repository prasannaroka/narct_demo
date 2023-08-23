import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../assets/narc.png";

const SideBar = () => {
  return (
    <div className="bg-green-200 min-h-screen h-full border pl-6 border-r-2 pt-5">
      <div className="  font-bold text-2xl">Menu</div>

      <div className="  mt-6   ">
        <button className="text-xl hover:text-green-500 text-green-700 border border-green-700 hover:p-4  p-3 rounded-lg  font-semibold ">
          <Link to="/application">New Application</Link>
        </button>
        <button className="text-xl font-semibold hover:text-green-500 text-green-700 border border-green-700 hover:p-4 p-3 mt-4 rounded-lg ">
          Application Status
        </button>
      </div>
    </div>
  );
};

export default SideBar;
