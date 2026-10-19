import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

function getLangCode(lang) {
  const map = {
    English: "en",
    Spanish: "es",
    French: "fr",
    German: "de",
    Italian: "it",
    Portuguese: "pt",
    Japanese: "ja",
    Korean: "ko",
    Chinese: "zh-CN",
    Arabic: "ar",
    Hindi: "hi",
    Russian: "ru",
    Dutch: "nl",
    Turkish: "tr",
    Polish: "pl",
    Telugu: "te",
    Tamil: "ta"
  };
  return map[lang] || "auto";
}

app.post("/translate", async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const sourceCode = getLangCode(sourceLang);
    const targetCode = getLangCode(targetLang);

    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceCode}&tl=${targetCode}&dt=t&q=${encodeURIComponent(text)}`
    );

    const data = await response.json();
    const translated = data[0].map(item => item[0]).join("");

    res.json({ translated });

  } catch {
    res.status(500).json({ error: "Translation failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));