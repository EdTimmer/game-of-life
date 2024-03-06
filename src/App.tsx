import { AppContainer } from './App.css';
import Board from './components/Board/Board';
import { useStore } from './store';
import { runCycle } from './utils/runCycle';

function App() {
  const board = useStore(state => state.board)
  const reset = useStore(state => state.reset)
  const toggleAlive = useStore(state => state.toggleAlive)

  return (
    <AppContainer>
      <Board board={board} />
      <button onClick={() => runCycle(board, toggleAlive)}>Evaluate</button>
      <button onClick={reset}>Reset</button>
    </AppContainer>
  );
}

export default App;
