import { useStore } from '../../store';
import { HeaderContainer, Title, Counter, SideContainer } from './Header.css';

const Header = () => {
  const cycleCount = useStore(state => state.cycleCount);
  return (
    <HeaderContainer>
      <SideContainer />
      <Title>Conway's Game of Life</Title>
      <SideContainer>
        <Counter>{cycleCount}</Counter>
      </SideContainer>
    </HeaderContainer>
  );
};

export default Header;
