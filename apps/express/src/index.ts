import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Durian Tree API 🌳");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

