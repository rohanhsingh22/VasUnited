import React from "react";
import { MdEmail } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { MdPhoneIphone } from 'react-icons/md';
import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-blue-950 text-white p-8 relative bottom-0 left-0 w-full text-center ">
      <div className="flex flex-wrap justify-around gap-8 md:gap-12 mx-28">
     
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg mb-4">Contact Us</h1>
          <p className="text-gray-400 mb-2 flex gap-1 "> <span className="mt-1"><MdLocationOn/></span>
            3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755
            Commercial OR 97302
          </p>
          <p className="text-gray-400 mb-1 flex gap-1"> <span className="mt-1" ><MdPhone/></span>(305) 555-4446</p>
          <p className="text-gray-400 mb-1 flex gap-1"> <span className="mt-1"><MdPhoneIphone/></span>(305) 555-4555</p>
          <p className="text-gray-400 mb-1 flex gap-1"> <span className="mt-1"><MdEmail/></span>youremail@gmail.com</p>
          <p className="text-gray-400 flex gap-1"> <span className="mt-1"><MdComputer/></span>VAS UNITED</p>

          <div className="flex gap-4 mt-6 "> 
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"><FaFacebook  className="items-center m-2 " size={20}/></span>
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"><FaWhatsapp className="items-center m-2 "  size={20}/></span>  
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"> <FaTelegram className="items-center m-2 "  size={20}/></span>
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"> <FaTwitter className="items-center m-2 "  size={20}/></span>
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"><FaYoutube className="items-center m-2 "  size={20}/></span> 
          <span className="bg-blue-900 h-9 w-9 items-center hover:bg-blue-600 rounded-md transition duration-300 ease-in-out cursor-pointer"><FaInstagram className="items-center m-2 "  size={20}/></span> 
        </div>
      </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg mb-4">Lists by Category</h1>
          <ul className="text-gray-400 mb-2 flex flex-col items-start">
            <li className="mb-1">
              <a href="#" className="hover:text-white">
                Apartments (17)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Condos (8)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Houses (5)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Industrial (1)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Land (1)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Offices (2)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Retail (4)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Villas (4)
              </a>
            </li>
          </ul>
        </div>
    
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg mb-4">Latest Properties</h1>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center flex flex-row justify-between items-center flex-wrap">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Vas United. All Rights Reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Documentation
          </a>
          |
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Video Tutorial
          </a>
          |
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Client Support
          </a>
        </div>
      </div>
    </footer>
  );
}