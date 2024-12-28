# React + Vite - Gestor de Tareas

Este template proporciona una configuración mínima para empezar con React usando Vite, con soporte para Hot Module Replacement (HMR) y algunas reglas básicas de ESLint.

Actualmente, hay dos plugins oficiales disponibles para Vite con React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

## Pasos para crear el proyecto

1. **Crea la estructura e instala los paquetes** de la nueva aplicación web de gestor de tareas con Vite y React.

2. Elimina todo lo que no necesitamos que importe Vite. Borra los archivos de ejemplo que no sean necesarios, como el logo.svg y otros archivos de prueba.

3. Crea las carpetas necesarias:

    pages: Para las páginas de la aplicación.
    components: Para los componentes reutilizables.

4. Dentro de pages crea dos archivos:

    Home.jsx: Página de inicio.
    Tasks.jsx: Página para gestionar las tareas.

5. Dentro de components crea el componente Header.jsx donde añadirás un nav con enlaces (Link) para navegar entre las páginas.

6. Añade unos estilos básicos para el Header. Crea un archivo de estilo en styles/header.css y vincúlalo al Header.jsx.
   
7. Incluye el archivo CSS que le da estilo al Header en el componente Header.jsx.
   
8. Añade el Header a la página Home.jsx.
   
9.  Añade el Header también a la página Tasks.jsx.
    
10. Configura las rutas en el componente raíz App.jsx.
    
11. Añade los enlaces de navegación en el componente Header.jsx (esto ya se cubrió en el paso 5).

12. Añade BrowserRouter en main.jsx.
    
13. Crea la carpeta context para la lógica de la aplicación, y dentro de ella, crea el archivo task.context.js.
    
14. Importa el TaskProvider en main.jsx.
    
15. Añade la lógica de tareas en task.context.js. Ya está incluida en el paso 13.

16. Verifica que todo funciona correctamente.
    
17. Se actualiza el readme.