function QuestionCard({ opciones }) {
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="relative w-full min-h-[500px] rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 flex flex-col p-6">
        {/* Recordatorio */}
        <div className="text-center mb-6">
          <p className="text-emerald-700 text-base md:text-lg font-semibold">
            Responde solo una de las tres preguntas
          </p>
        </div>

        {/* Lista de 3 preguntas para leer */}
        <div className="flex-1 space-y-6 flex flex-col justify-center">
          {opciones.map((pregunta, index) => (
            <div
              key={index}
              className="w-full bg-white border-2 border-emerald-200 rounded-xl p-5 shadow-sm"
            >
              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                {pregunta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;

