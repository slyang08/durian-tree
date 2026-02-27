import cors from "cors";
import express from "express";

import { Product } from "@liushushu/types";

const app = express();
app.use(cors());
const PORT = 8080;

const products: Product[] = [
    { id: 1, name: "Musang King", price: 120 },
    { id: 2, name: "D24", price: 80 },
  ];

app.get("/", (req, res) => {
  res.send("Durian Tree API 🌳");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
