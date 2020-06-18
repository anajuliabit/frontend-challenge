import React from 'react';

import { Container } from './styles';
import Pokemon from '../../shared/Pokemon';
import { blue, orange, purple, yellow } from '../../assets/styles/colors';
import { Type } from '../../shared/Type';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon: { image, maxCP, name, number, types } }) => {
  // Da pra encurtar uma pouco is if's, por que é lógico que se passar da primeira condição
  // (se o maxCP nao for menor ou igual a 500, ele é maior que 500, que era a condição seguinte)
  const getColor = (pokemonMaxCP: number) => {
    if (pokemonMaxCP <= 500) {
      return orange;
    }
    if (pokemonMaxCP <= 1000) {
      return purple;
    }
    if (pokemonMaxCP <= 2000) {
      return yellow;
    }
    return blue;
  };

  return (
    <Container color={getColor(maxCP)}>
      <section>
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="details">
          <strong>{name}</strong>
          <p>{types.map(({ label }: Type) => label).join(', ')}</p>
          <div className="totalizer">{maxCP}</div>
        </div>
      </section>
      <p>{number}</p>
    </Container>
  );
};

export default PokemonCard;
