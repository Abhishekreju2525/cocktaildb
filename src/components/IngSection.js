import React, { useContext, useEffect, useState } from "react";
import MainContext from "../context/MainContext";
import DrinkCard from "./DrinkCard";
import IngredientCard from "./IngredientCard";

function IngSection() {

  const [ingredients, setIngredients] = useState([]);
  const [loading, setloading] = useState(true);

  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  async function apiCall() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setIngredients(data.drinks);
    console.log(data);
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
    <div className="grid grid-cols-4 gap-2 mx-auto p-3 ">
      {ingredients.slice(0, 8).map((ingredient) => {
        return (
          <IngredientCard key={ingredient.strIngredient1} data={ingredient} title={ingredient.strIngredient1}></IngredientCard>
        );
      })}
    </div>
  );
}

export default IngSection;
