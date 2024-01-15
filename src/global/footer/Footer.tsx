import { Link } from "react-router-dom";
import { FaBasketShopping, FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import FooterRow from "./FooterRow";
import FooterInfo from "./FooterInfo";

function Footer() {
  return (
    <footer className="pt-5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 bg-white p-5">
          <div className="row">
            <Link to={'/'} className="flex items-center gap-1 text-[#2a2185]">
              <div className="text-[25px]">
                <FaBasketShopping />
              </div>
              <span className="text-[25px] font-medium">Basket</span>
            </Link>
            <p className="text-[#666]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt consequuntur amet culpa cum itaque neque.
            </p>
          </div>
          <FooterRow title='About Us' text1='Find Store' text2='Location' text3='Blogs & News' text4='Affiliate Service' />
          <FooterRow title='Informations' text1='Help Center' text2='Refund Queries' text3='Shipping QNA' text4='Blogs' />
          <FooterRow title='Support' text1='FAQs' text2='Support' text3='Contact Us' text4='News' />
          <div className="row">
            <h2 className="text-[25px] font-medium mb-3">Contact Us</h2>
            <ul>
              <li className="p-2">
                <Link to='#' className="flex items-center gap-2 text-[#666]" >
                  <FaPhone />
                  <span className="text-[17px] text-[#777]">01123456789</span>
                </Link>
              </li>
              <li className="p-2">
                <Link to='#' className="flex items-center gap-2 text-[#666]" >
                  <IoMail />
                  <span className="text-[17px] text-[#777]">test@gmail.com</span>
                </Link>
              </li>
              <li className="p-2">
                <Link to='#' className="flex items-center gap-2 text-[#666]" >
                  <FaLocationDot />
                  <span className="text-[17px] text-[#777]">Mansoura, Egypt</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <FooterInfo />
      </div>
    </footer>
  )
}

export default Footer;