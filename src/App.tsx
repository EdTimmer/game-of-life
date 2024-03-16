import { ThemeProvider } from '@mui/material/styles';
import { AppContainer } from './App.css';
import Header from './components/Header/Header';
import { theme } from './styles/theme';
import BoardAndControls from './components/BoardAndControls/BoardAndControls';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <BoardAndControls />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
