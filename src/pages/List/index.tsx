import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from 'react-loader-spinner';

import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';
import Pokemon from '../../shared/interfaces/Pokemon';
import { blue } from '../../assets/styles/colors';

const POKEMONS = gql`
  {
    pokemons(first: 151) {
      number
      name
      types
      maxCP
      image
    }
  }
`;

const List = () => {
  const { loading, error, data } = useQuery(POKEMONS);
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Sidebar />
      <section className="list">
        {loading ? (
          <div className="loader">
            <Loader type="Oval" color={blue} />
          </div>
        ) : (
          <>
            <header>
              <h1>Lista de pokémons</h1>
              <strong>Total visíveis: {data.pokemons.length}</strong>
            </header>
            <section className="items">
              {data.pokemons.map((pokemon: Pokemon) => (
                <PokemonCard key={pokemon.number} pokemon={pokemon} />
              ))}
            </section>
          </>
        )}
      </section>
    </Container>
  );
};
export default List;
