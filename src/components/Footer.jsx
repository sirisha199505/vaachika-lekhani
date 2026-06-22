import BrandMark from "./BrandMark";
import { useI18n } from "../i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const year = 2026;
  return (
    <footer className="relative border-t border-gold/15 bg-bg">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <BrandMark size={44} rounded={13} />
              <div>
                <p className="brand-latin font-display text-lg font-700 text-gold-gradient">
                  Vachika Lekhini
                </p>
                <p className="font-deva text-sm text-amber/80">वाचक लेखिनी</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title={t("footer.explore")}
              links={[
                [t("nav.meaning"), "meaning"],
                [t("nav.practice"), "practice"],
                [t("nav.features"), "features"],
                [t("nav.mantras"), "mantras"],
              ]}
            />
            <FooterCol
              title={t("footer.more")}
              links={[
                [t("nav.privacy"), "privacy"],
                [t("footer.movement"), "movement"],
                [t("footer.about"), "about"],
                [t("footer.earlyAccess"), "cta"],
              ]}
            />
            <div>
              <p className="eyebrow mb-4">{t("footer.comingSoon")}</p>
              <div className="flex flex-col gap-3 text-sm text-muted">
                <span> {t("footer.appStore")}</span>
                <span>▶ {t("footer.googlePlay")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-6 text-center text-xs text-muted/60 md:flex-row md:text-left">
          <p>
            © {year} Vachika Lekhini · {t("footer.poweredBy")}{" "}
            <span className="brand-latin text-gold/80">Srinishtha Technologies LLP</span>
          </p>
          <p className="font-deva text-amber/60">श्री राम जय राम जय जय राम</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="flex flex-col gap-3 text-sm">
        {links.map(([label, id]) => (
          <li key={id}>
            <button
              onClick={() => go(id)}
              className="text-muted transition-colors hover:text-gold"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
