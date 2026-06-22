// Supported languages. `dir` is included so future RTL languages drop in cleanly.
export const LANGUAGES = [
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "hi", label: "Hindi", native: "हिन्दी", dir: "ltr" },
  { code: "te", label: "Telugu", native: "తెలుగు", dir: "ltr" },
  { code: "ta", label: "Tamil", native: "தமிழ்", dir: "ltr" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ", dir: "ltr" },
  { code: "ml", label: "Malayalam", native: "മലയാളം", dir: "ltr" },
  { code: "mr", label: "Marathi", native: "मराठी", dir: "ltr" },
  { code: "bn", label: "Bengali", native: "বাংলা", dir: "ltr" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી", dir: "ltr" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ", dir: "ltr" },
];

export const DEFAULT_LANG = "en";
export const STORAGE_KEY = "vl_lang";
