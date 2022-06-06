import express from "express";
const app = express();
const PORT = 5000;

app.get("/munna", (req, res) => {
  res.send("HELLO");
});

app.post("/register", (req, res) => {
  const name = req.name;
  console.log(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
