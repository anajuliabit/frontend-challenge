import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/'
});

client
  .query({
    query: gql`
        {
          pokemons(first: 10) {
            number,
            name,
            types,
            maxCP
          }
        }
      `
  })
  .then((result) => console.log(result));


const App: React.FC = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Routes />
  </ApolloProvider>
);

export default App;
