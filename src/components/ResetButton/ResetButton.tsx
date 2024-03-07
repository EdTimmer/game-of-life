import { StyledResetButton } from "./ResetButton.css";

interface ResetButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ResetButton = ({ onClick, children}: ResetButtonProps) => {
  return (
    <StyledResetButton onClick={onClick}>{children}</StyledResetButton>
  )
}

export default ResetButton;
