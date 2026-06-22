import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LANGUAGES, DEFAULT_LANG, STORAGE_KEY } from "./config";
import en from "./locales/en.json"; // bundled synchronously = no flash + fallback

// Lazily code-split every other locale; only the chosen one is fetched.
const loaders = {
  en: () => Promise.resolve({ default: en }),
  hi: () => import("./locales/hi.json"),
  te: () => import("./locales/te.json"),
  ta: () => import("./locales/ta.json"),
  kn: () => import("./locales/kn.json"),
  ml: () => import("./locales/ml.json"),
  mr: () => import("./locales/mr.json"),
  bn: () => import("./locales/bn.json"),
  gu: () => import("./locales/gu.json"),
  pa: () => import("./locales/pa.json"),
};

const I18nContext = createContext(null);

const getPath = (obj, path) =>
  path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

function applyHtml(code) {
  const meta = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
  const root = document.documentElement;
  root.lang = code;
  root.dir = meta.dir || "ltr";
  root.dataset.scriptMode = code === "en" ? "latin" : "indic";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [dict, setDict] = useState(en);

  const changeLang = useCallback(async (code) => {
    if (!loaders[code]) return;
    const mod = await loaders[code]();
    setDict(mod.default || mod);
    setLang(code);
    applyHtml(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore storage failures (private mode) */
    }
  }, []);

  // Restore the saved language on first mount (no refresh needed thereafter).
  useEffect(() => {
    let saved;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved && saved !== DEFAULT_LANG && loaders[saved]) changeLang(saved);
    else applyHtml(DEFAULT_LANG);
  }, [changeLang]);

  // t('a.b.c') with English fallback for any missing key.
  const t = useCallback(
    (key, fallback) => {
      const v = getPath(dict, key);
      if (v != null) return v;
      const ev = getPath(en, key);
      return ev != null ? ev : fallback ?? key;
    },
    [dict]
  );

  const value = useMemo(
    () => ({ lang, t, changeLang, languages: LANGUAGES }),
    [lang, t, changeLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
