import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkCard from "../components/DrinkCard";
import MainContext from "../context/MainContext";
import Browseletter from "../components/Browseletter";

function SearchPage() {
  const mainContext = useContext(MainContext);
  const [loading, setloading] = useState(true);
  const { keyword } = useParams();
  const [results, setresults] = useState([]);
  const searchApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
  async function getResults() {
    const response = await fetch(searchApi);
    const data = await response.json();
    console.log(data.drinks);
    setresults(data.drinks);
    setloading(false);
  }
  useEffect(() => {
    getResults();
  }, []);
  if (loading) return "Loading...";

  return (
    <div className="p-4 text-white">
      <div>Search results for : {keyword}</div>
      <Browseletter></Browseletter>
      {results == null ? (
        <div className="text-3xl text-center text-gray-200 font-light mt-8">
          "No items found"
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 mx-auto p-3 ">
          {results.map((drink) => {
            return <DrinkCard key={drink.idDrink} data={drink}></DrinkCard>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
