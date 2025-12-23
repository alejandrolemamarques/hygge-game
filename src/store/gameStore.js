import { create } from 'zustand';
import preguntasData from '../data/preguntas.json';

const useGameStore = create((set, get) => ({
  // Estado inicial
  todasLasPreguntas: [],
  opcionesPreguntas: [], // Las 3 preguntas actuales en la tarjeta
  juegoIniciado: false,

  // Inicializar el juego
  iniciarJuego: () => {
    const todasLasPreguntas = [...preguntasData.preguntas];
    
    set({
      todasLasPreguntas: todasLasPreguntas,
      juegoIniciado: true,
    });
    
    // Generar las primeras 3 preguntas
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
    });
  },
}));

export default useGameStore;

