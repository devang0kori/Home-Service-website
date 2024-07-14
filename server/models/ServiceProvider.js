// Import Mongoose
const mongoose = require('mongoose');

// Define the schema
const serviceProviderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  serviceProviderImage: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  landmark: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Category"
  },
  subcategories: {
    type: [String],
    required: true
  }
});

// Create a model from the schema
const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

// Export the model
module.exports = ServiceProvider;
