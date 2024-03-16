import { useStore } from '../../store';
import {
  ShapesContainer,
  ShapesHeader,
  ShapesSecion,
} from './Shapes.css';
import Button from '@mui/material/Button';

interface ShapesProps {
  handleClose: () => void;
}

const Shapes = ({ handleClose }: ShapesProps) => {
  const makeShape = useStore(state => state.makeShape)

  const handleShapeSelection = (shape: string) => {
    switch (shape) {
      case "GLIDER":
        makeShape("glider")
        break;
      case "PULSAR":
        makeShape("pulsar")
        break;
      case "GLIDER_GUN":
        makeShape("gliderGun")
        break;
      case "RANDOM":
        makeShape("random")
        break;
      default:
        makeShape("glider")
    }
    handleClose()
  }

  return (
    <ShapesContainer>

      <ShapesSecion>
        <ShapesHeader>Shapes</ShapesHeader>
        <Button variant="contained" color="secondary" size="large" aria-label="glider" onClick={() => handleShapeSelection("GLIDER")} sx={{ width: '12rem' }} >
          GLIDER
        </Button>
      </ShapesSecion>
    </ShapesContainer>
  );
};

export default Shapes;
