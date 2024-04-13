import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

function DrinkPage() {
  const mainContext = useContext(MainContext);
  const { id } = useParams();
  const [drinksData, setDrinksData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [loading, setloading] = useState(true);
  async function apiCall() {
    const api = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(api);
    const data = await response.json();
    setDrinksData(data.drinks[0]);

    // Extract ingredients and measures
    const ingredientsData = Object.keys(data.drinks[0])
      .filter((key) => key.startsWith("strIngredient") && data.drinks[0][key])
      .map((key) => data.drinks[0][key]);

    const measuresData = Object.keys(data.drinks[0])
      .filter((key) => key.startsWith("strMeasure") && data.drinks[0][key])
      .map((key) => data.drinks[0][key]);

    setIngredients(ingredientsData);
    setMeasures(measuresData);
    setloading(false);
  }

  useEffect(() => {
    async function fetchData() {
      await apiCall();
    }
    fetchData();
  }, [id]); // Include 'id' in the dependency array
  if (loading) return "Loading...";
  return (
    <div className="p-8 text-white">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-3 font-medium py-5 col-span-1">
          <h2 className="font-medium text-lg">{drinksData.strDrink}</h2>
          <img src={drinksData.strDrinkThumb} alt={drinksData.strDrink} />
        </div>
        <div className="p-5 flex flex-col col-span-2">
          <h2 className="font-medium text-lg">Ingredients</h2>
          <div className="p-5 flex flex-wrap">
            {ingredients.map((ingredient, index) => {
              return (
                <div className="w-48 text-wrap p-3 flex flex-col">
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                    alt=""
                    className="h-36"
                  />
                  <div>
                    {measures[index]}
                    {""}
                    {ingredient}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center justify-center">
        <div className="text-center ">
          <h2 className="font-medium my-5 text-lg">Instructions</h2>
          <p>{drinksData.strInstructions}</p>
        </div>
        <div className="text-center ">
          <h2 className="font-medium my-5 text-lg">Glass</h2>
          <p>Serve : {drinksData.strGlass}</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkPage;
