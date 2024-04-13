import React, { useContext, useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { Link } from "react-router-dom";
import MainContext from "../context/MainContext";
import Browseletter from "../components/Browseletter";

function Homepage() {
  const mainContext = useContext(MainContext);
  const [drinks, setDrinks] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchInput, setsearchInput] = useState("");

  const apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  async function apiCall() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setDrinks(data.drinks);
    // console.log(data.drinks);
  }
  const handleInputChange = (event) => {
    setsearchInput(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();

    console.log("Search input:", searchInput);
  };

  useEffect(() => {
    apiCall();
    setloading(false);
  }, []);
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col p-8">
      <div>
        <input type="text" name="search" id="" onChange={handleInputChange} />
        <Link to={`/search/${searchInput}`}>
          <button className="bg-white">Search</button>
        </Link>
      </div>
      <Browseletter></Browseletter>
      <div className="grid grid-cols-4 gap-2 mx-auto p-3 ">
        {drinks.slice(0, 8).map((drink) => {
          return <DrinkCard key={drink.idDrink} data={drink}></DrinkCard>;
        })}
      </div>
    </div>
  );
}

export default Homepage;
