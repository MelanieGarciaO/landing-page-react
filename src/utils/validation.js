import { INITIAL_ERRORS } from "./constants";

// Validaciones para el formulario de contacto
export function validate(fields) {
    const errors = { ...INITIAL_ERRORS };

    if (!fields.name.trim()) {
        errors.name = "El nombre es obligatorio.";
    } else if (fields.name.trim().length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.trim()) {
        errors.email = "El correo es obligatorio.";
    } else if (!emailRx.test(fields.email)) {
        errors.email = "Ingresa un correo válido (ej. nombre@dominio.com).";
    }

    if (fields.phone && !/^09\d{8}$/.test(fields.phone)) {
        errors.phone = "El teléfono debe tener 10 dígitos y comenzar con 09 (ej. 0998222806).";
    }

    if (!fields.date) {
        errors.date = "Selecciona una fecha para tu visita.";
    } else {
        const chosen = new Date(fields.date + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) {
            errors.date = "La fecha no puede ser en el pasado.";
        }
    }

    if (!fields.guests) {
        errors.guests = "Indica cuántas personas asistirán.";
    } else if (parseInt(fields.guests) < 1 || parseInt(fields.guests) > 20) {
        errors.guests = "El número de personas debe estar entre 1 y 20.";
    }

    if (!fields.message.trim()) {
        errors.message = "Escríbenos algo, cualquier detalle ayuda.";
    } else if (fields.message.trim().length < 10) {
        errors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return errors;
}

export function hasErrors(errors) {
    return Object.values(errors).some(Boolean);
}