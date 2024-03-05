import { AppContainer } from './App.css';
import Board from './components/Board/Board';
import { useStore } from './store';

function App() {
  const board = useStore(state => state.board)
  console.log('board :>> ', board);
  return (
    <AppContainer>
      <Board board={board} />
    </AppContainer>
  );
}

export default App;
