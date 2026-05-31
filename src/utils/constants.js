// Navbar Constants
export const NAV_LINKS = [
    { id: "home", label: "Inicio" },
    { id: "menu", label: "Menú" },
    { id: "about", label: "Nosotros" },
    { id: "testimonials", label: "Reseñas" },
    { id: "contact", label: "Contacto" },
];

// Menu Constants
export const CATEGORIES = ["Todos", "Espresso", "Frío", "Té & Otros", "Comida"];

export const ITEMS = [
    { id: 1, name: "Espresso Simple", category: "Espresso", price: "$2.50", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80", desc: "Tiro doble de nuestro blend de origen único. Intenso y equilibrado." },
    { id: 2, name: "Cappuccino Artesanal", category: "Espresso", price: "$3.80", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80", desc: "Espresso con leche vaporizada y espuma cremosa. Latte art incluido." },
    { id: 3, name: "Flat White", category: "Espresso", price: "$3.50", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80", desc: "Doble ristretto con microespuma de leche. Favorito de los baristas." },
    { id: 4, name: "Cold Brew 24h", category: "Frío", price: "$4.20", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80", desc: "Infusión en frío por 24 horas. Suave, chocolate y sin acidez." },
    { id: 5, name: "Iced Latte Vainilla", category: "Frío", price: "$4.50", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", desc: "Espresso, leche entera y sirope de vainilla sobre hielo. Refrescante." },
    { id: 6, name: "Matcha Latte", category: "Té & Otros", price: "$4.00", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80", desc: "Matcha ceremonial japonés con leche de avena. Energizante y sereno." },
    { id: 7, name: "Chai Especiado", category: "Té & Otros", price: "$3.60", img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80", desc: "Blend de especias con té negro y leche vaporizada. Reconfortante." },
    { id: 8, name: "Tostada de Aguacate", category: "Comida", price: "$5.90", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80", desc: "Pan sourdough, aguacate, tomate cherry y semillas. Desayuno ideal." },
    { id: 9, name: "Croissant de Almendra", category: "Comida", price: "$3.80", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", desc: "Horneado fresco cada mañana. Crujiente por fuera, tierno por dentro." },
];

// Testimonials Constants
export const REVIEWS = [
    { id: 1, name: "Andrea Mora", role: "Periodista", initials: "AM", color: "#C8922A", text: "El mejor flat white que he tomado en Ecuador. Saben lo que hacen. Ya voy tres veces por semana y no pienso parar.", stars: 5 },
    { id: 2, name: "Carlos Espinoza", role: "Diseñador freelance", initials: "CE", color: "#7A8C6E", text: "Mi oficina de facto. El wifi es rápido, el ambiente es tranquilo y el cold brew me mantiene productivo todo el día.", stars: 5 },
    { id: 3, name: "Lucía Bermúdez", role: "Estudiante de arquitectura", initials: "LB", color: "#8B5E3C", text: "El matcha latte es simplemente divino. Y la tostada de aguacate... no hay vuelta atrás. Ya es mi ritual matutino.", stars: 5 },
    { id: 4, name: "Felipe Torres", role: "Ingeniero de software", initials: "FT", color: "#5C3A1E", text: "Fui una vez por curiosidad y ahora es mi cafetería de cabecera. El servicio es tan cálido como el espresso.", stars: 5 },
];

// About Constants
export const VALUES = [
    { title: "Origen trazable", desc: "Cada grano viene directamente de fincas familiares del Ecuador y Colombia." },
    { title: "Tueste artesanal", desc: "Tostamos en pequeños lotes semanalmente para garantizar frescura máxima." },
    { title: "Sostenibilidad", desc: "Empaques compostables, residuos mínimos y apoyo a productores locales." },
    { title: "Formación continua", desc: "Todo nuestro equipo es barista certificado SCA. La técnica importa." },
];

export const FOUNDERS = [
    { initials: "MD", name: "María Delgado", role: "Co-fundadora & Head Barista" },
    { initials: "DV", name: "Diego Vargas", role: "Co-fundador & Tostador" },
];

// Footer Constants
export const HOURS = [
    { day: "Lunes – Viernes", hours: "7:00 – 20:00" },
    { day: "Sábado", hours: "8:00 – 21:00" },
    { day: "Domingo", hours: "8:00 – 21:00" },
];

export const SOCIAL_MEDIA = ["Instagram", "Facebook", "TikTok"];

// Contact Form Constants
export const INITIAL = { name: "", email: "", phone: "", date: "", guests: "", message: "" };
export const INITIAL_ERRORS = { name: "", email: "", phone: "", date: "", guests: "", message: "" };