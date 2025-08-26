# Presentación de Grúas Portuarias 🏗️

Aplicación web interactiva para presentar los tipos de grúas utilizadas en puertos marítimos.

## Descripción

Herramienta visual diseñada para proyectar en pantalla y mostrar las características de 11 tipos diferentes de grúas portuarias, con información técnica y especificaciones de cada una.

## Características

- 11 tipos de grúas portuarias documentadas
- Navegación sencilla entre secciones
- Información técnica y especificaciones
- Diseño optimizado para presentaciones
- No requiere instalación

## Tipos de Grúas Incluidas

1. **STS (Ship-to-Shore)** - Para carga/descarga de contenedores
2. **Grúa Móvil Portuaria** - Versátil para diferentes cargas
3. **Grúas para Granel** - Minerales, carbón, cereales
4. **RTG** - Apilamiento en patio con neumáticos
5. **RMG** - Apilamiento en patio sobre rieles
6. **Reach Stacker** - Manejo ágil de contenedores
7. **Grúa Puente** - Para almacenes cubiertos
8. **Grúa Flotante** - Operaciones marítimas especiales
9. **Grúas Auxiliares** - Tareas de apoyo y mantenimiento
10. **Brazo Nivelado** - Cargas pesadas en espacios limitados
11. **Sidelifter** - Autocarga de contenedores

## Uso

1. Abrir el archivo `index.html` en cualquier navegador
2. Usar los botones superiores para navegar entre grúas
3. Para presentaciones: presionar F11 para pantalla completa

## Estructura

```
/
├── index.html    # Archivo único con toda la aplicación
└── README.md     # Este archivo
```

## Información Incluida

Para cada grúa se muestra:
- Descripción general
- Especificaciones técnicas
- Tipos de carga que maneja
- Ubicación típica en el puerto
- Galería de imágenes (placeholders)

## Personalización

### Añadir imágenes reales
Reemplazar los textos en los elementos de galería con etiquetas `<img>`:
```html
<div class="gallery-item">
    <img src="ruta/imagen.jpg" alt="Descripción">
</div>
```

### Modificar colores
Los colores principales están al inicio del CSS dentro del archivo HTML.

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere conexión a internet
- No requiere servidor web

## Licencia

Uso libre para fines educativos y presentaciones.

---

*Desarrollado para presentaciones técnicas en el sector portuario*