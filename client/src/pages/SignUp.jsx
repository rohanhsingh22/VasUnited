import { set } from 'mongoose';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({})
const [checked, setChecked] = useState(false);
const navigate = useNavigate();

const handleChange = (e) => {
  const { id, value, type, checked } = e.target;

  if (type === 'checkbox') {
    setFormData({ ...formData, [id]: checked });
    setChecked(checked);
  } else if (type === 'select-one') {
    setFormData({ ...formData, [id]: value });
  } else {
    setFormData({ ...formData, [id]: value });
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setError('Passwords do not match');
      return; 
    }
    const response = await fetch('/api/auth/signup', {
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
    navigate('/sign-in');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
  
};

  return (
    <div className='p-3 max-w-sm mx-auto bg-slate-300 mt-10 rounded-lg'>
      <h1 className='text-center font-semibold my-7 text-3xl'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input id='username' type="text" placeholder="Username" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='email' type="email" placeholder="Email" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='password' type="password" placeholder="Password" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='paswword' type="password" placeholder="Confirm Password" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='phone' type="text" placeholder="Phone Number" className='bg-white-100 p-3 rounded-lg' onChange={handleChange}/>
        <select name="userType" id="userType" className='bg-white-100 p-3 rounded-lg ' onChange={handleChange}>
          <option >Select User Type</option>
          <option value="user" >User</option>
          <option value="agent">Agent</option>
          <option value="builder">Builder</option>
          <option value="agency">Agency</option>
        </select>
        <div className='flex items-center gap-2'>
          <input id='termsAccepted' type="checkbox" checked={checked} onChange={handleChange} />
          <label htmlFor='termsAccepted'>I agree to the terms and conditions</label>
        </div>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg '>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <a href="/sign-in" className='text-blue-500'>Sign in</a>
      </div>
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  )
}
