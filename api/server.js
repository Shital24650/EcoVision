// api/chat.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userMessage } = req.body;

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [{ role: "user", content: userMessage }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      res.status(200).json({ reply: data.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ reply: "Error connecting to Groq API" });
    }
  } else {
    res.status(405).json({ reply: "Method not allowed" });
  }
}
