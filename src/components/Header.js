import React, { useEffect, useState } from "react";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";
function Header() {
  const [searchInput, setsearchInput] = useState("");
  const handleInputChange = (event) => {
    setsearchInput(event.target.value);
  };
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <header className="w-[100%] bg-black p-2 box-border flex justify-between align-middle px-10">
      <Link to="/">
        <img src={LogoImg} alt="" />
      </Link>
      <div className="py-2">
        <input
          type="text"
          name="search"
          id=""
          onChange={handleInputChange}
          className="p-2"
        />
        <Link to={`/browse/s=${searchInput}`}>
          <button className="bg-white text-black mx-2 p-2 ">Search</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
