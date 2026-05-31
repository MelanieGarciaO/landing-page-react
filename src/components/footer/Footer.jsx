import "./Footer.css";
import { NAV_LINKS, HOURS, SOCIAL_MEDIA } from "../../utils/constants";

export default function Footer() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <button className="footer__logo" onClick={() => scrollTo("home")}>
                        <span className="footer__logo-mark">✦</span>
                        <span>Café<strong>Arte</strong></span>
                    </button>
                    <p className="footer__tagline">
                        Café de origen ecuatoriano, tostado con amor y servido con propósito.
                    </p>
                    <div className="footer__socials">
                        {SOCIAL_MEDIA.map((s) => (
                            <span key={s} className="footer__social">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="footer__col">
                    <p className="footer__col-title">Navegación</p>
                    {NAV_LINKS.map((l) => (
                        <button key={l.id} className="footer__link" onClick={() => scrollTo(l.id)}>
                            {l.label}
                        </button>
                    ))}
                </div>

                <div className="footer__col">
                    <p className="footer__col-title">Horario</p>
                    {HOURS.map((h) => (
                        <div className="footer__hours-row" key={h.day}>
                            <span>{h.day}</span>
                            <span>{h.hours}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} CaféArte · Guayaquil, Ecuador</p>
                <p>Hecho con ☕ y React</p>
            </div>
        </footer>
    );
}