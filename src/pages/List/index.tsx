import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';
import Pokemon from '../../shared/interfaces/Pokemon';

const POKEMONS = gql`
  {
    pokemons(first: 20) {
        number,
        name,
        types,
        maxCP,
        image
    }
  }
`;

const List = () => {
  const { loading, error, data } = useQuery(POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Sidebar />
      <section className="list">
        <header>
          <h1>Lista de pokémons</h1>
          <strong>Total visíveis: 154</strong>
        </header>
        <section className="items">
          {data.pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.number} pokemon={pokemon} />)}
        </section>
      </section>
    </Container>
  );
};
export default List;
