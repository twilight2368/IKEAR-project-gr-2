const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy requests from React app to the Node backend
app.use(
  "/api", // Match all requests starting with "/api"
  createProxyMiddleware({
    target: "http://localhost:8080", // Your Node backend server
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Remove "/api" prefix when forwarding
    },
  })
);

// Start the proxy server
const PORT = 5000; // Port for the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
