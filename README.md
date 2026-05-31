# ☕ CaféArte — Landing Page

Landing page para una cafetería artesanal ecuatoriana, construida con **React + Vite**.

## Estructura del proyecto

```
CafeArte_Landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css       # Navegación fija con scroll activo
│   │   ├── Hero.jsx / .css         # Sección principal con animaciones
│   │   ├── Menu.jsx / .css         # Menú con filtros por categoría
│   │   ├── About.jsx / .css        # Historia y valores del negocio
│   │   ├── Testimonials.jsx / .css # Reseñas de clientes
│   │   ├── ContactForm.jsx / .css  # Formulario con validaciones
│   │   └── Footer.jsx / .css       # Pie de página
│   ├── App.jsx
│   ├── App.css                     # Variables globales y estilos base
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build de producción
npm run build

# 4. Previsualizar el build
npm run preview
```

## Características

- **Diseño responsive** — móvil, tablet y escritorio.
- **Componentes reutilizables** — cada sección es un componente independiente.
- **Formulario validado** — validación en tiempo real por campo, mensajes de error accesibles, estado de éxito.
- **Navegación activa** — `IntersectionObserver` detecta la sección visible y actualiza la navbar.
- **Animaciones CSS** — entrada de Hero, flotación de ícono, pulsos y transiciones suaves.
- **Accesibilidad** — `role="alert"` en errores, `aria-label` en controles, `aria-selected` en filtros.

## Validaciones del formulario

| Campo | Regla |
|-------|-------|
| Nombre | Obligatorio, mínimo 3 caracteres |
| Correo | Obligatorio, formato válido (regex) |
| Teléfono | Opcional, 7–15 dígitos |
| Fecha | Obligatoria, no puede ser en el pasado |
| Personas | Obligatorio, entre 1 y 20 |
| Mensaje | Obligatorio, mínimo 10 caracteres |

## Despliegue en Vercel

```bash
# Instalar CLI de Vercel (si no lo tienes)
npm i -g vercel

# Desplegar directamente
vercel

# O conectar el repositorio en vercel.com → "Import Project"
# Framework preset: Vite
# Build command: npm run build
# Output directory: dist
```

## Despliegue en Netlify

1. Haz `npm run build`
2. Arrastra la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop)

O conecta el repo en Netlify con:
- Build command: `npm run build`
- Publish directory: `dist`

## Despliegue en GitHub Pages (con gh-pages)

```bash
npm install --save-dev gh-pages
```

Agrega en `package.json`:
```json
"homepage": "https://<tu-usuario>.github.io/<nombre-repo>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Agrega en `vite.config.js`:
```js
export default defineConfig({
  base: '/<nombre-repo>/',
  plugins: [react()],
})
```

```bash
npm run deploy
```

## Tecnologías

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- CSS puro con variables custom (sin frameworks)
- Google Fonts — Playfair Display + DM Sans