const Mongoose = require('mongoose');

const accommodationSchema = new Mongoose.Schema({
  location: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },

  city: {
    type: 'string',
    required: true,
  },
  
  type: {
    type: 'string',
    required: true,
  },

  pricePerMonth: {
    type: 'number',
    required: true,
  },

  rooms: {
    type: 'number',
    required: true,
  },

  available: {
    type: 'boolean',
    required: true,
  },

  perks: {
    type: ['string']
  }
}, {
  timestamps: true,
});

const AccomodationModel = Mongoose.model('Accommodation', accommodationSchema);

module.exports = AccomodationModel;