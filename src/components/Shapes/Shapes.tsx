import { useStore } from '../../store';
import { ShapeEnum } from '../../types';
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

  const handleShapeSelection = (shape: ShapeEnum) => {
    makeShape(shape)
    handleClose()
  }

  return (
    <ShapesContainer>
      <ShapesSecion>
        <ShapesHeader>Shapes</ShapesHeader>
        <Button variant="contained" color="secondary" size="large" aria-label="glider" onClick={() => handleShapeSelection(ShapeEnum.GLIDER)} sx={{ width: '12rem' }} >
          GLIDER
        </Button>

        <Button variant="contained" color="secondary" size="large" aria-label="pulsar precursor" onClick={() => handleShapeSelection(ShapeEnum.PULSAR_PRECURSOR)} sx={{ width: '12rem' }} >
          PULSAR PRECUROR
        </Button>
      </ShapesSecion>
    </ShapesContainer>
  );
};

export default Shapes;
