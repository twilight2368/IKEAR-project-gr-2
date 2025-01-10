const clc = require("cli-color");
const app = require("./src/app");
const connectMongoDB = require("./src/models/connect");

const APP_CONFIG = require("./src/configs/app.config");
const { connectToRabbitMQ } = require("./src/utils/mq");
const PORT = APP_CONFIG.PORT;

const init = async () => {
  try {
    await connectMongoDB();
    await connectToRabbitMQ();
    app.listen(PORT, () => {
      console.log("====================================");
      console.log(
        "Server is listen on: " + clc.green("http://localhost:" + PORT)
      );
      console.log("====================================");
    });
  } catch (error) {
    console.log("====================================");
    console.error(error);
    console.log("====================================");
  }
};

init();
