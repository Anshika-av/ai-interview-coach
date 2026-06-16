require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.post("/generate-questions", async (req, res) => {
  try {
    const { role, experience } = req.body;

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    const prompt = `
Generate 10 interview questions for:

Role: ${role}
Experience: ${experience}

Return only numbered questions.
`;

    const result = await model.generateContent(prompt);

    res.json({
      questions: result.response.text(),
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

    if (error.response) {
  console.error("Response:", error.response);
}

    res.status(500).json({
      error: "Failed to generate questions",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});