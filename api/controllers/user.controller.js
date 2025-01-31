import User from '../models/user.model.js';
import Listing from '../models/listing.model.js';

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user profile' });
  }
};

export const getListing = async (req, res) => {
  try {
    const userId = req.user._id;
    const listing = await Listing.find({ userId });
    res.json(listing);
  } catch (error) {
    res.status(404).json({ message: 'Listing not found' });
  }
};
