import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from 'react-loader-spinner';

import { valueBelongSet } from '../../utils/valueBelongSet';
import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import Pokemon from '../../shared/Pokemon';
import InputRange from '../../components/InputRange';
import CheckboxList from '../../components/CheckboxList';

import { Container, Content } from './styles';
import { blue } from '../../assets/styles/colors';
import { Type } from '../../shared/Type';
import { filterType } from '../../utils/filterType';

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
  const [types, setTypes] = useState<Array<Type> | []>(Type.toArray());

  useEffect(() => {
    if (!loading && data) {
      data.pokemons = data.pokemons.map((response: any) => {
        response.types = (response.types || []).map((type: string) => Type.get(type.toUpperCase()));
        return response;
      });
      setPokemons(data.pokemons);
    }
  }, [data]);

  // @TODO tratar erro
  if (error) return <p>Error :(</p>;

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number[]): void => {
    setRange(newValue as number[]);
    applyFilter();
  };

  const handleTypesChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newType: Type | undefined = types.find((t: Type) => t.key === event?.target?.name);
    if (newType) {
      newType.checked = event?.target?.checked;
      setTypes([...types, newType]);
      applyFilter();
    }
  };

  const applyFilter = (): void => {
    if (!loading && data) {
      setPokemons(
        data.pokemons.filter(
          (p: Pokemon) =>
            valueBelongSet(p.maxCP, range) &&
            filterType(
              p.types,
              types.filter((t: Type) => t.checked)
            )
        )
      );
    }
  };

  const changeMin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRange(range.splice(0, 1, Number(event.target.value)));
  };

  const changeMax = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRange(range.splice(range.length - 1, 1, Number(event.target.value)));
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
      <Content height="60vh" width="35vw">
        <header>
          <h1>Filtro</h1>
        </header>
        <section className="filters">
          <InputRange value={range} handleChange={handleRangeChange} changeMin={changeMin} changeMax={changeMax} />
          <CheckboxList types={types} handleClick={handleTypesChange} />
        </section>
      </Content>
    </Container>
  );
};
export default List;
