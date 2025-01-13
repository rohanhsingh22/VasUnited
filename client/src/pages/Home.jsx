export default function Home() {
  return (
    <div className="mb-0 bg-slate-700">
      {/* Hero Section */}
      <div className="relative">
        <img src="../src/assets/hero.jpg" className="h-400 w-screen object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#053A63] to-[#01111B] opacity-75"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Find Your Dream Home</h1>
            <p className="text-lg text-white">
              We are recognized for exceeding client expectations and delivering great results through dedication,
              ease of process, and extraordinary services to our worldwide clients.
            </p>
          </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
      <div className="absolute left-0 w-full z-10">
        <div className="bg-white mb-36 lg:w-[70%] w-[90%] border border-gray-300 m-auto grid md:grid-cols-6 grid-cols-1 justify-center items-center gap-6 p-5 rounded-lg shadow-lg -mt-20">
          <div className="w-full">
            <h1 className="text-black font-semibold">Categories</h1>
            <input
              type="text"
              placeholder="Property Catgory"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold">City</h1>
            <input
              type="text"
              placeholder="Property City"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Beds</h1>
            <input
              type="Number"
              placeholder="Beds"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Baths</h1>
            <input
              type="Number"
              placeholder="Baths"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Price</h1>
            <input
              type="Number"
              placeholder="Price"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <button className="bg-blue-500 hover:bg-black text-white text-lg w-full p-4 rounded-xl font-semibold cursor-pointer transform hover:scale-110 transition-transform duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Listing section */}
      <div className="relative">
        <img src="../src/assets/hero.jpg" className="h-400 w-screen object-cover" />
      </div>
    </div>
  );
}


