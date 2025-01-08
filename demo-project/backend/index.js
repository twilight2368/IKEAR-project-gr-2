const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// CORS configuration to allow multiple methods (GET, POST, PUT, DELETE)
app.use(
  cors({
    origin: "http://your-allowed-origin.com", // Your front-end origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
    credentials: true, // Allow cookies to be sent and received
  })
);

// Configuration for microservices
const services = {
  auth_store_Management: "http://localhost:8001",
  product_inventory_Management: "http://localhost:8002",
  fav_cart_Management: "http://localhost:8003",
  order_payment_Management: "http://localhost:8004",
  delivery_logistics_Management: "http://localhost:8005",
  file_Management: "http://localhost:8006",
};

app.use(morgan("dev"));
app.use(morgan("combined"));

// Proxy routes
app.use(
  "/service_2",
  createProxyMiddleware({
    target: services.delivery_logistics_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service_3",
  createProxyMiddleware({
    target: services.fav_cart_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service_4",
  createProxyMiddleware({
    target: services.order_payment_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service_5",
  createProxyMiddleware({
    target: services.delivery_logistics_Management,
    changeOrigin: true,
    logger: console,
  })
);

app.use(
  "/service_1",
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
  "/service_6",
  createProxyMiddleware({
    target: services.file_Management,
    changeOrigin: true,
    logger: console,
  })
);

// Start the proxy server
const PORT = 5000; // Port for the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
