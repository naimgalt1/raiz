# Raíz — Cosmética natural y artesanal

Tienda online y landing de una marca de cosmética natural, desarrollada por **Naim Galet Naieb**. Es un proyecto de portfolio para demostrar una arquitectura de componentes clara, un sistema de diseño propio y documentación visual de los componentes.

🔗 **Demo:** https://naim-raiz.vercel.app

## Stack y por qué lo elegí

| Tecnología | Por qué la elegí |
|---|---|
| **React 19** | Es el estándar del mercado para interfaces por componentes. Me permite dividir cada sección de la página en un archivo independiente y reutilizar piezas como `SectionHeader` o `Reveal`. |
| **Vite** | Arranque casi instantáneo y build rápido. Frente a Create React App, la configuración es mínima y el HMR es inmediato. |
| **Tailwind CSS v4** | Quería que los colores y la tipografía de la marca vivieran en un único sitio. Con `@theme` defino la paleta (`bg-moss`, `text-earth`…) una sola vez y la uso en todo el proyecto. |
| **Storybook 10** | Permite desarrollar y documentar cada componente de forma aislada, con sus variantes (por ejemplo, la tarjeta de producto en su versión "Más vendido", "Nuevo" o "Eco pack"). |

## Estructura

```
src/
├─ components/   Una sección o pieza por archivo (Navbar, Hero, Catalog, ProductModal…)
│  └─ *.stories.jsx   Historias de Storybook
├─ data/         Productos y contenido, separados del código de presentación
├─ utils/        Funciones de formato (precio, estrellas)
├─ index.css     Tokens de color y tipografía
└─ App.jsx       Composición de la página y estado del carrito
```

Separé los datos (`data/products.js`, `data/content.js`) de los componentes para poder cambiar productos o textos sin tocar la interfaz.

## Scripts

```bash
npm install
npm run dev              # servidor de desarrollo
npm run build            # build de producción
npm run storybook        # catálogo de componentes en http://localhost:6006
npm run build-storybook  # Storybook estático
```


## Lecciones técnicas

- **Tokens de diseño en Tailwind v4.** Definir la paleta en `@theme` da nombres semánticos (`moss`, `terra`) a los colores y evita valores sueltos repetidos en cada componente.
- **Estado sin librerías externas.** El carrito y el producto seleccionado viven en `App.jsx` y se pasan por props. Para una tienda de este tamaño no hace falta Redux ni Context.
- **Reiniciar estado con `key`.** El modal de producto se monta con `key={product.id}`, así la cantidad y el estado "añadido" se reinician en cada apertura sin `useEffect` adicional.
- **Storybook como documentación de componentes.** Las historias documentan variantes reales (tarjeta "Más vendido", "Nuevo", "Eco pack") y obligan a que las props de cada componente sean explícitas.

## Problemas resueltos

- **Permisos de la caché de npm.** `~/.npm` pertenecía a root y `npm install` fallaba. Solución: usar `NPM_CONFIG_CACHE` apuntando a otra carpeta, y `sudo chown` para dejar la caché corregida.
- **Configuración de Storybook 10.** `main.js` y `preview.js` deben cargar los estilos de Tailwind y declarar el addon de documentación para que las historias se vean con el tema.
- **Clases de Tailwind v4.** Valores como `z-100` no son clases estándar; se usan valores arbitrarios (`z-[100]`).
- **Navegación oculta en móvil.** Los enlaces solo aparecían en escritorio. Se muestran como fila desplazable bajo el logo, con la barra de scroll oculta.
- **Dependencia de imágenes externas.** Las imágenes se descargaron al proyecto (`public/images`) y se reescribieron las rutas. Después se reescribió el historial de git para eliminar cualquier referencia al origen.
