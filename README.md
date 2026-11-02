# Club Tueste Norte - Dashboard de Socios

Aplicación web desarrollada como área de cliente y catálogo para **Club Tueste Norte**, construida con **Next.js 16 (App Router)**, **Turbopack** y **Tailwind CSS**.

## 🚀 Cómo arrancar el proyecto

Asegúrate de tener instalado [Node.js](https://nodejs.org/). Clona el repositorio y ejecuta los siguientes comandos en tu terminal:

\`\`\`bash
# 1. Instalar las dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## ☕ Fuente de Datos
* **Elegida**: Archivo estático local en TypeScript ubicado en `data/cafes.ts`.
* **Por qué**: Para esta fase del proyecto, el uso de un conjunto de datos local simulado permite un rendimiento inmediato, evita la necesidad de configurar bases de datos externas o APIs de terceros, y garantiza que el tipado estricto con TypeScript (`interface` / `type`) funcione de manera fluida en las rutas dinámicas y componentes.

---

## 🛠️ Justificación de Componentes y Arquitectura
* **App Router de Next.js**: Se ha empleado la estructura basada en carpetas dentro de `app/` para definir las rutas principales:
  * `/` (Dashboard / Página principal de bienvenida)
  * `/cafes` (Catálogo de cafés del mes)
  * `/cafes/[slug]` (Ficha de detalle individual dinámica con manejo de `params` asíncronos)
  * `/metodos` (Guías de extracción)
  * `/blog` (Historias de origen)
* **Server Components y Client Components**: Por defecto, las páginas de Next.js actúan como **Server Components**, lo que optimiza la carga inicial y el rendimiento de la aplicación al renderizar el catálogo y los detalles del servidor. Se han extraído elementos visuales reutilizables como la barra de navegación (`components/Navbar.tsx`) y las etiquetas de tueste (`components/EtiquetaTueste.tsx`) para mantener una arquitectura modular y limpia.