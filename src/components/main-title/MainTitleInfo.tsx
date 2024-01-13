import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { TmainTitle } from "../../types/app";

function MainTitleInfo({title, linkText}: TmainTitle) {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className='text-[#2a2185] text-[28px] font-medium relative before:absolute before:w-[60px] before:h-[2px] before:bottom-0 before:translate-x-[40%] before:mb-[-2px] before:bg-[#2a2185]'>{title}</h2>
      <Link to={`/${linkText}`} className='bg-[#2a2185] text-white p-[5px] flex justify-around items-center gap-1 rounded-[20px] w-[100px]'>
        <span className='block text-[18px]'>more</span>
        <span className='block animate-[arrow-bounce_1.5s_linear_infinite]'>
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  )
}

export default MainTitleInfo;