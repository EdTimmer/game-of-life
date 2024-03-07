import { StyledButton } from "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;
