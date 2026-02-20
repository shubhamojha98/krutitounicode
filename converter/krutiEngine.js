// ============================================================
// krutiEngine.js
// Kruti Dev 010  →  Unicode (Devanagari) converter
// Logic ported from a proven working implementation.
// ============================================================

export const krutiToUnicode = (input) => {
    if (!input || typeof input !== "string") return input;

    let modified_substring = input;

    // ─────────────────────────────────────────────────────────
    // ARRAY ONE  →  ARRAY TWO   (Kruti → Unicode)
    // Ordered exactly as in the working source (longest first
    // where it matters — the for-loop handles one at a time).
    // ─────────────────────────────────────────────────────────

    const array_one = [
        "\u00F1","Q+Z","sas","aa",")Z","ZZ","\u2018","\u2019","\u201C","\u201D",

        "\u00E5","\u0192","\"","\u2026","\u2020","\u2021","\u02C6","\u2030","\u0160","\u2039",

        "\u00B6+","d+","[+k","[+","x+","T+","t+","M+","<+","Q+",";+","j+","u+",
        "\u00D9k","\u00D9","\u00E4","\u2013","\u2014","\u00E9","\u2122","=kk","f=k",

        "\u00E0","\u00E1","\u00E2","\u00E3","\u00BAz","\u00BA","\u00ED","{k","{","=","\u00AB",
        "N\u00EE","V\u00EE","B\u00EE","M\u00EE","<\u00EE","|","K","}",
        "J","V\u00AA","M\u00AA","<\u00AA\u00AA","N\u00AA","\u00D8","\u00DD","nzZ","\u00E6","\u00E7","\u00C1","xz","#",":",

        "v\u201A","vks","vkS","vk","v","b\u00B1","\u00C3","bZ","b","m","\u00C5",",s",",","_",

        "\u00F4","d","Dk","D","\u00A3","[k","[","x","Xk","X","\u00C4","?k","?","\u00B3",
        "p","Pk","P","N","t","Tk","T",">","\u00F7","\u00A5",

        "\u00EA","\u00EB","V","B","\u00EC","\u00EF","M+","<+","M","<",".k",".",
        "r","Rk","R","Fk","F",")","n","/k","\u00E8k","/"  ,"\u00CB","\u00E8","u","Uk","U",

        "i","Ik","I","Q","\u00B6","c","Ck","C","Hk","H","e","Ek","E",
        ";","\u00B8","j","y","Yk","Y","G","o","Ok","O",
        "'k","'","\"k","\"","l","Lk","L","g",

        "\u00C8","z",
        "\u00CC","\u00CD","\u00CE","\u00CF","\u00D1","\u00D2","\u00D3","\u00D4","\u00D6","\u00D8","\u00D9","\u00DCk","\u00DC",

        "\u201A","\u00A8","ks","\u00A9","kS","k","h","q","w","`","s","\u00A2","S",
        "a","\u00A1","%","W","\u2022","\u00B7","\u2219","\u00B7","~j","~","\\","+"," \u0903",
        "^","*","\u00DE","\u00DF","(","\u00BC","\u00BD","\u00BF","\u00C0","\u00BE","A","-","&","&","\u0152","]","~ ","@",
        "\u093E\u0947","\u093E\u0949","\u0902\u0948","\u0947\u094D\u0930","\u0905\u094C","\u0905\u094B","\u0906\u0949"
    ];

    const array_two = [
        "\u0970","QZ+","sa","a","\u0930\u094D\u0926\u094D\u0927","Z","\"","\"","'","'",

        "\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F",

        "\u092B\u093C\u094D","\u0958","\u0959","\u0959\u094D","\u095A","\u095B\u094D","\u095B","\u095C","\u095D","\u095E","\u095F","\u0931","\u0929",
        "\u0924\u094D\u0924","\u0924\u094D\u0924\u094D","\u0915\u094D\u0924","\u0926\u0943","\u0915\u0943","\u0928\u094D\u0928","\u0928\u094D\u0928\u094D","=k","f=",

        "\u0939\u094D\u0928","\u0939\u094D\u092F","\u0939\u0943","\u0939\u094D\u092E","\u0939\u094D\u0930","\u0939\u094D","\u0926\u094D\u0926","\u0915\u094D\u0937","\u0915\u094D\u0937\u094D","\u0924\u094D\u0930","\u0924\u094D\u0930\u094D",
        "\u091B\u094D\u092F","\u091F\u094D\u092F","\u0920\u094D\u092F","\u0921\u094D\u092F","\u0922\u094D\u092F","\u0926\u094D\u092F","\u091C\u094D\u091E","\u0926\u094D\u0935",
        "\u0936\u094D\u0930","\u091F\u094D\u0930","\u0921\u094D\u0930","\u0922\u094D\u0930","\u091B\u094D\u0930","\u0915\u094D\u0930","\u092B\u094D\u0930","\u0930\u094D\u0926\u094D\u0930","\u0926\u094D\u0930","\u092A\u094D\u0930","\u092A\u094D\u0930","\u0917\u094D\u0930","\u0930\u0941","\u0930\u0942",

        "\u0911","\u0913","\u0914","\u0906","\u0905","\u0908\u0902","\u0908","\u0908","\u0907","\u0909","\u090A","\u0910","\u090F","\u090B",

        "\u0915\u094D\u0915","\u0915","\u0915","\u0915\u094D","\u0916","\u0916","\u0916\u094D","\u0917","\u0917","\u0917\u094D","\u0918","\u0918","\u0918\u094D","\u0919",
        "\u091A","\u091A","\u091A\u094D","\u091B","\u091C","\u091C","\u091C\u094D","\u091D","\u091D\u094D","\u091E",

        "\u091F\u094D\u091F","\u091F\u094D\u0920","\u091F","\u0920","\u0921\u094D\u0921","\u0921\u094D\u0922","\u095C","\u095D","\u0921","\u0922","\u0923","\u0923\u094D",
        "\u0924","\u0924","\u0924\u094D","\u0925","\u0925\u094D","\u0926\u094D\u0927","\u0926","\u0927","\u0927","\u0927\u094D","\u0927\u094D","\u0927\u094D","\u0928","\u0928","\u0928\u094D",

        "\u092A","\u092A","\u092A\u094D","\u092B","\u092B\u094D","\u092C","\u092C","\u092C\u094D","\u092D","\u092D\u094D","\u092E","\u092E","\u092E\u094D",
        "\u092F","\u092F\u094D","\u0930","\u0932","\u0932","\u0932\u094D","\u0933","\u0935","\u0935","\u0935\u094D",
        "\u0936","\u0936\u094D","\u0937","\u0937\u094D","\u0938","\u0938","\u0938\u094D","\u0939",

        "\u0940\u0902","\u094D\u0930",
        "\u0926\u094D\u0926","\u091F\u094D\u091F","\u091F\u094D\u0920","\u0921\u094D\u0921","\u0915\u0943","\u092D","\u094D\u092F","\u0921\u094D\u0922","\u091D\u094D","\u0915\u094D\u0930","\u0924\u094D\u0924\u094D","\u0936","\u0936\u094D",

        "\u0949","\u094B","\u094B","\u094C","\u094C","\u093E","\u0940","\u0941","\u0942","\u0943","\u0947","\u0947","\u0948",
        "\u0902","\u0901","\u0903","\u0945","\u093D","\u093D","\u093D","\u093D","\u094D\u0930","\u094D","?","\u093C",":",
        "'","'","\u201C","\u201D",";","(",")","{"  ,"}","=","\u0964",".","-","\u00B5","\u0964",",","\u094D ","/"  ,
        "\u094B","\u0949","\u0948\u0902","\u0947\u094D\u0930","\u094C","\u094B","\u0949"
    ];

    // ── Step 1: Main substitution loop (sequential, as in original) ──
    if (modified_substring !== "") {
        for (let i = 0; i < array_one.length; i++) {
            let idx = 0;
            while (idx !== -1) {
                modified_substring = modified_substring.replace(array_one[i], array_two[i]);
                idx = modified_substring.indexOf(array_one[i]);
            }
        }
    }

    // ── Step 2: ± → Zं ──
    modified_substring = modified_substring.replace(/±/g, "Z\u0902");

    // ── Step 3: Æ → र्f ──
    modified_substring = modified_substring.replace(/Æ/g, "\u0930\u094Df");

    // ── Step 4: Ç → fa   and   É → र्fa ──
    modified_substring = modified_substring.replace(/Ç/g, "fa");
    modified_substring = modified_substring.replace(/É/g, "\u0930\u094Dfa");

    // Process "fa" clusters — move ि + ं two chars forward
    let pos_fa = modified_substring.indexOf("fa");
    while (pos_fa !== -1) {
        const nextChar = modified_substring.charAt(pos_fa + 2);
        modified_substring = modified_substring.replace("fa" + nextChar, nextChar + "\u093F\u0902");
        pos_fa = modified_substring.search(/fa/, pos_fa + 2);
    }

    // ── Step 5: Ê → ीZ ──
    modified_substring = modified_substring.replace(/Ê/g, "\u0940Z");

    // ── Step 6: Process "f" → ि  and shift it one position right ──
    let pos_f = modified_substring.indexOf("f");
    while (pos_f !== -1) {
        const nextChar = modified_substring.charAt(pos_f + 1);
        modified_substring = modified_substring.replace("f" + nextChar, nextChar + "\u093F");
        pos_f = modified_substring.search(/f/, pos_f + 1);
    }

    // ── Step 7: Fix ि on half-letters  ि् → ् + consonant + ि ──
    let pos_wrong_ee = modified_substring.indexOf("\u093F\u094D");
    while (pos_wrong_ee !== -1) {
        const consonant = modified_substring.charAt(pos_wrong_ee + 2);
        modified_substring = modified_substring.replace(
            "\u093F\u094D" + consonant,
            "\u094D" + consonant + "\u093F"
        );
        pos_wrong_ee = modified_substring.search(/\u093F\u094D/, pos_wrong_ee + 2);
    }

    // ── Step 8: Process "Z" reph — insert र् before its cluster ──
    const set_of_matras = "\u0905 \u0906 \u0907 \u0908 \u0909 \u090A \u090F \u0910 \u0913 \u0914 \u093E \u093F \u0940 \u0941 \u0942 \u0943 \u0947 \u0948 \u094B \u094C \u0902 : \u0901 \u0945";

    let pos_Z = modified_substring.indexOf("Z");

    while (pos_Z > 0) {
        let prob = pos_Z - 1;
        let charAtProb = modified_substring.charAt(prob);

        // Move left past matras
        while (set_of_matras.match(charAtProb) !== null) {
            prob--;
            charAtProb = modified_substring.charAt(prob);
        }

        // Move left past halant clusters (्)
        let prevPos = prob - 1;
        if (prevPos > 0) {
            let charPrev = modified_substring.charAt(prevPos);
            while ("\u094D".match(charPrev) !== null) {
                prob = prevPos - 1;
                charAtProb = modified_substring.charAt(prob);
                prevPos = prob - 1;
                charPrev = modified_substring.charAt(prevPos);
            }
        }

        const cluster = modified_substring.substr(prob, pos_Z - prob);
        modified_substring = modified_substring.replace(cluster + "Z", "\u0930\u094D" + cluster);
        pos_Z = modified_substring.indexOf("Z");
    }

    return modified_substring;
}

// module.exports = { krutiToUnicode };