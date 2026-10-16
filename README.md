# Raíz — Cosmética natural

Tienda y landing de cosmética natural y artesanal, construida con **React**, **Tailwind CSS** y **Storybook**.

## Scripts

```bash
npm install
npm run dev              # servidor de desarrollo (Vite)
npm run build            # build de producción
npm run storybook        # catálogo de componentes en http://localhost:6006
npm run build-storybook  # build estático de Storybook
```

## Estructura

```
src/
├─ components/   Secciones y componentes (Navbar, Hero, Catalog, ProductModal…)
│  └─ *.stories.jsx   Historias de Storybook
├─ data/         Productos y contenido (products.js, content.js)
├─ utils/        Helpers de formato
├─ index.css     Tokens de color y tipografía (@theme de Tailwind)
└─ App.jsx       Composición de la página y estado del carrito
```
