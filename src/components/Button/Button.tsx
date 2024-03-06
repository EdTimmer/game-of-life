import { StyledButton } from "./Button.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;
