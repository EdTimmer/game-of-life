import Button from '../Button/Button';
import {
  ButtonsSection,
  ExplanationContainer,
  ExplanationHeader,
  ExplanationSecion,
  ExplanationText,
  RunContainer,
} from './Explanation.css';
import { useStore } from '../../store';
import { runCycle } from '../../utils/runCycle';
import ResetButton from '../ResetButton/ResetButton';

const Explanation = () => {
  const board = useStore(state => state.board)
  const cycleCount = useStore(state => state.cycleCount)
  const incrementCycleCount = useStore(state => state.incrementCycleCount)
  const reset = useStore(state => state.reset)
  const toggleAlive = useStore(state => state.toggleAlive)

  return (
    <ExplanationContainer>
      <div>
        <ExplanationSecion>
          <ExplanationHeader>Description</ExplanationHeader>
          <p>The Game of Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
        </ExplanationSecion>

        <ExplanationSecion>
          <ExplanationHeader>Rules</ExplanationHeader>
          <p>1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.</p>
          <p>2. Any live cell with two or three live neighbors lives on to the next generation.</p>
          <p>3. Any live cell with more than three live neighbors dies, as if by overpopulation.</p>
          <p>4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</p>
        </ExplanationSecion>

        <ExplanationSecion>
          <ExplanationHeader>Instructions</ExplanationHeader>
          <p>A. Click on the board to make an initial shape.</p>
          <p>B. Click on the Run button.</p>
          <p>C. Repeat step B to advance through cycles.</p>
          <p>D. Click the Reset button to reset the board.</p>
        </ExplanationSecion>
      </div>

      <ButtonsSection>
        <RunContainer>
          <Button onClick={() => { runCycle(board, toggleAlive); incrementCycleCount() }}>RUN</Button>
          <ExplanationText>cycle count: {cycleCount}</ExplanationText>
        </RunContainer>
        <ResetButton onClick={reset}>Reset</ResetButton>
      </ButtonsSection>
    </ExplanationContainer>
  );
};

export default Explanation;