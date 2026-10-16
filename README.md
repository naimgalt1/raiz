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

## Qué aprendí

- **Tokens de diseño con Tailwind v4.** Definir la paleta en `@theme` me obligó a pensar en nombres semánticos (`moss`, `terra`) en lugar de valores sueltos, y el resultado es mucho más fácil de mantener.
- **Estado compartido sin librerías.** El carrito y el producto seleccionado viven en `App.jsx` y se pasan por props. Para una tienda de este tamaño no hacía falta Redux ni Context.
- **Reiniciar estado con `key`.** El modal de producto se monta con `key={product.id}`, así la cantidad y el estado "añadido" se reinician solos en cada apertura, sin `useEffect` extra.
- **Storybook como documentación viva.** Crear historias para la tarjeta y el modal me hizo separar las props que realmente necesitan los componentes.

## Retos

- **Instalación bloqueada por permisos.** La caché de npm (`~/.npm`) pertenecía a root y `npm install` fallaba. Lo resolví usando una caché en otra carpeta mientras dejaba documentado el comando para corregir los permisos.
- **Configuración de Storybook 10.** Tuve que ajustar `main.js` y `preview.js` para que cargaran los estilos de Tailwind y el addon de documentación.
- **Clases de Tailwind v4.** Algunos valores, como `z-100`, no existen como clase estándar; los pasé a valores arbitrarios (`z-[100]`).
- **Menú móvil sin menú.** En la versión original los enlaces desaparecían en móvil. Los hice visibles como una fila desplazable bajo el logo, con la barra de scroll oculta.
- **Imágenes externas.** Las imágenes apuntaban a un servicio ajeno. Las descargué al proyecto y actualicé las rutas, y también reescribí el historial de git para que no quedara ninguna referencia.
