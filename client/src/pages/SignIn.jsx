// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
// import { useDispatch, useSelector } from 'react-redux';


// export default function SignIn() {

// const {loading, error, currentUser} = useSelector((state) => state.user);
// const [formData, setFormData] = useState({})
// const navigate = useNavigate();
// const dispatch = useDispatch();

// const handleChange = (e) => {
//   setFormData({...formData, [e.target.id]: e.target.value});
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     dispatch(signInStart());
//     const response = await fetch('/api/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     if(data.success === false) {
//       dispatch(signInFailure(data.message));
//       return
//     }
//     console.log(data)
//     dispatch(signInSuccess(data));
//     navigate('/');
//   } catch (error) {
//     dispatch(signInFailure(error.message));
//   }
  
// };

//   return (
//     <div className='p-3 max-w-sm mx-auto bg-slate-300 mt-10 rounded-lg'>
//       <h1 className='text-center font-semibold my-7 text-3xl'>Sign In</h1>
//       <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//         <input id='email' type="email" placeholder="Email" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
//         <input id='password' type="password" placeholder="Password" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
//         <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg '>{loading ? 'Loading...' : 'Sign In'}</button>
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Dont have an account?</p>
//         <a href="/sign-up" className='text-blue-500'>Sign up</a>
//       </div>
//       {error && <p className='text-red-500 text-center'>{error}</p>}
//     </div>
//   )
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SignUp from './SignUp';

export default function SignIn({ toggleModal }) {
  const { loading, error, currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toggleModal();
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  if (showSignUp) {
    return <SignUp toggleModal={() => setShowSignUp(false)} />;
  }

  return (
    <div className="p-3 max-w-sm mx-auto bg-slate-300 mt-10 rounded-lg relative">
      <span
        className="absolute top-2 right-2 text-2xl cursor-pointer"
        onClick={toggleModal}
      >
        &#x2715;
      </span>
      <h1 className="text-center font-semibold my-7 text-3xl">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="bg-white-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="bg-white-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <a
          href="#"
          className="text-blue-500"
          onClick={(e) => {
            e.preventDefault();
            setShowSignUp(true);
          }}
        >
          Sign Up
        </a>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
}