import { ShapeEnum } from '../../types';
import {
  StyledButton,
  ButtonHeader,
  ButtonBottomRow,
  ButtonTopRow,
  ButtonContent,
  ButtonDescriptionContainer,
  DescriptionText,
} from './ShapeButton.css';

interface ShapeButtonProps {
  handleShapeSelection: (shape: ShapeEnum) => void;
  shape: ShapeEnum;
  label: string;
  imageFileName: string;
  shapeDescription?: string;
}

const ShapeButton = ({
  handleShapeSelection,
  shape,
  label,
  imageFileName,
  shapeDescription = '',
}: ShapeButtonProps) => {
  return (
    <StyledButton
      variant="outlined"
      color="secondary"
      size="large"
      aria-label={label}
      onClick={() => handleShapeSelection(shape)}
    >
      <ButtonContent>
        <ButtonTopRow>
          <ButtonHeader>{label}</ButtonHeader>
        </ButtonTopRow>

        <ButtonBottomRow>
          <img src={imageFileName} alt={label} />

          <ButtonDescriptionContainer>
            <DescriptionText>{shapeDescription}</DescriptionText>
          </ButtonDescriptionContainer>
        </ButtonBottomRow>
      </ButtonContent>
    </StyledButton>
  );
};

export default ShapeButton;
