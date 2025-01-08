import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <h1 className='font-bold text-sm sm:text-xl'>Vas United</h1>
            <form className='bg-slate-100 p-3 rounded-lg'>
                <input type="search" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='text-slate-700 sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='/contact'>
                    <li className='text-slate-700 sm:inline hover:underline'>Contact</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='text-slate-700 sm:inline hover:underline'>Sign in</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
