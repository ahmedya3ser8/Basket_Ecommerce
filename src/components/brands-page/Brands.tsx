import brands from '../../data/brands.json';

function Brands() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {brands.map((brand) => (
            <div className="p-3 bg-white rounded-[10px]" key={brand.id}>
              <img src={brand.imgUrl} alt="brand-img" className='w-[80px] object-cover m-auto' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands;