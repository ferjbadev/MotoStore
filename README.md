# 🏍️ MotoStore - E-commerce de Motocicletas

E-commerce moderno y completo para la venta de motocicletas, construido con React, TypeScript y Vite.

## ✨ Características

- 🛒 **Carrito de Compras**: Sistema completo de gestión de carrito con persistencia
- 🔍 **Búsqueda y Filtros**: Búsqueda por texto y filtros por categoría
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- 🎨 **UI Moderna**: Interfaz limpia y atractiva con animaciones suaves
- 🚀 **Rendimiento**: Carga rápida y optimizada con Vite
- 📦 **12 Modelos**: Catálogo con motos de marcas premium (Yamaha, Ducati, BMW, etc.)
- 💳 **Proceso de Checkout**: Flujo completo de compra simulado

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Lucide React** - Iconos
- **CSS Modules** - Estilos modulares

## 📁 Estructura del Proyecto

```
MotoStore/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MotorcycleCard.tsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── context/         # Context API
│   │   └── CartContext.tsx
│   ├── hooks/           # Custom hooks
│   │   └── useCart.ts
│   ├── data/            # Datos estáticos
│   │   └── motorcycles.ts
│   ├── types/           # Definiciones TypeScript
│   │   └── index.ts
│   ├── styles/          # Estilos modulares
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── buttons.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── products.css
│   │   ├── product-detail.css
│   │   ├── cart.css
│   │   ├── checkout.css
│   │   └── pages.css
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js 20.19.0 o superior
- npm 10.9.0 o superior

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd MotoStore

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
```

## 📄 Páginas

- **Home** (`/`) - Página principal con hero, características y motos destacadas
- **Productos** (`/productos`) - Catálogo completo con búsqueda y filtros
- **Detalle** (`/producto/:id`) - Información detallada de cada moto
- **Carrito** (`/carrito`) - Gestión del carrito de compras
- **Checkout** (`/checkout`) - Proceso de finalización de compra
- **Sobre Nosotros** (`/sobre-nosotros`) - Información de la empresa
- **Contacto** (`/contacto`) - Formulario de contacto

## 🎨 Características de UI/UX

- Animaciones suaves en hover y transiciones
- Cards de productos con overlay interactivo
- Header sticky con badge de carrito
- Footer completo con enlaces y redes sociales
- Formularios validados
- Mensajes de confirmación
- Diseño mobile-first

## 🔧 Personalización

### Colores

Edita `src/styles/variables.css` para cambiar la paleta de colores:

```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #1a1a1a;
  /* ... más variables */
}
```

### Datos de Motos

Modifica `src/data/motorcycles.ts` para agregar o editar motos del catálogo.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ para entusiastas de las motocicletas
