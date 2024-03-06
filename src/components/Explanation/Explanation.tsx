import {
  ExplanationContainer,
  ExplanationSecion,
  ExplanationText,
} from './Explanation.css';

const Explanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationSecion>
        <p>Instructions</p>
        <p>A. Click on the board to make initial shape</p>
        <p>B. Click on the Run Cycle button</p>
      </ExplanationSecion>
      <ExplanationSecion>
        <p>Rules</p>
        <p>1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.</p>
        <p>2. Any live cell with two or three live neighbors lives on to the next generation.</p>
        <p>3. Any live cell with more than three live neighbors dies, as if by overpopulation.</p>
        <p>4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</p>
      </ExplanationSecion>
    </ExplanationContainer>
  );
};

export default Explanation;