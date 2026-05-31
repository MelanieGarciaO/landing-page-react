import "./Testimonials.css";
import { REVIEWS } from "../../utils/constants";

const Stars = ({ count }) => (
    <div className="stars" aria-label={`${count} estrellas`}>
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} aria-hidden="true">★</span>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__inner">
                <div className="testimonials__header">
                    <span className="section-label">Lo que dicen</span>
                    <h2 className="section-title">Reseñas reales,<br />de clientes reales</h2>
                </div>

                <div className="testimonials__grid">
                    {REVIEWS.map((r) => (
                        <article className="testimonial-card" key={r.id}>
                            <Stars count={r.stars} />
                            <blockquote className="testimonial-card__text">
                                "{r.text}"
                            </blockquote>
                            <div className="testimonial-card__author">
                                <div
                                    className="testimonial-card__avatar"
                                    style={{ background: r.color }}
                                    aria-hidden="true"
                                >
                                    {r.initials}
                                </div>
                                <div>
                                    <p className="testimonial-card__name">{r.name}</p>
                                    <p className="testimonial-card__role">{r.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}