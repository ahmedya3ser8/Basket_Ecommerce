import Category from "../components/category/Category";
import Hero from "../components/hero/Hero";

function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Category />
    </main>
  )
}

export default HomePage;