// ============================================================
// loanwordDict.js
// Government & Legal domain — English loanwords written in Hindi
// Key   = Devanagari Unicode word
// Value = Correct English spelling
//
// HOW TO ADD A NEW WORD:
//   ["\u0000", "english"],   ← add your entry here
//   Or directly paste Devanagari: ["हिंदी", "english"],
// ============================================================

export const loanwordDict = new Map([

    // ── Administrative ───────────────────────────────────────
    ["\u0935\u093E\u0930\u094D\u0921",              "ward"],
    ["\u092C\u094B\u0930\u094D\u0921",              "board"],
    ["\u0915\u094B\u0930\u094D\u091F",              "court"],
    ["\u092B\u0949\u0930\u094D\u092E",              "form"],
    ["\u0930\u093F\u092A\u094B\u0930\u094D\u091F",  "report"],
    ["\u092A\u093E\u0938\u092A\u094B\u0930\u094D\u091F", "passport"],
    ["\u092A\u094B\u0930\u094D\u091F\u0932",        "portal"],
    ["\u092A\u094B\u0938\u094D\u091F",              "post"],
    ["\u0928\u094B\u091F",                          "note"],
    ["\u0928\u094B\u091F\u093F\u0938",              "notice"],
    ["\u0921\u094D\u0930\u093E\u092B\u094D\u091F",  "draft"],
    ["\u0911\u0930\u094D\u0921\u0930",              "order"],
    ["\u0930\u093F\u0915\u0949\u0930\u094D\u0921",  "record"],
    ["\u0930\u091C\u093F\u0938\u094D\u091F\u0930",  "register"],
    ["\u0932\u093E\u0907\u0938\u0947\u0902\u0938",  "licence"],
    ["\u092A\u0930\u092E\u093F\u091F",              "permit"],
    ["\u0938\u0930\u094D\u091F\u093F\u092B\u093F\u0915\u0947\u091F", "certificate"],
    ["\u0905\u092A\u0940\u0932",                    "appeal"],
    ["\u0915\u0947\u0938",                          "case"],
    ["\u092B\u093E\u0907\u0932",                    "file"],
    ["\u0915\u094B\u0921",                          "code"],
    ["\u090F\u0915\u094D\u091F",                    "act"],
    ["\u092C\u093F\u0932",                          "bill"],
    ["\u092A\u0947\u0928\u0932\u094D\u091F\u0940",  "penalty"],
    ["\u092C\u0947\u0932",                          "bail"],
    ["\u091C\u0947\u0932",                          "jail"],

    // ── Law Enforcement ──────────────────────────────────────
    ["\u092A\u0941\u0932\u093F\u0938",              "police"],
    ["\u0938\u094D\u091F\u0947\u0936\u0928",        "station"],
    ["\u0911\u092B\u093F\u0938",                    "office"],
    ["\u0907\u0902\u0938\u094D\u092A\u0947\u0915\u094D\u091F\u0930", "inspector"],
    ["\u0915\u093E\u0902\u0938\u094D\u091F\u0947\u092C\u0932", "constable"],
    ["\u092E\u091C\u093F\u0938\u094D\u091F\u094D\u0930\u0947\u091F", "magistrate"],
    ["\u091C\u091C",                                "judge"],
    ["\u0915\u092E\u093F\u0936\u094D\u0928\u0930",  "commissioner"],
    ["\u0915\u0932\u0947\u0915\u094D\u091F\u0930",  "collector"],
    ["\u0921\u093E\u092F\u0930\u0947\u0915\u094D\u091F\u0930", "director"],
    ["\u0915\u092E\u0947\u091F\u0940",              "committee"],

    // ── Finance & Tax ────────────────────────────────────────
    ["\u092C\u0948\u0902\u0915",                    "bank"],
    ["\u091F\u0948\u0915\u094D\u0938",              "tax"],
    ["\u091A\u0947\u0915",                          "cheque"],
    ["\u0915\u093E\u0909\u0902\u091F",              "count"],
    ["\u0905\u0915\u093E\u0909\u0902\u091F",        "account"],
    ["\u0911\u0921\u093F\u091F",                    "audit"],
    ["\u092C\u091C\u091F",                          "budget"],
    ["\u092A\u0947\u0902\u0936\u0928",              "pension"],
    ["\u0938\u0948\u0932\u0930\u0940",              "salary"],
    ["\u0917\u094D\u0930\u093E\u0902\u091F",        "grant"],
    ["\u092B\u0902\u0921",                          "fund"],
    ["\u0932\u094B\u0928",                          "loan"],
    ["\u0907\u0902\u091F\u0930\u0947\u0938\u094D\u091F", "interest"],
    ["\u091F\u0947\u0902\u0921\u0930",              "tender"],
    ["\u0915\u0949\u0928\u094D\u091F\u094D\u0930\u0948\u0915\u094D\u091F", "contract"],
    ["\u091C\u0940\u090F\u0938\u091F\u0940",        "GST"],
    ["\u092A\u0948\u0928",                          "PAN"],

    // ── Government Positions & Bodies ────────────────────────
    ["\u0915\u093E\u0909\u0902\u0938\u093F\u0932",  "council"],
    ["\u092E\u0947\u092F\u0930",                    "mayor"],
    ["\u0938\u0947\u0915\u094D\u0930\u0947\u091F\u0930\u0940", "secretary"],
    ["\u092E\u093F\u0928\u093F\u0938\u094D\u091F\u0930", "minister"],
    ["\u0921\u093F\u092A\u093E\u0930\u094D\u091F\u092E\u0947\u0902\u091F", "department"],
    ["\u0921\u093F\u0938\u094D\u091F\u094D\u0930\u093F\u0915\u094D\u091F", "district"],
    ["\u0938\u0947\u0915\u094D\u091F\u0930",        "sector"],

    // ── Projects & Infrastructure ────────────────────────────
    ["\u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F",  "project"],
    ["\u0938\u092A\u094D\u0932\u093E\u0908",        "supply"],
    ["\u0938\u094D\u091F\u094B\u0930",              "store"],
    ["\u0938\u094D\u091F\u0949\u0915",              "stock"],
    ["\u092A\u094D\u0932\u0949\u091F",              "plot"],
    ["\u0930\u094B\u0921",                          "road"],
    ["\u092C\u094D\u0930\u093F\u091C",              "bridge"],
    ["\u0921\u0948\u092E",                          "dam"],
    ["\u092A\u093E\u0930\u094D\u0915",              "park"],
    ["\u0915\u0949\u0932\u094B\u0928\u0940",        "colony"],
    ["\u0938\u094B\u0938\u093E\u0907\u091F\u0940",  "society"],
    ["\u0938\u094D\u0915\u0940\u092E",              "scheme"],
    ["\u0938\u0930\u094D\u0935\u0947",              "survey"],
    ["\u092E\u0948\u092A",                          "map"],

    // ── Education ────────────────────────────────────────────
    ["\u0938\u094D\u0915\u0942\u0932",              "school"],
    ["\u0915\u0949\u0932\u0947\u091C",              "college"],
    ["\u092F\u0942\u0928\u093F\u0935\u0930\u094D\u0938\u093F\u091F\u0940", "university"],

    // ── Medical ──────────────────────────────────────────────
    ["\u0939\u0949\u0938\u094D\u092A\u093F\u091F\u0932", "hospital"],
    ["\u0921\u0949\u0915\u094D\u091F\u0930",        "doctor"],
    ["\u0928\u0930\u094D\u0938",                    "nurse"],
    ["\u090F\u092E\u094D\u092C\u0941\u0932\u0947\u0902\u0938", "ambulance"],
    ["\u0935\u0948\u0915\u094D\u0938\u0940\u0928",  "vaccine"],

    // ── Elections ────────────────────────────────────────────
    ["\u0907\u0932\u0947\u0915\u094D\u0936\u0928",  "election"],
    ["\u0935\u094B\u091F",                          "vote"],
    ["\u092C\u0948\u0932\u091F",                    "ballot"],
    ["\u0915\u0948\u0902\u0921\u093F\u0921\u0947\u091F", "candidate"],
    ["\u0928\u0949\u092E\u093F\u0928\u0947\u0936\u0928", "nomination"],

    // ── Meetings & HR ────────────────────────────────────────
    ["\u092E\u0940\u091F\u093F\u0902\u0917",        "meeting"],
    ["\u090F\u091C\u0947\u0902\u0921\u093E",        "agenda"],
    ["\u0930\u093F\u091C\u094B\u0932\u094D\u092F\u0942\u0936\u0928", "resolution"],
    ["\u0905\u092A\u094D\u0935\u093E\u0907\u0902\u091F\u092E\u0947\u0902\u091F", "appointment"],
    ["\u091F\u094D\u0930\u093E\u0902\u0938\u092B\u0930", "transfer"],
    ["\u092A\u094D\u0930\u092E\u094B\u0936\u0928",  "promotion"],
    ["\u0938\u0938\u094D\u092A\u0947\u0902\u0936\u0928", "suspension"],
    ["\u091F\u0930\u094D\u092E\u093F\u0928\u0947\u0936\u0928", "termination"],
    ["\u0930\u093F\u091F\u093E\u092F\u0930\u092E\u0947\u0902\u091F", "retirement"],

    // ── Acronyms ─────────────────────────────────────────────
    ["\u090F\u0928\u092A\u0940\u0906\u0930",        "NPR"],
    ["\u090F\u092B\u0906\u0908\u0906\u0930",        "FIR"],
    ["\u092A\u0940\u0906\u0908\u090F\u0932",        "PIL"],
    ["\u090F\u0928\u091C\u0940\u0913",              "NGO"],

    // ── Add new words below this line ────────────────────────

]);
