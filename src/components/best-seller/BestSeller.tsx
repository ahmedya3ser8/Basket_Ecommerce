import MainTitleInfo from "../main-title/MainTitleInfo";

function BestSeller() {
  const products = [
    {imgUrl: '/images/products/product-01.webp', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-02.jpg', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-03.webp', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-04.webp', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-05.webp', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-06.webp', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-07.jpg', price: 18.90, title: 'Winter Jumpers'},
    {imgUrl: '/images/products/product-08.webp', price: 18.90, title: 'Winter Jumpers'},
  ]
  return (
    <section className="py-5">
      <div className="container">
        <MainTitleInfo title="Best Seller" linkText="bestSeller" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <div className="bg-white p-5 rounded-[10px] group" key={index}>
              <img src={product.imgUrl} alt="product-img" className="w-[150px] object-cover m-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="mt-5">
                <span className="text-[#666]">{`$${product.price}`}</span>
                <h2 className="text-[#666] text-[20px] font-light">{product.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller;