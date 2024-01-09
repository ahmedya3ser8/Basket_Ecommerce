import { Link } from "react-router-dom";
import { FaBasketShopping, FaUser, FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <header className="p-[10px] h-[70px] sticky w-full left-0 bg-white overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to={'/'} className="flex items-center gap-1 text-[#2a2185]">
              <div className="text-[25px]">
                <FaBasketShopping />
              </div>
              <span className="text-[25px] font-medium">Basket</span>
            </Link>
          </div>
          <div className="hidden search w-[40%] md:flex items-center h-[30px] p-2">
            <input type="text" placeholder="search" className="w-full p-2 border-[2px] border-solid border-[#ccc] border-r-0 rounded-[25px_0_0_25px] outline-none" />
            <button className="p-2 bg-[#2a2185] text-[#fff] text-[18px] rounded-[0_25px_25px_0]">Search</button>
          </div>
          <div className="icons flex items-center gap-5">
            <Link to={'login'} className="flex items-center flex-col" >
              <div className="text-[22px]">
                <FaUser />
              </div>
              <span className="text-[#777]">Profil</span>
            </Link>
            <Link to={'cart'} className="flex items-center flex-col" >
              <div className="text-[22px]">
                <FaCartShopping />
              </div>
              <span className="text-[#777]">My Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;