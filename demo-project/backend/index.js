const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const cors = require("cors");
const clc = require("cli-color");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Configuration for microservices
const services = {
  auth_store_Management: "http://localhost:8001",
  product_inventory_Management: "http://localhost:8002",
  fav_cart_Management: "http://localhost:8003",
  order_payment_delivery_logistics_Management: "http://localhost:8004",
  file_Management: "http://localhost:8005",
};

 app.use(morgan("dev"));


// Proxy routes
app.use(
  "/service2",
  createProxyMiddleware({
    target: services.product_inventory_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service3",
  createProxyMiddleware({
    target: services.fav_cart_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service4",
  createProxyMiddleware({
    target: services.order_payment_delivery_logistics_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service1",
  createProxyMiddleware({
    target: services.auth_store_Management,
    changeOrigin: true,
    logger: console,
  })
);

// app.use(
//   "/auth",
//   createProxyMiddleware({
//     target: services.userManagement,
//     changeOrigin: true,
//     onProxyReq: (proxyReq, req, res) => {
//       //TODO:  Forward the client's cookies to the backend server
//       if (req.headers.cookie) {
//         proxyReq.setHeader("cookie", req.headers.cookie);
//       }
//     },
//     onProxyRes: (proxyRes, req, res) => {
//       //TODO: Forward backend server's cookies to the client
//       const cookies = proxyRes.headers["set-cookie"];
//       if (cookies) {
//         res.setHeader("set-cookie", cookies);
//       }
//     },
//     logger: console,
//   })
// );

//! NOTE: NOT USING FOR NOW
app.use(
  "/service6",
  createProxyMiddleware({
    target: services.file_Management,
    changeOrigin: true,
    logger: console,
  })
);

// Start the proxy server
const PORT = 5000; // Port for the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on: ` + clc.blue(`http://localhost:${PORT}`));
});
