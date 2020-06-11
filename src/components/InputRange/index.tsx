import React from 'react';

import { Container, SliderCustom } from './styles';

interface Props {
  value: number | number[];
  handleChange: any;
}

const InputRange: React.FC<Props> = ({ value, handleChange }) => (
  <Container>
    <SliderCustom
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={() => 'maxCP'}
      min={0}
      max={4000}
      track="normal"
      classes={{ track: 'track', rail: 'rail', thumb: 'thumb' }}
    />
  </Container>
);

export default InputRange;
