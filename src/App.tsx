import { ThemeProvider } from '@mui/material/styles';
import { AppContainer, CenterSection } from './App.css';
import Header from './components/Header/Header';
import { useStore } from './store';
import { theme } from './styles/theme';
import BoardAndControls from './components/BoardAndControls/BoardAndControls';

function App() {
  const board = useStore(state => state.board);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <CenterSection>
          <BoardAndControls />
        </CenterSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
