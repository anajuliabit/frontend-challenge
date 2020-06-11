import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from 'react-loader-spinner';

import { valueBelongSet } from '../../utils/valueBelongSet';
import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import Pokemon from '../../shared/interfaces/Pokemon';
import InputRange from '../../components/InputRange';

import { Container, Content } from './styles';
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
  const [range, setRange] = useState<number[]>([0, 4000]);
  const [pokemons, setPokemons] = useState<Pokemon[]>((data && data.pokemons) || []);

  useEffect(() => {
    setPokemons(
      (data && data.pokemons.filter((p: Pokemon) => valueBelongSet(p.maxCP, range))) || []
    );
  }, [range, data]);

  // @TODO tratar erro
  if (error) return <p>Error :(</p>;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ): void => {
    setRange(newValue as number[]);
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        {loading ? (
          <div className="loader">
            <Loader type="Oval" color={blue} />
          </div>
        ) : (
          <>
            <header>
              <h1>Lista de pokémons</h1>
              <strong>Total visíveis: {pokemons.length}</strong>
            </header>
            <section className="items">
              {pokemons.map((pokemon: Pokemon) => (
                <PokemonCard key={pokemon.number} pokemon={pokemon} />
              ))}
            </section>
          </>
        )}
      </Content>
      <Content height="30vh" width="35vw">
        <header>
          <h1>Filtro</h1>
        </header>
        <section>
          <InputRange value={range} handleChange={handleChange} />
        </section>
      </Content>
    </Container>
  );
};
export default List;
