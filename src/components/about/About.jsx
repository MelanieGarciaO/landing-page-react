import "./About.css";
import { VALUES, FOUNDERS } from "../../utils/constants";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about__inner">
                <div className="about__story">
                    <span className="section-label">Nuestra historia</span>
                    <h2 className="section-title">
                        Nació de una<br />
                        <em className="about__em">pasión</em> sincera
                    </h2>
                    <p className="about__text">
                        CaféArte nació en 2018 cuando María y Diego, dos amigos con alma inquieta,
                        decidieron que Guayaquil merecía una cafetería diferente. Sin franquicias,
                        sin atajos: solo café de verdad, preparado con rigor y servido con calidez.
                    </p>
                    <p className="about__text">
                        Hoy somos un equipo de 12 personas apasionadas que comparte la misma
                        convicción: que cada taza puede ser una pequeña experiencia extraordinaria
                        si se hace con los ingredientes correctos y el cuidado adecuado.
                    </p>

                    <div className="about__founders">
                        {FOUNDERS.map((f) => (
                            <div className="about__founder" key={f.initials}>
                                <div className="about__founder-avatar">{f.initials}</div>
                                <div>
                                    <p className="about__founder-name">{f.name}</p>
                                    <p className="about__founder-role">{f.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__values">
                    <div className="about__values-grid">
                        {VALUES.map((v) => (
                            <div className="about__value-card" key={v.title}>
                                <h3 className="about__value-title">{v.title}</h3>
                                <p className="about__value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}