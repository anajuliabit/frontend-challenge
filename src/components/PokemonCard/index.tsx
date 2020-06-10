import React from 'react';

import { Container } from './styles';
import Bulbasaur from '../../assets/bulbasaur.png';

const PokemonCard = () => (
  <Container>
    <div>
      <img src={Bulbasaur} />
      <section>
        <strong>Bulbasaur</strong>
        <p>Grass, Poison</p>
        <div className="totalizer">951</div>
      </section>
    </div>
    <p>001</p>
  </Container>
);

export default PokemonCard;
