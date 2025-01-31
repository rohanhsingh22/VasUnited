import { useState } from "react";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const areas = [
    { id: 1, name: 'Jersry City', listings: 25, image: '../src/assets/city.jpeg' },
    { id: 2, name: 'The Heights', listings: 30, image: '../src/assets/city.jpeg' },
    { id: 3, name: 'Newport', listings: 20, image: '../src/assets/city.jpeg' },
    { id: 4, name: 'Greenville', listings: 15, image: '../src/assets/city.jpeg' },
    { id: 5, name: 'Oakland', listings: 10, image: '../src/assets/city.jpeg' },
    { id: 6, name: 'Riverview', listings: 35, image: '../src/assets/city.jpeg' },
    { id: 7, name: 'Sunnyvale', listings: 28, image: '../src/assets/city.jpeg' },
    { id: 8, name: 'Lakewood', listings: 22, image: '../src/assets/city.jpeg' },
    { id: 9, name: 'Brookside', listings: 18, image: '../src/assets/city.jpeg' },
    { id: 10, name: 'Parkside', listings: 12, image: '../src/assets/city.jpeg' },
    { id: 11, name: 'Hilltop', listings: 38, image: '../src/assets/city.jpeg' },
    { id: 12, name: 'Creekview', listings: 25, image: '../src/assets/city.jpeg' },
    { id: 13, name: 'Maplewood', listings: 20, image: '../src/assets/city.jpeg' },
    { id: 14, name: 'Willow Creek', listings: 15, image: '../src/assets/city.jpeg' },
    { id: 15, name: 'Oakwood', listings: 10, image: '../src/assets/city.jpeg' },
    { id: 16, name: 'Ridgewood', listings: 35, image: '../src/assets/city.jpeg' },
  ];

  const [category, setCategory] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [propertyType, setPropertyType] = useState("sales");
  const [loaction, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, bedroom, propertyType, loaction });
    setCategory('')
    setBedroom('')
    setLocation('')
    setPropertyType('sales')
  }
  
  
  return (
    <div>
      {/* Hero Section */}
      
    <header className="relative w-full h-screen flex items-center">
      <div className="w-1/2 h-full flex flex-col justify-center px-12 bg-gradient-to-r from-white to-sky-200">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Reno Real Estate <br /> Luxury Marketplace
        </h1>
        <p className="text-gray-600 mt-4">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>

        <div className="flex  mt-12">
          <button
            className={`p-2 px-4  font-semibold ${propertyType === "sales" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setPropertyType("sales")}
          >
            Sales
          </button>
          <button
            className={`p-2 px-4  font-semibold ${propertyType === "rentals" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setPropertyType("rentals")}
          >
            Rentals
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
          <select
            className="border border-gray-300 p-3 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="duplex">Duplex</option>
            <option value="full-floor">Full Floor</option>
            <option value="half-floor">Half Floor</option>
            <option value="penthouse">Penthouse</option>
            <option value="villa">Villa</option>
            <option value="whole-building">Whole Building</option>
          </select>

          <input
            type="text"
            placeholder="Enter address, city, state, pincode"
            className="flex-grow border border-gray-300 p-3 rounded-lg"
            onChange={(e) => setLocation(e.target.value)}
          />

          <select
            className="border border-gray-300 p-3 rounded-lg"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          >
            <option value="">Select Bedroom</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit" className=" rounded-lg text-white font-semibold">
            🔍
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 h-full bg-cover bg-right" style={{ backgroundImage: "url('../src/assets/slider3.jpg')"}}></div>

    </header>

      {/* Latest Properties (Second Section) */}

      {/* <div className="relative h-auto w-screen pb-10 pt-10">
      <div className="mt-20 text-center">
        <h1 className="font-semibold text-3xl">Properties by Area</h1>
        <p className="text-gray-600 mt-4">
          Highlight the best of your properties by using the List Category shortcode. You can <br />
          list categories, types, cities, areas and states of your choice.
        </p>
      </div>
      <div className="bg-white m-8 h-auto w-auto rounded-lg py-8 mx-60 mt-20 shadow-lg shadow-indigo-300 drop-shadow-lg">
        {Array.from({ length: Math.ceil(areas.length / 4) }).map((_, index) => (
          <div key={index} className="flex justify-around flex-wrap mt-3">
            {areas.slice(index * 4, (index + 1) * 4).map((area) => (
              <div key={area.id} className="flex gap-4 m-4">
                <img src={area.image} alt="ca" className="h-20 w-20 rounded-lg" />
                <div>
                  <h1>{area.name}</h1>
                  <p>{area.listings} listings</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div> */}



      <div className="relative h-auto w-screen pb-10 pt-10" >
        <div className="mt-20 text-center">
          <h1 className="font-semibold text-3xl">Properties by Area</h1>
          <p className="text-gray-600 mt-4">Highlight the best of your properties by using the List Category shortcode. You can <br />list categories, types, cities, areas and states of your choice.</p>
        </div>

        <div className="bg-white m-8 h-auto w-auto rounded-lg py-8 mx-60 mt-20 shadow-lg shadow-indigo-300 drop-shadow-lg">
          <div className="flex justify-around flex-wrap ">
            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>The Heights</h1>
                <p> listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-wrap mt-3 ">
            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-wrap mt-3">
            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-wrap mt-3">
            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="../src/assets/city.jpeg" alt="ca" className="h-20 w-20 rounded-lg" />
              <div>
                <h1>Jersry City</h1>
                <p>25 listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* #Third Section Latest Properties */}

      <div className="relative h-auto w-screen pb-10 ">
        <div className="mt-5 text-center">
          <h1 className="font-bold text-4xl">Latest Properties</h1>
          <p className="text-gray-600 mt-4">These are the latest properties in the Sales category. You can create the list using <br /> the “latest listing shortcode” and show items by specific categories.</p>
        </div>

        <div className="flex justify-around mt-10 mx-72">
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">For Sale</button></div>
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">Villas</button></div>
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">Apartments</button></div>
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">Houses</button></div>
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">Condos</button></div>
          <div><button className="bg-gray-200 px-8 py-3 rounded-lg font-bold">Retails</button></div>
        </div>
        <div className="flex">
        <ListingItem/>
        <ListingItem/>
        <ListingItem/>
        </div>
      </div>
    </div>


  );
}