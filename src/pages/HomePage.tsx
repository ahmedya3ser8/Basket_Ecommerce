import BestSeller from "../components/home-page/best-seller/BestSeller";
import Brands from "../components/home-page/brands/Brands";
import Category from "../components/home-page/category/Category";
import Discount from "../components/home-page/discount/Discount";
import Hero from "../components/home-page/hero/Hero";
import Products from "../components/home-page/products/Products";

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