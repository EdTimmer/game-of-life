import { AppContainer, CenterSection } from './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import { useStore } from './store';
import Controls from './components/Controls/Controls';

function App() {
  const board = useStore(state => state.board);

  return (
    <AppContainer>
      <Header />
      <CenterSection>
        <Board board={board} />
        <Controls />
      </CenterSection>
    </AppContainer>
  );
}

export default App;
