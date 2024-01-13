import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';
import MainTitleInfo from '../main-title/MainTitleInfo';

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
      <MainTitleInfo title={'Category'} linkText={'categories'} />
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