import React from 'react';
import { SliderTypeMap } from '@material-ui/core/Slider';

import { Container, SliderCustom } from './styles';

export type OnChangeProp = SliderTypeMap['props']['onChange'];

interface Props {
  value: number[];
  // Isso é o que efetivamente teu componente retorna no onChange dele, tirando o any você tem esse controle
  // do que as coisas estão acontecendo
  handleChange: OnChangeProp;
  changeMin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeMax: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

const InputRange: React.FC<Props> = ({ value, handleChange, min, max, changeMin, changeMax }) => (
  <Container>
    <span>maxCP</span>
    <SliderCustom
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={() => 'maxCP'}
      min={0}
      // O que acontece se tiver um pokemon com mais de 4000 CP? Como estamos pegando os dados de uma API, nada impede de em um
      // outro momento ser colocado um outro pokemon com mais do que isso e nosso filtro não funcionar corretamente
      max={4000}
      track="normal"
      classes={{ track: 'track', rail: 'rail', thumb: 'thumb' }}
    />
    <section>
      <input type="number" value={min} onChange={changeMin} />
      <input type="number" value={max} onChange={changeMax} />
    </section>
  </Container>
);

export default InputRange;
