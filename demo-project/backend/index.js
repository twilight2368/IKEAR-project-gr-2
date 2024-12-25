const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const app = express();

// Configuration for microservices
const services = {
  productCatalog: "http://localhost:3001",
  inventoryManagement: "http://localhost:3002",
  orderManagement: "http://localhost:3003",
  deliveryLogistics: "http://localhost:3004",
  authManagement: "http://localhost:3005",
};

app.use(morgan("dev"));
app.use(morgan("combined"));

// Proxy routes
app.use(
  "/products",
  createProxyMiddleware({ target: services.productCatalog, changeOrigin: true })
);

app.use(
  "/inventory",
  createProxyMiddleware({
    target: services.inventoryManagement,
    changeOrigin: true,
  })
);
app.use(
  "/orders",
  createProxyMiddleware({
    target: services.orderManagement,
    changeOrigin: true,
  })
);
app.use(
  "/delivery",
  createProxyMiddleware({
    target: services.deliveryLogistics,
    changeOrigin: true,
  })
);

app.use(
  "/auth",
  createProxyMiddleware({
    target: services.userManagement,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      //TODO:  Forward the client's cookies to the backend server
      if (req.headers.cookie) {
        proxyReq.setHeader("cookie", req.headers.cookie);
      }
    },
    onProxyRes: (proxyRes, req, res) => {
      //TODO: Forward backend server's cookies to the client
      const cookies = proxyRes.headers["set-cookie"];
      if (cookies) {
        res.setHeader("set-cookie", cookies);
      }
    },
    logger: console,
  })
);

// Start the proxy server
const PORT = 5000; // Port for the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
