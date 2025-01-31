import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthPopup = ({ isOpen, onClose, isSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-1/2">
        {isSignIn ? <SignIn onClose={onClose} /> : <SignUp onClose={onClose} />}
        <button
          className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AuthPopup;

