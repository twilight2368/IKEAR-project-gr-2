const app = require("./src/app");
const clc = require("cli-color");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("====================================");
  console.log("Server is running on: " + clc.green(`http://localhost:${PORT}`));
  console.log("====================================");
});
