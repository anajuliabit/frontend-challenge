import React from 'react';

import Sidebar from '../../components/Sidebar';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';

const List = () => (
  <Container>
    <Sidebar />
    <section className="list">
      <header>
        <h1>Lista de pokémons</h1>
        <strong>Total visíveis: 154</strong>
      </header>
      <section className="items">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

      </section>
    </section>
  </Container>
);

export default List;
