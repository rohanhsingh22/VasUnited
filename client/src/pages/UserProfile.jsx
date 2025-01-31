import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart
} from '../redux/user/userSlice';

const UserProfile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  // Example user data (state for managing user info)
  // const [user, setUser] = useState({
  //   name: currentUser.username,
  //   email: currentUser.email,
  //   phone: currentUser.phone,
  //   password: currentUser.password,
  //   profileImage: currentUser.avatar,
  // });

  const [isEditing, setIsEditing] = useState(false); // Toggle between view and edit modes
  const [newImage, setNewImage] = useState(null); // Temporary image preview

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl);
    }
  };

  // Handle save action
  const handleSave = () => {
    if (newImage) {
      setUser((prevUser) => ({ ...prevUser, profileImage: newImage }));
      setNewImage(null);
    }
    axios.patch(`/api/user/profile`, user)
      .then((response) => {
        alert("Profile updated successfully!");
        setIsEditing(false); // Exit editing mode
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle cancel action
  const handleCancel = () => {
    setNewImage(null); // Clear any unsaved image
    setIsEditing(false); // Exit editing mode without saving
  };

  // Handle Listing action
  const handleShowListing = () => {
    axios.get(`/api/user/listing`)
      .then((response) => {
        console.log(response.data);
        alert("Listing show successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.status === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      } 
      dispatch(deleteUserSuccess(data));
      window.location.href = '/'; 
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden w-full">
        {/* Profile Header */}
        <div className="bg-blue-500 text-white text-center py-6">
          <div className="relative">
            <img src={newImage || currentUser.avatar} alt="Profile" className="mx-auto w-24 h-24 rounded-full border-4 border-white object-cover" />
            {isEditing && (
              <div className="mt-4">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-gray-600" />
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold mt-4">
            {isEditing ? "Edit Profile" : currentUser.username}
          </h1>
        </div>
        {/* Profile Content */}
        <div className="p-6">
          {isEditing ? (
            <form className="space-y-4">
              {/* Editable Fields */}
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input type="text" name="name" defaultValue={currentUser.username} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input type="email" name="email" defaultValue={currentUser.email} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input type="text" name="phone" defaultValue={currentUser.phone} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input type="password" placeholder="password" onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              {/* Action Buttons */}
          <div className="flex space-x-4">
            <button type="button" onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" > Save </button>
            <button type="button" onClick={handleCancel} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600" > Cancel </button>
          </div>
        </form>
      ) : (
        <div>
          {/* Display Profile Information */}
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <ul className="space-y-2 text-gray-700">
            <li> <strong>Name:</strong> {currentUser.username} </li>
            <li> <strong>Email:</strong> {currentUser.email} </li>
            <li> <strong>Phone:</strong> {currentUser.phone} </li>
            <li> <strong>Password:</strong></li>
          </ul>
          {/* Edit and Sign Out Buttons */}
          <div className="mt-6 flex justify-around">
            <button onClick={() => setIsEditing(true)} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" > Edit Profile </button>
            <button onClick={handleShowListing} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" > Show Listing </button>
            <button onClick={handleSignOut} className=" bg-red-700 text-white py-2 px-4 rounded hover:bg-red-400" > Sign Out </button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

);
};

export default UserProfile;

