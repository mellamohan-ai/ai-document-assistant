const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

/** 
 * 1. FIXING PATHS: 
 * If your 'frontend' folder is in the same folder as your server script, use "./frontend"
 * If 'frontend' is outside the backend folder, keep "../frontend"
 */
const frontendPath = path.join(__dirname, "../frontend");

// Serve static files (CSS, JS, Images)
app.use(express.static(frontendPath));

// Homepage - explicitly serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Error: index.html not found at " + frontendPath);
    }
  });
});

// AI Ask endpoint
app.post("/ask", (req, res) => {
  const { question } = req.body;

  console.log("User asked:", question);

  // Here is where you will eventually plug in OpenAI/Gemini logic
  res.json({
    answer: `You asked: "${question}". This is a placeholder response from the server.`
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is live! View the UI here: http://localhost:${PORT}`);
});
Use code with caution.

Improvements:
Error Handling: The server will indicate if index.html is missing and specify the expected location.
Path Variable: The path is stored in a variable (frontendPath) for easier modification if the folder structure changes.
Cleaner Logic: It uses destructuring (const { question } = req.body).
Troubleshooting:
If the server still displays the old "Backend Running" text, stop the server (Ctrl+C) and run a command in the terminal to check if another process is using that port:
Windows: netstat -ano | findstr :3000
Mac/Linux: lsof -i :3000
