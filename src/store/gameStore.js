import { create } from 'zustand';
import preguntasData from '../data/preguntas.json';

const useGameStore = create((set, get) => ({
  // Estado inicial
  todasLasPreguntas: [],
  opcionesPreguntas: [], // Las 3 preguntas actuales en la tarjeta
  juegoIniciado: false,
  categoriaSeleccionada: null, // "Tus experiencias", "Otro", o null para todas

  // Inicializar el juego
  iniciarJuego: (categoria = null) => {
    // Combinar preguntas según la categoría seleccionada
    let todasLasPreguntas = [];
    
    if (categoria === "Tus experiencias") {
      todasLasPreguntas = [...preguntasData.preguntas["Tus experiencias"]];
    } else if (categoria === "Otro") {
      todasLasPreguntas = [...preguntasData.preguntas["Otro"]];
    } else {
      // Si no se especifica categoría, usar todas
      todasLasPreguntas = [
        ...preguntasData.preguntas["Tus experiencias"],
        ...preguntasData.preguntas["Otro"]
      ];
    }
    
    set({
      todasLasPreguntas: todasLasPreguntas,
      juegoIniciado: true,
      categoriaSeleccionada: categoria,
    });
    
    // Generar las primeras 3 preguntas
    get().barajarPreguntas();
  },

  // Cambiar categoría durante el juego
  cambiarCategoria: (categoria) => {
    let todasLasPreguntas = [];
    
    if (categoria === "Tus experiencias") {
      todasLasPreguntas = [...preguntasData.preguntas["Tus experiencias"]];
    } else if (categoria === "Otro") {
      todasLasPreguntas = [...preguntasData.preguntas["Otro"]];
    } else {
      // null significa todas las categorías
      todasLasPreguntas = [
        ...preguntasData.preguntas["Tus experiencias"],
        ...preguntasData.preguntas["Otro"]
      ];
    }
    
    set({
      todasLasPreguntas: todasLasPreguntas,
      categoriaSeleccionada: categoria,
    });
    
    // Generar nuevas preguntas de la categoría seleccionada
    get().barajarPreguntas();
  },

  // Barajar y generar 3 nuevas preguntas aleatorias
  barajarPreguntas: () => {
    const { todasLasPreguntas } = get();
    
    // Crear una copia mezclada de todas las preguntas
    const preguntasMezcladas = [...todasLasPreguntas].sort(() => Math.random() - 0.5);
    
    // Seleccionar 3 preguntas aleatorias
    const opciones = [];
    for (let i = 0; i < 3 && i < preguntasMezcladas.length; i++) {
      opciones.push(preguntasMezcladas[i]);
    }
    
    set({
      opcionesPreguntas: opciones,
    });
  },

  // Reiniciar el juego
  reiniciarJuego: () => {
    set({
      opcionesPreguntas: [],
      juegoIniciado: false,
      categoriaSeleccionada: null,
    });
  },
}));

export default useGameStore;

