const express = require('express');
const {
    getAccommodations,
    createAccommodation,
    getAccommodation,
    deleteAccommodation,
    updateAccommodation,
} = require('../controllers/accommodation-controller');

const router = express.Router();

//GET THEM ALL
router.get('/', getAccommodations);
//POST
router.post('/', createAccommodation)
//GET WITH ID
router.get('/:id', getAccommodation);
//DELETE
router.delete('/:id', deleteAccommodation);
//PATCH
router.patch('/:id', updateAccommodation);


module.exports = router;