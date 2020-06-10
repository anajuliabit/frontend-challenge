import React from 'react';

import { Container } from './styles';
import Pokemon from '../../shared/interfaces/Pokemon';

interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => (
  <Container>
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <section>
        <strong>{pokemon.name}</strong>
        <p>Grass, Poison</p>
        <div className="totalizer">{pokemon.maxCP}</div>
      </section>
    </div>
    <p>{pokemon.number}</p>
  </Container>
);

export default PokemonCard;
