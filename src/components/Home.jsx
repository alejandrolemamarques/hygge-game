import { useState } from 'react';
import useGameStore from '../store/gameStore';
import preguntasData from '../data/preguntas.json';

function Home() {
  const iniciarJuego = useGameStore((state) => state.iniciarJuego);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleIniciarJuego = () => {
    iniciarJuego(categoriaSeleccionada);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo/Título */}
        <div className="mb-12">
          <div className="text-6xl mb-4">🛋️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            El Juego Hygge
          </h1>
          <p className="text-emerald-100 text-xl md:text-2xl font-medium">
            Conversaciones acogedoras<br />en buena compañía
          </p>
        </div>

        {/* Descripción */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
          <p className="text-white text-base md:text-lg leading-relaxed mb-4">
            <strong>Hygge</strong> es una palabra escandinava que describe el placer de disfrutar 
            de las cosas buenas de la vida, evocando una atmósfera acogedora de bienestar, 
            calma y satisfacción.
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed mb-4">
            Este juego está diseñado para unir a las personas, animando a amigos y familiares 
            a compartir historias y conectar a través de conversaciones sobre los temas grandes 
            y pequeños de la vida.
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Incluye más de <strong>{preguntasData.preguntas["Tus experiencias"].length + preguntasData.preguntas["Otro"].length} preguntas</strong> diseñadas 
            para generar conversaciones significativas y crear la atmósfera perfecta para una 
            velada hygge.
          </p>
        </div>

        {/* Selector de categorías */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <p className="text-white text-base md:text-lg font-semibold mb-4">
            Elige una categoría (opcional):
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setCategoriaSeleccionada(null)}
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                categoriaSeleccionada === null
                  ? 'bg-white text-emerald-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setCategoriaSeleccionada("Tus experiencias")}
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                categoriaSeleccionada === "Tus experiencias"
                  ? 'bg-white text-emerald-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Tus experiencias
            </button>
            <button
              onClick={() => setCategoriaSeleccionada("Otro")}
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                categoriaSeleccionada === "Otro"
                  ? 'bg-white text-emerald-700 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Otro
            </button>
          </div>
        </div>

        {/* Botón de inicio */}
        <button
          onClick={handleIniciarJuego}
          className="w-full bg-white text-emerald-700 font-bold text-xl py-5 px-8 rounded-2xl shadow-2xl hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105"
        >
          Comenzar Juego
        </button>

        {/* Info adicional */}
        <div className="mt-8 text-emerald-100 text-sm">
          <p>Ideal para una noche tranquila en casa,</p>
          <p>una cena íntima o una reunión con amigos o familia.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

