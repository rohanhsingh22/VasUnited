// import React from 'react'
// import { Link } from 'react-router-dom'
// import { RiUserAddLine } from 'react-icons/ri'
// import { MdPhone } from 'react-icons/md'
// import { useSelector } from 'react-redux'

// export default function Header() {
//   const { currentUser } = useSelector(state => state.user)
//   return (
//     <header className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
//       <div className='mx-auto flex justify-between items-center p-4 h-20 md:h-22 lg:h-24'>
//         <div className='hidden sm:flex gap-4 md:gap-8 lg:gap-8'>
//           <Link to="/">Home</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/propertylisting">Listing</Link>
//           <Link to="/propertydetails">Details</Link>
//           <Link to="/about">About</Link>
//         </div>
//         <h1 className='font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl'>Vas United</h1>
//         <ul className='flex gap-4 md:gap-5 lg:gap-7 items-center'>
//           <a href="tel:+1-000-555-6789" className='hidden lg:flex items-center gap-1'>
//             <span>
//               <MdPhone size={23} color='#2563eb' style={{ fontWeight: 'bold' }} />
//             </span>+1 (000) 555-6789
//           </a>

//           <Link to={currentUser? '/userprofile': '/sign-in'}>
//           {currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar}/>) : <li className='sm:inline'>
//               <RiUserAddLine color='#ffffff' className='bg-blue-500 text-2xl rounded-full font-bold h-7 w-7 px-2'/>
//             </li>}
//           </Link>
//           <Link to={'/createlisting'}>
//             <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
//               Add Listing
//             </button>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   )
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiUserAddLine } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import SignIn from '../pages/SignIn'; // Import the SignIn component

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle the modal visibility
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex justify-between items-center p-4 h-20 md:h-22 lg:h-24">
        <div className="hidden sm:flex gap-4 md:gap-8 lg:gap-8">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/propertylisting">Listing</Link>
          <Link to="/propertydetails">Details</Link>
          <Link to="/about">About</Link>
        </div>
        <h1 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl">Vas United</h1>
        <ul className="flex gap-4 md:gap-5 lg:gap-7 items-center">
          <a href="tel:+1-000-555-6789" className="hidden md:flex items-center gap-1">
            <span>
              <MdPhone size={23} color="#2563eb" style={{ fontWeight: 'bold' }} />
            </span>
            +1 (000) 555-6789
          </a>

          {currentUser ? (
<Link to="/userprofile">
<img
className="rounded-full h-8 w-8 object-cover"
src={currentUser.avatar}
/>
</Link>
) : (
<button onClick={toggleModal}>
<RiUserAddLine
color="#ffffff"
className="bg-blue-500 text-2xl rounded-full font-bold w-8 h-8 px-2"
size={15}
/>
</button>
)}

          <Link to={'/createlisting'}>
            <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
              Add Listing
            </button>
          </Link>
        </ul>
      </div>

      {/* Render Modal for SignIn */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className=" p-6 rounded-lg w-96">
            <SignIn toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </header>
  );
}
