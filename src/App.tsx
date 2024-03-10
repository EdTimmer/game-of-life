import { ThemeProvider } from '@mui/material/styles';
import { AppContainer, CenterSection } from './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import { useStore } from './store';
import Controls from './components/Controls/Controls';
import { theme } from './styles/theme';

function App() {
  const board = useStore(state => state.board);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <CenterSection>
          <Board board={board} />
          <Controls />
        </CenterSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
