import categories from '../../data/categories.json';

function Categories() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {categories.map((category) => (
            <div className="bg-white p-3 flex items-center gap-5 rounded-[10px]" key={category.id}>
              <img src={category.imgUrl} alt="category-img" className='w-[80px] object-cover' />
              <h2 className='text-[#666] text-[18px] font-medium'>{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories;