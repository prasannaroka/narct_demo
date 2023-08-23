import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-green-800 pt-4 h-screen">
        <div className="flex   mt-40 w-[60%] items-center h-[60vh]  m-auto">
          <div className="w-[50%] h-[100%] bg-green-400">logdo</div>

          <div className="w-[50%] gap-5 h-[100%] bg-white items-center flex flex-col justify-center">
            <button className="text-white bg-green-600 text-xl font-semibold rounded-lg p-2">
              <Link to="/admin"> Login as Admin</Link>{" "}
            </button>
            <button className="text-white bg-green-600 text-xl font-semibold rounded-lg p-2">
              <Link to="/superadmin"> Login as Super Admin</Link>
            </button>
            <button className="text-white bg-green-600 text-xl font-semibold rounded-lg p-2">
              <Link to="/application">New Application</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
