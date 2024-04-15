import React from "react";
import { Link } from "react-router-dom";

function IngredientCard({ data, title }) {
  const imgUrl = `https://www.thecocktaildb.com/images/ingredients/${title}.png`;
  // console.log(imgUrl);
  return (
    <Link
      to={`/ingredient/${title}`}
      className="p-5 flex flex-col gap-2 text-white"
    >
      <div className="h-64">
        <img src={imgUrl} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className="self-center">{title}</div>
    </Link>
  );
}

export default IngredientCard;
