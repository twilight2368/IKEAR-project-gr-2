const mongoose = require("mongoose");
const { Holiday, Product, Room } = require("./schemas/Item");
const DB_CONFIG = require("../configs/db.config");

const CONNECT_STRING = DB_CONFIG.stringConnect;
// Connect to MongoDB
mongoose
  .connect(CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));

// Sample data
const holidayData = [
  { name: "Christmas" },
  { name: "New Year" },
  { name: "Easter" },
  { name: "Thanksgiving" },
  { name: "Halloween" },
  { name: "New Lunar Year" },
];

const productData = [
  { name: "Bookcase" },
  { name: "Bed Frame" },
  { name: "Shelf Unit" },
  { name: "Armchair" },
  { name: "TV Stand" },
  { name: "Sofa" },
  { name: "Loveseat" },
  { name: "Coffee Table" },
  { name: "Dresser" },
  { name: "Desk" },
  { name: "Wing Chair" },
  { name: "Cushion" },
  { name: "Dining Table" },
  { name: "Office Desk" },
  { name: "Office Chair" },
  { name: "Wardrobe" },
  { name: "Rug" },
  { name: "Children's Table" },
  { name: "Side Table" },
  { name: "Sofa Bed" },
  { name: "Modular Sofa" },
  { name: "Storage Box" },
];

// Complete list of rooms inspired by IKEA
const roomData = [
  { name: "Living Room" },
  { name: "Bedroom" },
  { name: "Dining Room" },
  { name: "Kitchen" },
  { name: "Bathroom" },
  { name: "Home Office" },
  { name: "Kids' Room" },
  { name: "Outdoor" },
  { name: "Hallway" },
  { name: "Laundry Room" },
  { name: "Storage Room" },
  { name: "Guest Room" },
  { name: "Playroom" },
  { name: "Pantry" },
  { name: "Closet" },
];

// Seed data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Holiday.deleteMany({});
    await Product.deleteMany({});
    await Room.deleteMany({});

    // Insert new data
    await Holiday.insertMany(holidayData);
    await Product.insertMany(productData);
    await Room.insertMany(roomData);

    console.log("Data seeded successfully!");
  } catch (err) {
    console.error("Error seeding data", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seeding function
seedDatabase();
