const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ask endpoint
app.post("/ask", (req, res) => {
  const question = req.body.question;

  console.log("User Question:", question);

  res.json({
    answer: "AI response will appear here"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
