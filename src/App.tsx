import { AppContainer, CenterLeft, CenterRight, CenterSection } from './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import Explanation from './components/Explanation/Explanation';
import { useStore } from './store';

function App() {
  const board = useStore(state => state.board)

  return (
    <AppContainer>
      <Header />
      <CenterSection>
        <CenterLeft>
          <Board board={board} />
        </CenterLeft>
        
        <CenterRight>
          <Explanation />
        </CenterRight>
      </CenterSection>



    </AppContainer>
  );
}

export default App;
