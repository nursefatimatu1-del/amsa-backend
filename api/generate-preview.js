[15:20, 3/27/2026] Fasatu Digital and Ai: export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const prompt = req.body?.prompt;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await fetch(
      https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey},
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
      …
[15:46, 3/27/2026] Fasatu Digital and Ai: export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await fetch(
      https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey},
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    const data = await response.json();

    return res.status(200).json({
      google_status: response.status,
      google_reply: data
    });

  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
      details: error.message
    });
  }
}
