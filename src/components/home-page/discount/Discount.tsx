
function Discount() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="bg-[#6b7280] p-5 flex justify-around items-center gap-5 rounded-[10px]">
          <div className="discount-img">
            <img src="/images/discount.png" alt="discount-img" className="w-full object-cover" />
          </div>
          <div className="discount-info">
            <h2 className="text-white text-[30px] font-medium">Up to 30% discount on laptops</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount;