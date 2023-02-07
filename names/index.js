const peopleNames = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");
const getPeopleinCity = (peopleNames) => {
  return firstName(peopleNames);
};
module.exports = getPeopleinCity;
