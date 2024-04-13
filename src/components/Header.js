import React from 'react'
import LogoImg from "../images/logo.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='w-[100%] bg-black py-4 flex- justify-between px-10'>
        <Link to='/'>
        <img src={LogoImg} alt="" />
        </Link>
    </header>
  )
}

export default Header