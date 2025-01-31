// import Listing from '../models/listing.model.js'

// export const createListing = async (req, res, next) => {
//     try {
//         const listing = await Listing.create(req.body)
//         res.status(201).json({
//             success: true,
//             data: listing
//         })
//     }
//     catch (error) {
//         next(error)
// }}


import Listing from '../models/listing.model.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json({ success: true, data: listing });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ success: false, error: error.message });
    } else {
      next(error);
    }
  }
};

