// ============================================================
// unicodeToEnglish.js
// Unicode (Devanagari)  →  English
// Strategy:
//   1. Dictionary lookup first  (govt/legal loanwords → exact English)
//   2. Transliteration fallback (all other Hindi words → romanized)
// Offline — no API required
// ============================================================

import { loanwordDict } from "./loanwordDict.js";

// ============================================================
// SECTION 1: TRANSLITERATION ENGINE
// Character-by-character Devanagari → Roman
// ============================================================

const consonantMap = {
    "\u0915": "k",  "\u0916": "kh", "\u0917": "g",  "\u0918": "gh", "\u0919": "ng",
    "\u091A": "ch", "\u091B": "chh","\u091C": "j",  "\u091D": "jh", "\u091E": "ny",
    "\u091F": "t",  "\u0920": "th", "\u0921": "d",  "\u0922": "dh", "\u0923": "n",
    "\u0924": "t",  "\u0925": "th", "\u0926": "d",  "\u0927": "dh", "\u0928": "n",
    "\u092A": "p",  "\u092B": "ph", "\u092C": "b",  "\u092D": "bh", "\u092E": "m",
    "\u092F": "y",  "\u0930": "r",  "\u0931": "rr", "\u0932": "l",  "\u0933": "l",
    "\u0935": "v",  "\u0936": "sh", "\u0937": "sh", "\u0938": "s",  "\u0939": "h",
    "\u0958": "k",  "\u0959": "kh", "\u095A": "g",  "\u095B": "z",  "\u095C": "r",
    "\u095D": "rh", "\u095E": "f",  "\u095F": "y",  "\u0929": "n",
};

const vowelMap = {
    "\u0905": "a",  "\u0906": "a",  "\u0907": "i",  "\u0908": "i",
    "\u0909": "u",  "\u090A": "u",  "\u090B": "ri",
    "\u090F": "e",  "\u0910": "ai", "\u0913": "o",  "\u0914": "au", "\u0911": "o",
};

const matraMap = {
    "\u093E": "a",  "\u093F": "i",  "\u0940": "i",  "\u0941": "u",  "\u0942": "u",
    "\u0943": "ri", "\u0947": "e",  "\u0948": "ai", "\u094B": "o",  "\u094C": "au",
    "\u0945": "a",  "\u0949": "o",
};

const anusvaraBefore = {
    "\u092A": "m", "\u092B": "m", "\u092C": "m", "\u092D": "m",
};

const digitMap = {
    "\u0966": "0", "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096A": "4",
    "\u096B": "5", "\u096C": "6", "\u096D": "7", "\u096E": "8", "\u096F": "9",
};

const punctMap = {
    "\u0964": ".", "\u0965": "...", "\u0970": ".", "\u093D": "",
};

const HALANT   = "\u094D";
const ANUSVARA = "\u0902";
const CHANDRAB = "\u0901";
const VISARGA  = "\u0903";
const NUKTA    = "\u093C";
const RA       = "\u0930";
const RA_NUKTA = "\u095C";

const isConsonant = (ch) => consonantMap[ch] !== undefined;
const isMatra     = (ch) => matraMap[ch] !== undefined;
const isVowel     = (ch) => vowelMap[ch] !== undefined;

const isAtWordEnd = (input, j) => {
    const nc = input[j];
    if (!nc || nc === " " || nc === "\n" || nc === "\r" || nc === "\u0964" || nc === "\u0965") return true;
    return !isConsonant(nc) && !isMatra(nc) && !isVowel(nc)
        && nc !== HALANT && nc !== ANUSVARA && nc !== CHANDRAB
        && nc !== VISARGA && nc !== NUKTA && !digitMap[nc];
};

const processCluster = (input, startI) => {
    let i = startI;
    const len = input.length;

    // Type-1 Reph: र् at start → 'r' before cluster
    let rephAtStart = false;
    if (input[i] === RA && input[i + 1] === HALANT && i + 2 < len && isConsonant(input[i + 2])) {
        rephAtStart = true;
        i += 2;
    }

    // Collect consonant chain
    const consonants   = [];
    const halantBefore = [];
    let ph = false;

    while (i < len && isConsonant(input[i])) {
        consonants.push(input[i]);
        halantBefore.push(ph);
        i++;
        if (input[i] === NUKTA) i++;
        if (input[i] === HALANT) {
            if (i + 1 < len && isConsonant(input[i + 1])) { ph = true; i++; }
            else { i++; break; }
        } else { ph = false; break; }
    }

    // Matra
    let matra = null;
    if (i < len && isMatra(input[i])) { matra = input[i]; i++; }

    // Nasal
    let nasal = null;
    if (i < len && (input[i] === ANUSVARA || input[i] === CHANDRAB)) {
        nasal = anusvaraBefore[input[i + 1]] || "n";
        i++;
    }

    const atEnd = isAtWordEnd(input, i);

    // Type-2 Reph: C₁ + र(not halant-joined) + C₂(halant-joined)
    let midRephIdx = -1;
    for (let k = 1; k < consonants.length - 1; k++) {
        if (consonants[k] === RA && !halantBefore[k] && halantBefore[k + 1]) {
            midRephIdx = k; break;
        }
    }

    // Vowel
    let vowelPart = "";
    if (matra) {
        vowelPart = matraMap[matra];
    } else if (!atEnd) {
        vowelPart = "a";
    } else {
        if (midRephIdx < 0) {
            const lastC = consonants[consonants.length - 1];
            vowelPart = (lastC === RA || lastC === RA_NUKTA) ? "a" : "";
        }
    }

    // Build roman
    let roman = "";
    if (rephAtStart) {
        roman = "r" + consonants.map((c) => consonantMap[c]).join("") + vowelPart;
    } else if (midRephIdx > 0) {
        const before = consonants.slice(0, midRephIdx).map((c) => consonantMap[c]).join("");
        const after  = consonants.slice(midRephIdx + 1).map((c) => consonantMap[c]).join("");
        roman = before + "a" + "r" + after + vowelPart;
    } else {
        roman = consonants.map((c) => consonantMap[c]).join("") + vowelPart;
    }

    if (nasal) roman += nasal;
    return { roman, newI: i };
};

const transliterate = (input) => {
    let result = "";
    let i = 0;
    const len = input.length;

    while (i < len) {
        const ch = input[i];
        if (digitMap[ch] !== undefined)      { result += digitMap[ch]; i++; continue; }
        if (punctMap[ch] !== undefined)      { result += punctMap[ch]; i++; continue; }
        if (ch === VISARGA)                  { result += "h"; i++; continue; }
        if (ch === HALANT || ch === NUKTA)   { i++; continue; }
        if (isVowel(ch))                     { result += vowelMap[ch]; i++; continue; }
        if (ch === ANUSVARA || ch === CHANDRAB) {
            result += anusvaraBefore[input[i + 1]] || "n"; i++; continue;
        }
        if (isConsonant(ch) || (ch === RA && input[i + 1] === HALANT)) {
            const { roman, newI } = processCluster(input, i);
            result += roman; i = newI; continue;
        }
        result += ch; i++;
    }
    return result;
};

// ============================================================
// SECTION 2: TOKENIZER
// Splits text into Devanagari words + non-Devanagari separators
// ============================================================
const tokenizeText = (input) => {
    return input.split(/([\s।,.!?;:()\[\]{}"'-]+)/);
};

// ============================================================
// MAIN EXPORT
// Process word by word:
//   1. Check loanword dictionary first
//   2. Fall back to transliteration
// ============================================================
export const unicodeToEnglish = (input) => {
    if (!input || typeof input !== "string") return input;

    const tokens = tokenizeText(input);

    return tokens.map((token) => {
        // Separator/punctuation — pass through
        if (!token || /^[\s।,.!?;:()\[\]{}"'-]+$/.test(token)) return token;

        // Dictionary lookup (exact word match)
        if (loanwordDict.has(token)) return loanwordDict.get(token);

        // Transliterate
        return transliterate(token);
    }).join("");
};

// module.exports = { unicodeToEnglish };
