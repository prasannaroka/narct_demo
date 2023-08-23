import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../assets/narc.png";

function Header() {
  return (
    <div className="flex items-center  px-8 py-2 bg-green-600 h-18 ">
      <div className="bg-white rounded-full h-20 -mt-1 w-20 ">
        <img src={imageSrc} className="  h-full w-full" alt="" />
      </div>

      <div className="flex justify-between w-full ml-4">
        <div>

        <span className="text-white font-bold text-3xl">
          Nepal Agricultural Research Council{" "}
        </span>
        </div>
        <div className="font-semibold text-white text-2xl">
          <Link to="/home">Logout</Link>
        </div>

      </div>
      
    </div>
  );
}

export default Header;
