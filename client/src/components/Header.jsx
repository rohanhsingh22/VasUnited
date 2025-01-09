import React from 'react'
import { Link } from 'react-router-dom'
import { RiUserAddLine } from 'react-icons/ri'
import { MdPhone } from 'react-icons/md'

export default function Header() {
  return (
    <header className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='mx-auto flex justify-between items-center p-4 h-20 md:h-22 lg:h-24'>
        <h1 className='font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl'>Vas United</h1>
        <div className='hidden sm:flex gap-4 md:gap-8 lg:gap-12'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/propertylisting">Listing</Link>
          <Link to="/propertydetails">Details</Link>
          <Link to="/about">About</Link>
        </div>
        <ul className='flex gap-4 md:gap-5 lg:gap-7 items-center'>
          <a href="tel:+1-000-555-6789" className='hidden md:flex items-center gap-1'>
            <span>
              <MdPhone size={23} color='#2563eb' style={{ fontWeight: 'bold' }} />
            </span>+1 (000) 555-6789
          </a>

          <Link to='/sign-in' className='bg-blue-500 rounded-full p-2 w-fit'>
            <li className='sm:inline'>
              <RiUserAddLine size={14} color='#ffffff' style={{ fontWeight: 'bold' }} />
            </li>
          </Link>
          <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Add Listing
          </button>
        </ul>
      </div>
    </header>
  )
}
