import BestSeller from "../components/best-seller/BestSeller";
import Brands from "../components/brands/Brands";
import Category from "../components/category/Category";
import Discount from "../components/discount/Discount";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";

function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Category />
      <Products />
      <Discount />
      <BestSeller />
      <Brands />
    </main>
  )
}

export default HomePage;