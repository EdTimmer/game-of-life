import {
  HeaderContainer,
  TitleContainer,
  Title,
  IntroductionContainer,
  IntroductionText,
} from './Header.css';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Conway's Game of Life</Title>
      </TitleContainer>
      <IntroductionContainer>
        <IntroductionText>
          The Game of Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
        </IntroductionText>
      </IntroductionContainer>
    </HeaderContainer>
  );
};

export default Header;