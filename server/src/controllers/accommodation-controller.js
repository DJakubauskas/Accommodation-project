const AccommodationModel = require("../models/accommodation-model");
const AccommodationViewModel = require("../view-models/accommodation-view-model");

const getAccommodations = async (req, res) => {
  const accommodationDocs = await AccommodationModel.find();
  const accommodations = accommodationDocs.map(
    (accommodation) => new AccommodationViewModel(accommodation)
  );
  res.status(200).json({ accommodations });
};

const createAccommodation = async (req, res) => {
  const {
    location,
    description,
    city,
    type,
    pricePerMonth,
    rooms,
    available,
    perks,
  } = req.body;
  try {
    const accommodationDoc = await AccommodationModel.create({
      location,
      description,
      city,
      type,
      pricePerMonth,
      rooms,
      available,
      perks,
    });

    const accommodation = new AccommodationViewModel(accommodationDoc);
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra accommodation su tokiu pavadinimu: '${description}'`,
    });
  }
};

const getAccommodation = async (req, res) => {
  const { id } = req.params;
  try {
    const accommodationDoc = await AccommodationModel.findById(id);
    const accommodation = new AccommodationViewModel(accommodationDoc);
    res.status(404).json(accommodation);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteAccommodation = async (req, res) => {
  const { id } = req.params;
  try {
    const accommodationDoc = await AccommodationModel.findByIdAndDelete(id);
    const accommodation = new AccommodationViewModel(accommodationDoc);
    res.status(200).json(accommodation);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: "Accommodation nerastas",
    });
  }
};

const updateAccommodation = async (req, res) => {
  const { id } = req.params;
  const {
    location,
    description,
    city,
    type,
    pricePerMonth,
    rooms,
    available,
    perks,
  } = req.body;
  try {
    await AccommodationModel.findById(id);

    try {
      const accommodationDoc = await AccommodationModel.findByIdAndUpdate(
        id,
        {
          location,
          description,
          city,
          type,
          pricePerMonth,
          rooms,
          available,
          perks,
        },
        { new: true }
      );
      const accommodation = new AccommodationViewModel(accommodationDoc);
      res.status(200).json(accommodation);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Blogi parametrai" });
    }
  } catch (error) {
    res.status(404).json({ message: "Accommodation nerastas" });
  }
};

module.exports = {
  getAccommodations,
  createAccommodation,
  getAccommodation,
  deleteAccommodation,
  updateAccommodation,
};
