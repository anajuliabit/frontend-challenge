import React from 'react';

import { Container, SliderCustom } from './styles';

interface Props {
  value: number[];
  handleChange: any;
  changeMin: any;
  changeMax: any;
}

const InputRange: React.FC<Props> = ({ value, handleChange, changeMin, changeMax }) => (
  <Container>
    <span>maxCP</span>
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
    <section>
      <input type="number" value={value[0]} onChange={changeMin} />
      <input type="number" value={value[value.length - 1]} onChange={changeMax} />
    </section>
  </Container>
);

export default InputRange;
