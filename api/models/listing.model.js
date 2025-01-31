import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true,
    enum: ['House', 'Apartment', 'Condo']
  },
  propertyStatus: {
    type: String,
    required: true,
    enum: ['For Sale', 'For Rent']
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    amenities: [{ type: String }],
    additionalFeatures: [{ type: String }]
  },
  location: {
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    },
    country: {
      type: String
    }
  },
  media: {
    images: [{ type: String }],
    video: {
      type: String
    }
  },
  contactInformation: {
    agentName: {
      type: String
    },
    agentEmail: {
      type: String
    },
    agentPhone: {
      type: String
    }
  },
  additionalInformation: {
    additionalNotes: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Listing = mongoose.model("Listing" , listingSchema)

export default Listing;