import React from 'react'
import { Link } from 'react-router-dom'

function DrinkCard({data}) {
  return (
    <Link to={`/drink/${data.idDrink}`} className='p-5 flex flex-col gap-2 text-white'>
        <div>
            <img src={data.strDrinkThumb} alt="" />
        </div>
        <div className='self-center'>
            {data.strDrink}
        </div>
    </Link>
  )
}

export default DrinkCard