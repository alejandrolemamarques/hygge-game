import { useEffect } from 'react';
import useGameStore from '../store/gameStore';
import QuestionCard from './QuestionCard';

function Game() {
  const {
    opcionesPreguntas,
    barajarPreguntas,
    juegoIniciado,
  } = useGameStore();

  useEffect(() => {
    // Asegurarse de que el juego esté iniciado
    if (!juegoIniciado) {
      useGameStore.getState().iniciarJuego();
    }
  }, [juegoIniciado]);

  if (!juegoIniciado || opcionesPreguntas.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-2">
            El Juego Hygge
          </h1>
          <p className="text-emerald-700 text-lg">
            Conversaciones acogedoras en buena compañía
          </p>
        </div>

        {/* Tarjeta con 3 preguntas */}
        <QuestionCard opciones={opcionesPreguntas} />

        {/* Botón para barajar */}
        <div className="mt-8 text-center">
          <button
            onClick={barajarPreguntas}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Barajar Tarjeta
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            onClick={() => useGameStore.getState().reiniciarJuego()}
            className="text-emerald-700 hover:text-emerald-800 font-medium underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;

