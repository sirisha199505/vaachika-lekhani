// Supported languages. `dir` is included so future RTL languages drop in cleanly.
export const LANGUAGES = [
  { code: "te", label: "Telugu", native: "తెలుగు", dir: "ltr" },
  { code: "hi", label: "Hindi", native: "हिन्दी", dir: "ltr" },
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ", dir: "ltr" },
];

export const DEFAULT_LANG = "en";
export const STORAGE_KEY = "vl_lang";
