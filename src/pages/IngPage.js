import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainContext from "../context/MainContext";
import Browseletter from "../components/Browseletter";

function IngPage() {
  const mainContext = useContext(MainContext);
  const { title } = useParams();
  const [ingData, setIngData] = useState({});
const [drinkList, setdrinkList] = useState([])
  const [loading, setloading] = useState(true);
  const imgUrl = `https://www.thecocktaildb.com/images/ingredients/${title}.png`;

  async function apiCall() {
    const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${title}`;
    const DrinkApi=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${title}`;
    const response = await fetch(api);
    const res2=await fetch(DrinkApi);
    const data = await response.json();
    const DrinkData=await res2.json();
    // console.log(data.ingredients[0]);
    setIngData(data.ingredients[0]);
    setdrinkList(DrinkData.drinks)
    console.log(DrinkData.drinks);
    setloading(false);
  }

  useEffect(() => {
    async function fetchData() {
      await apiCall();
    }
    fetchData();
  }, [title]); 
  if (loading) return "Loading...";
  return (
    <div className="p-8 text-white">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-3 font-medium py-5 col-span-1">
          <h2 className="font-medium text-lg">{ingData.strIngredient}</h2>
          <img src={imgUrl} alt={ingData.strIngredient} />
        </div>
        <div className="p-5 flex flex-col col-span-2">
          <h2 className="font-medium text-lg">Drinks</h2>
          <div className="p-5 flex-wrap flex text-white">
            {drinkList.map((drink, index) => {
              return (
                <Link to={`/drink/${drink.idDrink}`} className="w-48 text-wrap p-3 flex flex-col">
                  <img 
                    src={drink.strDrinkThumb}
                    alt=""
                    className="h-36 "
                  />
                  <div className="text-sm text-center mt-1">
                  
                    {drink.strDrink}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center justify-center">
        <div className="text-center ">
          <h2 className="font-medium my-5 text-lg">Description</h2>
          <p>{ingData.strDescription}</p>
        </div>
        <div className="text-center ">
          <h2 className="font-medium my-5 text-lg">Type</h2>
          <p>Serve : {ingData.strType}</p>
        </div>
        <div className="text-center">
          <Browseletter></Browseletter>
        </div>
      </div>
    </div>
  );
}

export default IngPage;
