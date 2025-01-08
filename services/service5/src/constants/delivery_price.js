const DELIVERY_PRICE = {
  "0-5": 5, // $5 for distances 0 to 5 miles
  "6-10": 8, // $8 for distances 6 to 10 miles
  "11-20": 12, // $12 for distances 11 to 20 miles
  "21-50": 20, // $20 for distances 21 to 50 miles
  "51+": 50, // $50 for distances over 50 miles
};

/**
 * Get the delivery price based on the distance.
 * @param {number} distance - The distance in miles.
 * @returns {number} - The delivery price in USD.
 */
function getDeliveryPrice(distance) {
  if (distance <= 5) return DELIVERY_PRICE["0-5"];
  if (distance <= 10) return DELIVERY_PRICE["6-10"];
  if (distance <= 20) return DELIVERY_PRICE["11-20"];
  if (distance <= 50) return DELIVERY_PRICE["21-50"];
  return DELIVERY_PRICE["51+"];
}

module.exports = {
  DELIVERY_PRICE,
  getDeliveryPrice,
};
