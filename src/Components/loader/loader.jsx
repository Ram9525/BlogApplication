import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="flex justify-center border items-center z-50 fixed top-0 left-0 w-full h-screen bg-black opacity-80">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
