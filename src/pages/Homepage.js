import React, { useContext, useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { Link } from "react-router-dom";
import MainContext from "../context/MainContext";
import Browseletter from "../components/Browseletter";
import IngSection from "../components/IngSection";

function Homepage() {
  const mainContext = useContext(MainContext);
  const [drinks, setDrinks] = useState([]);
  const [loading, setloading] = useState(true);


  const apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  async function apiCall() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setDrinks(data.drinks);
    // console.log(data.drinks);
  }
 

  useEffect(() => {
    apiCall();
    setloading(false);
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col px-8 text-white">
      
   
      <Browseletter></Browseletter>

      <div className="text-center">Popular cocktails</div>
      <div className="grid grid-cols-4 gap-2 mx-auto p-3 ">
        {drinks.slice(0, 8).map((drink) => {
          return <DrinkCard key={drink.idDrink} data={drink} title={drink.strDrink}></DrinkCard>;
        })}
      </div>
      <hr />
      <div className="pt-8 text-center">Popular ingredients</div>
      <IngSection></IngSection>
    </div>
  );
}

export default Homepage;
