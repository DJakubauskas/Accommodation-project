// email
// password

// pagal šį modelį sukurti prisijungimą


const Mongoose = require('mongoose');

const userModel = new Mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: isEmail,
      message: 'Incorrect email format',
    },
    unique: true,
  },
  password: {
    type: 'string',
    required: true,
  }
});


const UserModel = Mongoose.model('User', userModel);

module.exports = UserModel;