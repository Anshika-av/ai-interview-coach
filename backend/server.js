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

// Generate Questions
app.post("/generate-questions", async (req, res) => {
  try {
    const { role, experience, company, difficulty } = req.body;

    const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

    const prompt = `
Generate 10 ${difficulty} difficulty ${experience} level interview questions
for ${role}
${company ? `for ${company} company` : ""}

Include both technical and HR questions.

Role: ${role}
Experience: ${experience}
Difficulty: ${difficulty}

Return only numbered questions.
`;

    const result = await model.generateContent(prompt);

    res.json({
      questions: result.response.text(),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate questions",
    });
  }
});

// AI Feedback
app.post("/feedback", async (req, res) => {
  try {
    const { answer } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a professional interview coach.

Evaluate this answer:

"${answer}"

Return ONLY in this exact format:

Technical Score: X
Communication Score: X
Confidence Score: X

Strengths:
- point 1
- point 2

Areas for Improvement:
- point 1
- point 2

Better Sample Answer:
(sample answer)

Scores should be out of 100.
`;

    const result = await model.generateContent(prompt);

   const text = result.response.text();

const technical =
  Number(text.match(/Technical Score:\s*(\d+)/)?.[1]) || 80;

const communication =
  Number(text.match(/Communication Score:\s*(\d+)/)?.[1]) || 80;

const confidence =
  Number(text.match(/Confidence Score:\s*(\d+)/)?.[1]) || 80;

res.json({
  feedback: text,
  technical,
  communication,
  confidence,
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate feedback",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});