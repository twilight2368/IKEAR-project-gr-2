const app = require("./src/app");
const clc = require("cli-color");
const APP_CONFIG = require("./src/configs/app.config");
const connectMongoDB = require("./src/models/connect");

const PORT = APP_CONFIG.PORT || 8001;

app.listen(PORT, async () => {
  try {
    await connectMongoDB();

    console.log("====================================");
    console.log(
      "Server is running on: " + clc.green(`http://localhost:${PORT}`)
    );
    console.log("====================================");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
