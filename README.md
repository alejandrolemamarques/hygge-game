# El Juego Hygge

Un juego de preguntas diseñado para fomentar conversaciones acogedoras y conexiones significativas con amigos y familia.

## Características

- 🎴 Más de 50 preguntas en español diseñadas para generar conversaciones profundas
- 📱 Diseño responsive optimizado para móviles
- 🎨 Interfaz moderna con Tailwind CSS
- ⚡ Construido con React y Vite
- 🚀 Despliegue automático en GitHub Pages

## Desarrollo Local

### Requisitos

- Node.js 20 o superior
- pnpm

### Instalación

```bash
pnpm install
```

### Ejecutar en desarrollo

```bash
pnpm dev
```

### Construir para producción

```bash
pnpm build
```

### Vista previa de producción

```bash
pnpm preview
```

## Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama `main`.

### Configuración inicial

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente en cada push a `main`

### URL del sitio

Una vez desplegado, el sitio estará disponible en:
`https://alejandrolemamarques.github.io/hygge-game/`

## Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Card.jsx     # Componente de tarjeta de pregunta
│   ├── Game.jsx     # Componente principal del juego
│   └── Home.jsx     # Pantalla de inicio
├── data/            # Datos del juego
│   └── preguntas.json  # Archivo JSON con las preguntas
├── store/           # Estado global con Zustand
│   └── gameStore.js # Store del juego
├── App.jsx          # Componente raíz
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Agregar Preguntas

Para agregar más preguntas, edita el archivo `src/data/preguntas.json` y añade nuevas preguntas al array `preguntas`.

## Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Zustand** - Gestión de estado ligera
- **GitHub Actions** - CI/CD para despliegue automático

## Licencia

Este proyecto es privado.

