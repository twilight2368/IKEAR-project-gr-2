const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const { Holiday, Product, Room, Item } = require("./schemas/Item");
const DB_CONFIG = require("../configs/db.config");
const COLORS = require("../constants/item/color");
const SIZES = require("../constants/item/size");
const EVENT_TYPE = require("../constants/mq/type");
const { publishToExchange } = require("../utils/mq");

const CONNECT_STRING = DB_CONFIG.stringConnect;

console.log("====================================");
console.log(CONNECT_STRING);
console.log("====================================");

// Connect to MongoDB
mongoose
  .connect(CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));

// Helper function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Seed data
const seedDatabase = async () => {
  try {
    const COLOR_list = Object.values(COLORS);
    const SIZE_list = Object.values(SIZES);

    // Query for all Holidays, Products, and Rooms
    const holidays = await Holiday.find();
    const products = await Product.find();
    const rooms = await Room.find();

    if (!holidays.length || !products.length || !rooms.length) {
      console.error(
        "Ensure there are Holidays, Products, and Rooms in the database."
      );
      return;
    }

    console.log(
      `Found ${holidays.length} holidays, ${products.length} products, and ${rooms.length} rooms.`
    );

    let totalItemsCreated = 0;

    // Generate and insert 5 items for each combination of Room, Holiday, and Product
    for (const room of rooms) {
      for (const holiday of holidays) {
        for (const product of products) {
          const items = Array.from({ length: 5 }, async () => {
            const newItem = new Item({
              name: `Item ${nanoid()}`,
              description: `Description for Room: ${room.name}, Holiday: ${holiday.name}, Product: ${product.name}`,
              short_description: `Short description for Room: ${room.name}, Holiday: ${holiday.name}, Product: ${product.name}`,
              price: Math.floor(Math.random() * 100) + 10,
              color: getRandomElement(COLOR_list),
              size: getRandomElement(SIZE_list),
              image: [`image_url_1`, `image_url_2`],
              holiday: holiday._id,
              product: product._id,
              room: room._id,
            });

            await newItem.save();
            //console.log(`Item created: ${newItem.name}`);

            // Publish to RabbitMQ
            await publishToExchange(
              "product",
              JSON.stringify({
                event: EVENT_TYPE.CREATE,
                data: newItem,
              })
            );

            totalItemsCreated++;
          });

          // Wait for all items to be created
          await Promise.all(items);
        }
      }
    }

    console.log(
      `Seeding completed successfully. Total items created: ${totalItemsCreated}.`
    );
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedDatabase();
