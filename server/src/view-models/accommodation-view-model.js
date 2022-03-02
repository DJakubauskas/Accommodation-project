class AccommodationViewModel {
    constructor(accommodationModel) {
      this.id = accommodationModel._id;
      this.location = accommodationModel.location;
      this.description = accommodationModel.description;
      this.city = accommodationModel.city;
      this.type = accommodationModel.type;
      this.pricePerMonth = accommodationModel.pricePerMonth;
      this.rooms = accommodationModel.rooms;
      this.available = accommodationModel.available;
      this.perks = accommodationModel.perks;
      this.createdAt = accommodationModel.createdAt;
      this.updatedAt = accommodationModel.updatedAt;
    }
  }
  
  module.exports = AccommodationViewModel;
  