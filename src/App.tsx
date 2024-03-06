import { AppContainer, CenterLeft, CenterRight, CenterSection } from './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import Explanation from './components/Explanation/Explanation';
import { useStore } from './store';
import { runCycle } from './utils/runCycle';
import Button from './components/Button/Button';

function App() {
  const board = useStore(state => state.board)
  const reset = useStore(state => state.reset)
  const toggleAlive = useStore(state => state.toggleAlive)

  return (
    <AppContainer>
      <Header />
      <CenterSection>
        <CenterLeft>
          <Board board={board} />
        </CenterLeft>
        <CenterRight>
          <Explanation />
          <Button onClick={() => runCycle(board, toggleAlive)}>Run One Cycle</Button>
          <Button onClick={reset}>Reset</Button>
        </CenterRight>

      </CenterSection>



    </AppContainer>
  );
}

export default App;
