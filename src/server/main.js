import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

import users from "./routes/Users.js";

import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const app = express();
// for production mode but were using vite atm
// ViteExpress.config({ mode: "production" })

// Middleware
app.use(cors());
app.use(express.json());

// body parser
app.use(express.json());

app.use("/api", users);

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from Express API!",
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: "Item A", value: 42, word: "fourty two" },
      { id: 2, name: "Item B", value: 100, word: "one hundred" },
      { id: 3, name: "Item C", value: 75, word: "seventy five" },
    ],
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
