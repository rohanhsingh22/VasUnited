import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({})
const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({...formData, [e.target.id]: e.target.value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setLoading(false);
    if(data.success === false) {
      setLoading(false);
      setError(data.message);
      return
    }
    setLoading(false);
    navigate('/');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
  
};

  return (
    <div className='p-3 max-w-sm mx-auto bg-slate-300 mt-10 rounded-lg'>
      <h1 className='text-center font-semibold my-7 text-3xl'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input id='email' type="email" placeholder="Email" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='password' type="password" placeholder="Password" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg '>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <a href="/sign-up" className='text-blue-500'>Sign up</a>
      </div>
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  )
}
