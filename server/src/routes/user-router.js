const express = require('express');

const {
  getUsers,
  updateUser,
  createUser,
} = require('../controllers/user-controller');

const router = express.Router();


router.get('/', getUsers);

router.patch('/', updateUser);

module.exports = router;