import { Link } from "react-router-dom";

function FooterInfo() {
  const date = new Date();
  const yearNow = date.getFullYear(); 
  return (
    <div className="flex justify-between items-center p-3 bg-white border-t-2 border-solid border-[#ccc]">
      <div className="copyright text-[#777] transition-colors duration-300 hover:text-[#222]">
        <p>© {yearNow} Basket</p>
      </div>
      <div className="links text-[#777]">
        <Link to='#' className="mr-5 transition-colors duration-300 hover:text-[#222]" >
          Terms & Conditions
        </Link>
        <Link to='#' className="transition-colors duration-300 hover:text-[#222]" >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default FooterInfo;