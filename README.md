

## Gestor de Tareas con React + Vite

Este proyecto es un gestor de tareas desarrollado con React y configurado con Vite para un rendimiento óptimo. Implementa un sistema de rutas, gestión de estado global mediante el contexto de React y estilos personalizados.

## Características del Proyecto

    Framework: React, configurado con Vite para desarrollo rápido.
    Rutas Dinámicas: Implementadas con react-router-dom para navegar entre páginas.
    Gestión de Estado: Uso de Context API para manejar las tareas de manera global.
    Componentes Reutilizables: Arquitectura basada en componentes para modularidad y escalabilidad.
    Estilos Responsivos: Personalización de estilos con CSS.
    Funcionalidades del Gestor de Tareas:
        Listado de tareas.
        Creación de nuevas tareas.
        Visualización y personalización de cada tarea mediante componentes dedicados.

## Guía de Instalación

1. Clonar el repositorio.
2. Instalar dependencias.
3. Ejecutar el servidor de desarrollo.
4. Abre tu navegador y ve a: http://localhost:5173.
   

## Pasos de Desarrollo

Configuración Inicial:

    Creación del proyecto con Vite y React.
    Eliminación de archivos no necesarios.
    Creación de carpetas:
        pages/: Para las vistas principales.
        components/: Para componentes reutilizables.

Funcionalidades Implementadas:

    1. Navegación:
        Creación del componente Header.jsx con navegación entre Home y Tasks.
        Configuración de rutas en App.jsx y uso de BrowserRouter en main.jsx.
    2. Gestión de Tareas:
        Creación del contexto en task.context.jsx para manejar tareas de forma global.
        Provisión del contexto en main.jsx con TaskProvider.
    3. Componentes:
        TaskCard.jsx: Para mostrar cada tarea.
        CreateTask.jsx: Para añadir nuevas tareas al contexto.
    4. Estilos:
        Personalización del diseño con CSS para Header, TaskCard y TasksPage.

Mejoras Realizadas

    Corrección de errores en la lógica del contexto.
    Modularización del código para mantener escalabilidad.
    Inclusión de comentarios explicativos en el código para facilitar el mantenimiento.

## Próximos Pasos

    1. Añadir funcionalidad para editar y eliminar tareas.
    2. Implementar persistencia de datos con almacenamiento local o backend.
    3. Mejorar la responsividad del diseño.
    4. Implementar pruebas unitarias para los componentes principales.

## Créditos

Desarrollado por Ian Camps. Este proyecto es parte de un aprendizaje práctico en React y Vite.

1. LLAMAMOS A LA API DE BEECEPTOR. EN EL CONTEXTO
2. se crean funciones en el contexto para obtener tareas de la api y añadir tareas.
3. se crea carpeta y fichero utils para generar un numero aleatorio de id.
4. se crean las funciones en utils para generar ids aleatorios.
5. en create task se añade la funcion de utils.
6. profundizando con hook, vamos a crear unos contadores luego crearemos custum cooks
7. creamos un custom hook para las varibles de losmcontadores para que interactuen diferente
8. creacion de un focus para el input 

9- se crea en components una seccion de compras con un buycup y buythisrt tambien se le añade diseño
10- se añade al home page
11. creamos patrones avanzados hoc
12. creamo carpeta hoc que va a envolver la pagina de los productos a vender 
13. creamos productwrapper
14. creamos un compound footer component
15. le damos diseño al footer
16. lo añadimos a la pagina home y a la task list
17. añadimos react memo al task card para que lo renderice solo 1 vez
18. 