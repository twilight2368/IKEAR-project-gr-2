const mongoose = require("mongoose");
const { Item } = require("./schemas/Item");
const StoreModel = require("./schemas/Store");
const InventoryModel = require("./schemas/Inventory");
const DB_CONFIG = require("../configs/db.config");
const { publishToQueue } = require("../utils/mq");
const CONNECT_STRING = DB_CONFIG.stringConnect;
const EVENT_TYPE = require("../constants/mq/type");
// Connect to MongoDB
mongoose
  .connect(CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));

// Seed data
const seedDatabase = async () => {
  try {
    // Fetch all stores
    const stores = await StoreModel.find();
    if (stores.length === 0) {
      console.log("No stores found!");
      return;
    }

    // Fetch all items
    const items = await Item.find();
    if (items.length === 0) {
      console.log("No items found!");
      return;
    }

    // Create inventory for each store with each item and a fixed quantity of 10
    for (const store of stores) {
      for (const item of items) {
        const inventory = new InventoryModel({
          store: store._id,
          item: item._id,
          quantity: 10, // Fixed quantity of 10 for each item
        });
        await inventory.save();
        publishToQueue(
          "inventory",
          JSON.stringify({
            event: EVENT_TYPE.CREATE,
            data: inventory,
          })
        );
        console.log(
          `Inventory for ${item.name} at store ${store.name} created with quantity 10`
        );
      }
    }

    console.log("Seeding completed!");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed
seedDatabase();
