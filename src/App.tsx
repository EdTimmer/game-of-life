import { AppContainer } from './App.css';
import Board from './components/Board/Board';
import { useStore } from './store';

function App() {
  const board = useStore(state => state.board)
  const runOneCycle = useStore(state => state.runOneCycle)
  const reset = useStore(state => state.reset)

  return (
    <AppContainer>
      <Board board={board} />
      <button onClick={runOneCycle}>Evaluate</button>
      <button onClick={reset}>Reset</button>
    </AppContainer>
  );
}

export default App;
