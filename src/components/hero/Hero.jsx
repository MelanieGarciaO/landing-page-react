import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            heroRef.current?.classList.add("hero--visible");
        }, 100);
        return () => clearTimeout(timeout);
    }, []);

    const scrollToMenu = () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            <div className="hero__bg">
                <div className="hero__texture" />
                <div className="hero__blob hero__blob--1" />
                <div className="hero__blob hero__blob--2" />
            </div>

            <div className="hero__inner">
                <div className="hero__content">
                    <span className="section-label hero__label">Desde 2018 · Guayaquil, Ecuador</span>
                    <h1 className="hero__title">
                        El café de<br />
                        <em>origen</em> que<br />
                        mereces
                    </h1>
                    <p className="hero__desc">
                        Granos seleccionados de fincas ecuatorianas, tostados artesanalmente
                        y servidos con la calidez que nos caracteriza. Cada taza,
                        una historia.
                    </p>
                    <div className="hero__actions">
                        <button className="btn-primary" onClick={scrollToMenu}>
                            Ver el menú
                        </button>
                        <button
                            className="btn-outline"
                            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Nuestra historia
                        </button>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__cup-wrap">
                        <div className="hero__cup-glow" />
                        <svg className="hero__cup-svg" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <ellipse cx="160" cy="60" rx="90" ry="22" fill="#C8922A" opacity="0.15" />
                            <path d="M70 70 Q68 220 80 280 Q100 340 160 345 Q220 340 240 280 Q252 220 250 70Z" fill="#F5EFE0" stroke="#2C1A0E" strokeWidth="2" />
                            <path d="M72 92 Q70 240 82 295 Q102 348 160 348 Q218 348 238 295 Q250 240 248 92" fill="#EDE3CC" />
                            <ellipse cx="160" cy="72" rx="90" ry="22" fill="#FFFDF8" stroke="#2C1A0E" strokeWidth="1.5" />
                            <path d="M110 72 Q130 130 160 148 Q190 130 210 72" fill="#5C3A1E" opacity="0.85" />
                            <circle cx="160" cy="105" r="28" fill="#8B5E3C" opacity="0.6" />
                            <path d="M250 130 Q275 128 278 150 Q280 172 258 174" stroke="#2C1A0E" strokeWidth="2" fill="none" strokeLinecap="round" />
                            <ellipse cx="160" cy="348" rx="80" ry="12" fill="#2C1A0E" opacity="0.08" />
                            <path d="M130 30 Q135 10 140 5 Q143 18 138 32" stroke="#C8922A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            <path d="M155 25 Q160 5 165 2 Q168 16 163 28" stroke="#C8922A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            <path d="M178 30 Q183 10 188 8 Q190 21 186 34" stroke="#C8922A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="hero__stats">
                {[
                    { value: "6+", label: "Años de experiencia" },
                    { value: "12", label: "Variedades de origen" },
                    { value: "4.9★", label: "Calificación promedio" },
                    { value: "200+", label: "Clientes felices/día" },
                ].map((stat) => (
                    <div className="hero__stat" key={stat.label}>
                        <span className="hero__stat-value">{stat.value}</span>
                        <span className="hero__stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            <div className="hero__scroll-hint" aria-hidden="true">
                <span className="hero__scroll-line" />
                <span className="hero__scroll-text">scroll</span>
            </div>
        </section>
    );
}