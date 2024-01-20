import MainTitleInfo from "../main-title/MainTitleInfo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function Brands() {
  const Brands = [
    {imgUrl: '/public/images/brands/brand-01.png'},
    {imgUrl: '/public/images/brands/brand-02.png'},
    {imgUrl: '/public/images/brands/brand-03.png'},
    {imgUrl: '/public/images/brands/brand-01.png'},
    {imgUrl: '/public/images/brands/brand-02.png'},
    {imgUrl: '/public/images/brands/brand-03.png'},
    {imgUrl: '/public/images/brands/brand-01.png'}
  ]
  return (
    <section className='py-5'>
      <div className="container">
        <MainTitleInfo title="Brands" linkText="brands" />
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
        {Brands.map((brand, index) => (
          <SwiperSlide className='bg-white p-2 rounded-[10px]' key={index} >
            <div className="flex justify-center items-center w-[180px] h-[60px]">
              <img src={brand.imgUrl} alt="brand-img" className='w-[100px]' />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Brands;