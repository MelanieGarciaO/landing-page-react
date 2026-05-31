import { useState } from "react";
import { INITIAL, INITIAL_ERRORS} from "../../utils/constants";
import { validate, hasErrors } from "../../utils/validation";
import "./ContactForm.css";

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(INITIAL).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const newErrors = validate(fields);
    setErrors(newErrors);
    if (hasErrors(newErrors)) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleReset = () => {
    setFields(INITIAL);
    setErrors(INITIAL_ERRORS);
    setTouched({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact__inner">
          <div className="contact__success">
            <span className="contact__success-icon" aria-hidden="true">✦</span>
            <h2 className="section-title">¡Reserva recibida!</h2>
            <p className="contact__success-text">
              Gracias, <strong>{fields.name.split(" ")[0]}</strong>. Te confirmaremos por correo a{" "}
              <strong>{fields.email}</strong> en menos de 24 horas.
            </p>
            <button className="btn-primary" onClick={handleReset} style={{ marginTop: 24 }}>
              Hacer otra reserva
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <span className="section-label">Visítanos</span>
          <h2 className="section-title contact__title">Reserva tu<br />mesa hoy</h2>
          <p className="contact__tagline">
            Completa el formulario y nos ponemos en contacto para confirmar tu visita.
          </p>

          <div className="contact__info">
            {[
              { label: "Dirección", value: "Av. Francisco de Orellana 234, Guayaquil" },
              { label: "Horario", value: "Lun–Vie 7:00–20:00 · Sáb–Dom 8:00–21:00" },
              { label: "Teléfono", value: "+593 4 256 7890" },
              { label: "Correo", value: "hola@cafearte.ec" },
            ].map((item) => (
              <div className="contact__info-row" key={item.label}>
                <div>
                  <p className="contact__info-label">{item.label}</p>
                  <p className="contact__info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Formulario de reserva">
          <div className="form-row form-row--2">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nombre completo *</label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name && touched.name ? "form-input--error" : ""}`}
                placeholder="Tu nombre"
                value={fields.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
              />
              {errors.name && touched.name && <p className="form-error" role="alert">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Correo electrónico *</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email && touched.email ? "form-input--error" : ""}`}
                placeholder="nombre@correo.com"
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
              {errors.email && touched.email && <p className="form-error" role="alert">{errors.email}</p>}
            </div>
          </div>

          <div className="form-row form-row--2">
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Teléfono <span className="form-optional">(opcional)</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`form-input ${errors.phone && touched.phone ? "form-input--error" : ""}`}
                placeholder="+593 99 000 0000"
                value={fields.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="tel"
              />
              {errors.phone && touched.phone && <p className="form-error" role="alert">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="date">Fecha de visita *</label>
              <input
                id="date"
                name="date"
                type="date"
                className={`form-input ${errors.date && touched.date ? "form-input--error" : ""}`}
                value={fields.date}
                onChange={handleChange}
                onBlur={handleBlur}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.date && touched.date && <p className="form-error" role="alert">{errors.date}</p>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="guests">Número de personas *</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="20"
              className={`form-input ${errors.guests && touched.guests ? "form-input--error" : ""}`}
              placeholder="¿Cuántos asistirán?"
              value={fields.guests}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.guests && touched.guests && <p className="form-error" role="alert">{errors.guests}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Mensaje o preferencias *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`form-input form-textarea ${errors.message && touched.message ? "form-input--error" : ""}`}
              placeholder="Alergias, celebración especial, preferencias de ubicación..."
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && touched.message && <p className="form-error" role="alert">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="btn-primary contact__submit"
            disabled={loading}
          >
            {loading ? (
              <span className="contact__loading">
                <span className="contact__spinner" aria-hidden="true" />
                Enviando...
              </span>
            ) : (
              "Solicitar reserva →"
            )}
          </button>

          <p className="contact__disclaimer">
            * Campos obligatorios. Tu información se usa únicamente para gestionar tu reserva.
          </p>
        </form>
      </div>
    </section>
  );
}