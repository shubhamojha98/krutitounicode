// const express = require("express");
// const { krutiToUnicode } = require("./converter/krutiEngine");
// const { unicodeToEnglish } = require("./converter/Unicodetoenglish");
import express from "express";
import { krutiToUnicode } from "./converter/krutiEngine.js";
import { unicodeToEnglish } from "./converter/Unicodetoenglish.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "20mb" }));

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "KrutiDev API is running" });
});

// Conversion route
app.post("/convert", (req, res) => {
  try {
    const { text, texts } = req.body;

    // Single string
    if (text) {
      if (typeof text !== "string") {
        return res.status(400).json({ error: "text must be a string" });
      }
      return res.json({ original: text, unicode: krutiToUnicode(text) });
    }

    // Array of strings
    if (texts) {
      if (!Array.isArray(texts)) {
        return res.status(400).json({ error: "texts must be an array" });
      }
      const results = texts.map((t) => ({
        // original: t,
        unicode: krutiToUnicode(t),
      }));
      return res.json({ results });
    }

    return res.status(400).json({ error: "Provide either 'text' or 'texts'" });
  } catch (err) {
    console.error("Conversion error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── Unicode (Devanagari) → English Transliteration ───────────
app.post("/transliterate", (req, res) => {
  try {
    const { text, texts } = req.body;

    // Single string
    if (text) {
      if (typeof text !== "string")
        return res.status(400).json({ error: "text must be a string" });

      return res.json({
        original: text,
        english: unicodeToEnglish(text),
      });
    }

    // Array of strings
    if (texts) {
      if (!Array.isArray(texts))
        return res.status(400).json({ error: "texts must be an array" });

      const results = texts.map((t) => ({
        original: t,
        english: unicodeToEnglish(t),
      }));
      return res.json({ results });
    }

    return res.status(400).json({ error: "Provide either 'text' or 'texts'" });
  } catch (err) {
    console.error("Transliteration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── Kruti Dev → Unicode → English (Full pipeline) ────────────
app.post("/convert-to-english", (req, res) => {
  try {
    const { text, texts } = req.body;

    if (text) {
      if (typeof text !== "string")
        return res.status(400).json({ error: "text must be a string" });

      const unicode = krutiToUnicode(text);
      const english = unicodeToEnglish(unicode);
      return res.json({ original: text, unicode, english });
    }

    if (texts) {
      if (!Array.isArray(texts))
        return res.status(400).json({ error: "texts must be an array" });

      const results = texts.map((t) => {
        const unicode = krutiToUnicode(t);
        const english = unicodeToEnglish(unicode);
        return { original: t, unicode, english };
      });
      return res.json({ results });
    }

    return res.status(400).json({ error: "Provide either 'text' or 'texts'" });
  } catch (err) {
    console.error("Pipeline error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Single string conversion route (deprecated in favor of the more flexible /convert)Test
// app.post("/convert", (req, res) => {
//   try {
//     const input = req.body?.text;

//     if (!input || typeof input !== "string") {
//       return res.status(400).json({ error: "A valid 'text' string is required" });
//     }

//     const output = krutiToUnicode(input);

//     res.json({
//       original: input,
//       unicode: output,
//     });

//   } catch (err) {
//     console.error("Conversion error:", err);
//     res.status(500).json({ error: "Internal server error during conversion" });
//   }
// });

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
});

app.listen(PORT, () => {
  console.log(`KrutiDev API running on http://localhost:${PORT}`);
});
