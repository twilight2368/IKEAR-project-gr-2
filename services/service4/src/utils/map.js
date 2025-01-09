const axios = require("axios");

// Replace with your Mapbox API key
const MAPBOX_API_KEY = "YOUR_MAPBOX_ACCESS_TOKEN";

/**
 * Get latitude and longitude for a given address using Mapbox Geocoding API.
 * @param {string} address - The address to geocode.
 * @returns {Promise<{lat: number, lon: number}>} - The latitude and longitude.
 */
async function geocodeAddress(address) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MAPBOX_API_KEY}&limit=1`;
  try {
    const response = await axios.get(url);

    if (response.data.features && response.data.features.length > 0) {
      const location = response.data.features[0].center;
      return { lon: location[0], lat: location[1] }; // Note Mapbox returns [longitude, latitude]
    } else {
      throw new Error("No results found for the given address");
    }
  } catch (error) {
    throw new Error(`Failed to fetch geocoding data: ${error.message}`);
  }
}

/**
 * Calculate the distance between two geographic coordinates using the Haversine formula.
 * @param {number} lat1 - Latitude of the first location in degrees.
 * @param {number} lon1 - Longitude of the first location in degrees.
 * @param {number} lat2 - Latitude of the second location in degrees.
 * @param {number} lon2 - Longitude of the second location in degrees.
 * @returns {number} - The distance between the two locations in miles.
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const R = 3958.8; // Radius of the Earth in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in miles
}

/**
 * Get the distance between two addresses.
 * @param {string} address1 - The first address.
 * @param {string} address2 - The second address.
 * @returns {Promise<number>} - The distance between the addresses in miles.
 */
async function getDistanceBetweenAddresses(address1, address2) {
  try {
    const coords1 = await geocodeAddress(address1);
    const coords2 = await geocodeAddress(address2);

    return calculateDistance(
      coords1.lat,
      coords1.lon,
      coords2.lat,
      coords2.lon
    );
  } catch (error) {
    throw new Error(`Error calculating distance: ${error.message}`);
  }
}

module.exports = {
  geocodeAddress,
  getDistanceBetweenAddresses,
  calculateDistance,
};
