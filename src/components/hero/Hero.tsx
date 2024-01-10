
function Hero() {
  return (
    <div className="hero py-4">
      <div className="container">
        <div className="flex items-center flex-col md:flex-row gap-3">
          <div className="left w-full md:w-1/2 relative overflow-hidden rounded-[10px] before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:opacity-[0.3] group before:transition-all before:duration-300 before:group-hover:opacity-0">
            <img src="/images/hero/hero-01.png" alt="hero-img" className="w-full h-[350px] object-cover transition-all duration-300 group-hover:scale-[1.1]" />
            <div className="info absolute left-[10%] top-1/2 text-white">
              <h1 className="text-[30px] font-bold">Winter Jumpers</h1>
              <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
            </div>
          </div>
          <div className="right w-full md:w-1/2 relative overflow-hidden rounded-[10px] before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:opacity-[0.3] group before:transition-all before:duration-300 before:group-hover:opacity-0">
            <img src="/images/hero/hero-02.png" alt="hero-img" className="w-full h-[350px] object-cover transition-all duration-300 group-hover:scale-[1.1]" />
            <div className="info absolute left-[10%] top-1/2 text-white">
              <h1 className="text-[30px] font-bold">Winter Jumpers</h1>
              <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;