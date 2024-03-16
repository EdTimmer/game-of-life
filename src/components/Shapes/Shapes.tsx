import { useStore } from '../../store';
import { ShapeEnum } from '../../types';
import ShapeButton from '../ShapeButton/ShapeButton';
import { ShapesContainer } from './Shapes.css';
import { gliderDescription } from '../../shapesData/glider';
import { whyNotDescription } from '../../shapesData/whyNot';
import { pulsarPrecursorDescription } from '../../shapesData/pulsarPrecursor';
import { lightweightSpaceshipDescription } from '../../shapesData/lightweightSpaceship';

interface ShapesProps {
  handleClose: () => void;
}

const Shapes = ({ handleClose }: ShapesProps) => {
  const makeShape = useStore(state => state.makeShape);

  const handleShapeSelection = (shape: ShapeEnum) => {
    makeShape(shape);
    handleClose();
  };

  return (
    <ShapesContainer>
      <ShapeButton
        imageFileName="glider2.png"
        shapeDescription={gliderDescription}
        handleShapeSelection={handleShapeSelection}
        shape={ShapeEnum.GLIDER}
        label="glider"
      />
      <ShapeButton
        imageFileName="lightweight_spaceship.png"
        shapeDescription={lightweightSpaceshipDescription}
        handleShapeSelection={handleShapeSelection}
        shape={ShapeEnum.LIGHTWEIGHT_SPACESHIP}
        label="lightweight spaceship"
      />
      <ShapeButton
        imageFileName="pulsar_precursor.png"
        shapeDescription={pulsarPrecursorDescription}
        handleShapeSelection={handleShapeSelection}
        shape={ShapeEnum.PULSAR_PRECURSOR}
        label="pulsar precursor"
      />
      <ShapeButton
        imageFileName="why_not.png"
        shapeDescription={whyNotDescription}
        handleShapeSelection={handleShapeSelection}
        shape={ShapeEnum.WHY_NOT}
        label="why not"
      />
    </ShapesContainer>
  );
};

export default Shapes;
