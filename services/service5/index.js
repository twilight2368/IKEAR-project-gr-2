const clc = require("cli-color");
const app = require("./src/app");
const connectMongoDB = require("./src/models/connect");

const APP_CONFIG = require("./src/configs/app.config");

const PORT = APP_CONFIG.PORT;

const init = async () => {
  try {
    await connectMongoDB();

    app.listen(PORT, () => {
      console.log("====================================");
      console.log(
        "Server is running on: " + clc.green(`http://localhost:${PORT}`)
      );
      console.log("====================================");
    });
  } catch (error) {
    console.log("====================================");
    console.error(error);
    console.log("====================================");
    process.exit(1);
  }
};

init();
