const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("AI Document Assistant Backend Running");
});

// Question endpoint
app.post("/ask", (req, res) => {
  const question = req.body.question;

  console.log("User Question:", question);

  // temporary response
  res.json({
    answer: "AI response will appear here"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});// Backend server for AI Document Assistant
