import useGameStore from './store/gameStore';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  const juegoIniciado = useGameStore((state) => state.juegoIniciado);

  return (
    <>
      {juegoIniciado ? <Game /> : <Home />}
    </>
  );
}

export default App
