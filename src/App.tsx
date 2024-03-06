import { AppContainer } from './App.css';
import Board from './components/Board/Board';
import { useStore } from './store';
import { getAdjacentStatus } from './utils/getAdjacentStatus';
// import { runOneCycle } from './utils/runOneCycle';

function App() {
  const board = useStore(state => state.board)
  const aliveCells = useStore(state => state.aliveCells)
  const runOneCycle = useStore(state => state.runOneCycle)
  // getAdjacentStatus(1, 1, board)
  // console.log('aliveCells :>> ', aliveCells);
  console.log('app rendered')
  return (
    <AppContainer>
      <Board board={board} />
      <button onClick={() => runOneCycle()}>Evaluate</button>
    </AppContainer>
  );
}

export default App;
