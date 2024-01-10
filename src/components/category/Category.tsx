import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import 'swiper/css/bundle';

function Category() {
  const categories = [
    {imgUrl: '/images/category/category-01.webp', title: 'T-Shirt 1'},
    {imgUrl: '/images/category/category-02.webp', title: 'T-Shirt 2'},
    {imgUrl: '/images/category/category-03.webp', title: 'T-Shirt 3'},
    {imgUrl: '/images/category/category-04.webp', title: 'T-Shirt 4'},
    {imgUrl: '/images/category/category-05.webp', title: 'T-Shirt 5'},
    {imgUrl: '/images/category/category-06.webp', title: 'T-Shirt 6'},
    {imgUrl: '/images/category/category-07.webp', title: 'T-Shirt 7'}
  ]
  return (
    <div className='py-8'>
    <div className="container">
      <div className="flex justify-between items-center mb-5">
        <h2 className='text-[#2a2185] text-[28px] font-medium relative before:absolute before:w-[60px] before:h-[2px] before:bottom-0 before:translate-x-[40%] before:mb-[-2px] before:bg-[#2a2185]'>Category</h2>
        <Link to={''} className='bg-[#2a2185] text-white p-2 flex justify-around items-center gap-1 rounded-[20px] w-[100px]'>
          <span className='block text-[18px]'>more</span>
          <span className='block animate-[arrow-bounce_1.5s_linear_infinite]'>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
      <Swiper 
        className='py-3'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        mousewheel={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide className='bg-white p-3 w-[180px] h-[80px] rounded-[10px]' >
            <div className="flex justify-between items-center" key={index}>
              <img src={category.imgUrl} alt="category-img" className='w-[50px]' />
              <h2 className='text-[18px]'>{category.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}

export default Category;