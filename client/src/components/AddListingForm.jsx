import React, { useState } from "react";

export default function AddListingForm() {
  const [listingDetails, setListingDetails] = useState({
    title: '',
    description: '',
    propertyType: '',
    propertyStatus: '',
    price: 0,
  });

  const [location, setLocation] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [media, setMedia] = useState({
    images: [],
    video: '',
  });

  const [contactInformation, setContactInformation] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!listingDetails.title || !listingDetails.description || !listingDetails.propertyType || !listingDetails.propertyStatus || !listingDetails.price ) {
      console.error('All required fields must be filled out');
      return;
    }
      const data = {
        title: listingDetails.title,
        description: listingDetails.description,
        propertyType: listingDetails.propertyType,
        propertyStatus: listingDetails.propertyStatus,
        price: parseInt(listingDetails.price),
        location: {
          address: location.address,
          city: location.city,
          state: location.state,
          zip: location.zip,
          country: location.country,
        },
        contactInformation: {
          name: contactInformation.name,
          email: contactInformation.email,
          phone: contactInformation.phone,
        },
        media: {
          video: media.video,
        },
      };
      

      try {
        const response = await fetch('http://localhost:4000/api/listing/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          const listingData = await response.json();
          console.log('Listing created successfully:', listingData);
        } else {
          const errorData = await response.json();
          console.error('Error creating listing:', errorData);
        }
      } catch (error) {
        console.error('Error creating listing:', error);
      }
    };
    
    

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Add Listing Form
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={contactInformation.name}
                onChange={(e) => setContactInformation({ ...contactInformation, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={contactInformation.email}
                onChange={(e) => setContactInformation({ ...contactInformation, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={contactInformation.phone}
                onChange={(e) => setContactInformation({ ...contactInformation, phone: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Listing Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">
            Listing Details
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={listingDetails.title}
                onChange={(e) => setListingDetails({ ...listingDetails, title: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Enter description"
                value={listingDetails.description}
                onChange={(e) => setListingDetails({ ...listingDetails, description: e.target.value })}
              ></textarea>
            </div>
            <div>
              <label htmlFor="propertyType" className="block font-medium text-gray-700">
                Property Type
              </label>
              <select
                id="propertyType"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={listingDetails.propertyType}
                onChange={(e) => setListingDetails({ ...listingDetails, propertyType: e.target.value })}
              >
                <option value="">Select Property Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block font-medium text-gray-700">
                Property Status
              </label>
              <select
                id="status"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={listingDetails.propertyStatus}
                onChange={(e) => setListingDetails({ ...listingDetails, propertyStatus: e.target.value })}
              >
                <option value="">Select Property Status</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={listingDetails.price}
                onChange={(e) => setListingDetails({ ...listingDetails, price: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Location</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="address" className="block font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={location.address}
                onChange={(e) => setLocation({ ...location, address: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={location.city}
                  onChange={(e) => setLocation({ ...location, city: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="state" className="block font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={location.state}
                  onChange={(e) => setLocation({ ...location, state: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zip" className="block font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="ZIP Code"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={location.zip}
                  onChange={(e) => setLocation({ ...location, zip: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="country" className="block font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={location.country}
                  onChange={(e) => setLocation({ ...location, country: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Media Upload */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Media</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="imageUpload"
                className="block font-medium text-gray-700"
              >
                Upload Images
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                multiple
                onChange={(e) => setMedia({ ...media, images: e.target.files })}
              />
            </div>
            <div>
              <label
                htmlFor="videoUpload"
                className="block font-medium text-gray-700"
              >
                Upload Videos
              </label>
              <input
                type="file"
                id="videoUpload"
                accept="video/*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setMedia({ ...media, video: e.target.files[0] })}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mx-56">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

