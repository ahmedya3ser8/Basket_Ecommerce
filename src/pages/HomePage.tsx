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
    </main>
  )
}

export default HomePage;