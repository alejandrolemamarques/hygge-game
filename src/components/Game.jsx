import { useEffect } from 'react';
import useGameStore from '../store/gameStore';
import QuestionCard from './QuestionCard';

function Game() {
  const {
    opcionesPreguntas,
    barajarPreguntas,
    juegoIniciado,
    categoriaSeleccionada,
    cambiarCategoria,
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

  const getCategoriaDisplay = () => {
    if (categoriaSeleccionada === "Tus experiencias") return "Tus experiencias";
    if (categoriaSeleccionada === "Otro") return "Otro";
    return "Todo";
  };

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

        {/* Selector de categorías */}
        <div className="mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <p className="text-sm text-gray-600 mb-3 text-center font-medium">
              Categoría actual de preguntas: <span className="text-emerald-700 font-bold">{getCategoriaDisplay()}</span>
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <button
                onClick={() => cambiarCategoria(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  categoriaSeleccionada === null
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Todo
              </button>
              <button
                onClick={() => cambiarCategoria("Tus experiencias")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  categoriaSeleccionada === "Tus experiencias"
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Tus experiencias
              </button>
              <button
                onClick={() => cambiarCategoria("Otro")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  categoriaSeleccionada === "Otro"
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Otro
              </button>
            </div>
          </div>
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

