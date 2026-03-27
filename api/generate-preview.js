export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

   const response = await fetch(
  https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey},
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
        maxOutputTokens: 200,
      },
    }),
  }
);

   const data = await response.json();
console.log("Gemini response:", JSON.stringify(data, null, 2));

const text =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  data?.candidates?.[0]?.output ||
  data?.text ||
  "No response from AI";
    return res.status(200).json({ result: text });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
