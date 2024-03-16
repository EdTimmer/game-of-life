import { CounterContainer } from './Counter.css';
import { useStore } from '../../store';

function Counter() {
  const cycleCount = useStore(state => state.cycleCount);
  return <CounterContainer>{cycleCount}</CounterContainer>;
}

export default Counter;
