import React, { useState, useEffect, useCallback } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from 'react-loader-spinner';

import { valueBelongSet } from '../../utils/valueBelongSet';
import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import Pokemon from '../../shared/Pokemon';
import InputRange, { OnChangeProp } from '../../components/InputRange';
import CheckboxList from '../../components/CheckboxList';

import { Container, Content } from './styles';
import { blue } from '../../assets/styles/colors';
import { Type } from '../../shared/Type';
import { filterType } from '../../utils/filterType';
// poderias separar a parte de queries em uma pasta em src/queries/pokemons.ts
// se tiver um outro lugar do código (ok, agora estamos fazendo apenas uma landing page)
// vais ter que repetir essa parte do código
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

const List:React.FC<{}> = () => {
  // o que é data?
  const { loading, error, data } = useQuery(POKEMONS);
  const [range, setRange] = useState<number[]>([0, 4000]);
  const [minCP, setMinCP] = useState<number>(0);
  const [maxCP, setMaxCP] = useState<number>(4000);
  const [pokemons, setPokemons] = useState<Pokemon[]>((data && data.pokemons) || []);
  const [types, setTypes] = useState<Array<Type> | []>(Type.toArray());

  const applyFilter = useCallback((): void => {
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
  }, [data, loading, range, types]);

  useEffect(() => {
    if (!loading && data) {
      // aqui a response ficou como any justamente por nao ter a tipagem do que é pego do backend.
      data.pokemons = data.pokemons.map((response: any) => {
        response.types = (response.types || []).map((type: string) => Type.get(type.toUpperCase()));
        return response;
      });
      setPokemons(data.pokemons);
    }
  }, [data, loading]);

  useEffect(() => {
    if (minCP < maxCP) {
      setRange([minCP, maxCP]);
      applyFilter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minCP, maxCP]);

  // @TODO tratar erro
  if (error) return <p>Error :(</p>;
  // no caso essa funcão teria que ser alterada para se adequar agora ao componente que agora segue a tipagem dele
  const handleRangeChange: OnChangeProp = (_, newValue) => {
    setMinCP(newValue[0]);
    // @ts-ignore
    setMaxCP(newValue[newValue.length - 1]);
  };

  const changeMin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMinCP(Number(event.target.value));
  };

  const changeMax = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMaxCP(Number(event.target.value));
  };

  const handleTypesChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newType: Type | undefined = types.find((t: Type) => t.key === event?.target?.name);
    if (newType) {
      newType.checked = event?.target?.checked;
      setTypes([...types, newType]);
      applyFilter();
    }
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
      <Content height="auto" width="35vw" widthDesktop="40vw">
        <header>
          <h1>Filtro</h1>
        </header>
        <section className="filters">
          <InputRange value={range} min={minCP} max={maxCP} handleChange={handleRangeChange} changeMin={changeMin} changeMax={changeMax} />
          <CheckboxList types={types} handleClick={handleTypesChange} />
        </section>
      </Content>
    </Container>
  );
};
export default List;
