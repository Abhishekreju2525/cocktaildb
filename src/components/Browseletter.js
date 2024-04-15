import React, { useContext } from "react";
import MainContext from "../context/MainContext";
import { Link } from "react-router-dom";

function Browseletter() {
  const mainContext = useContext(MainContext);
  return (
    <div className="text-center text-white pt-5 my-5">
      <h1 className="text-2xl py-3 font-medium">Browse More</h1>

      {mainContext.alphabets.map((item) => {
        return (
          <>
            <Link to={`/browse/f=${item}`}>{item}</Link>
            &nbsp;&nbsp;
          </>
        );
      })}
    </div>
  );
}

export default Browseletter;
