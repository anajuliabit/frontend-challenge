import React from 'react';

import { Container } from './styles';
import Pokemon from '../../shared/Pokemon';
import { blue, orange, purple, yellow } from '../../assets/styles/colors';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const getColor = (maxCP: number) => {
    if (maxCP <= 500) {
      return orange;
    }
    if (maxCP > 500 && maxCP <= 1000) {
      return purple;
    }
    if (maxCP > 1000 && maxCP <= 2000) {
      return yellow;
    }
    return blue;
  };
  return (
    <Container color={getColor(pokemon.maxCP)}>
      <div>
        <div className="image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <section>
          <strong>{pokemon.name}</strong>
          <p>Grass, Poison</p>
          <div className="totalizer">{pokemon.maxCP}</div>
        </section>
      </div>
      <p>{pokemon.number}</p>
    </Container>
  );
};

export default PokemonCard;
