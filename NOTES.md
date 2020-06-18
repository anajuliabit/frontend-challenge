# Review notes

## Tentando Rodar

Primeiramente parabéns, o projeto ficou bem simples de rodar, apenas dois comandos e já deu tudo certo.

O README ficou com uma estrutura bem legal, foi bem pontuado o que foi feito e o que não foi feito além de explicar sucintamente o objetivo do projeto e da onde foi buscado esses dados.

## Review do layout

Em geral ficou muito bom, tiveram algumas pequenas inconsistências (o que é normal de acontecer), vou apenas pontuar aqui como feedback:

- Borda do filtro e da lista de pokemons está com 20px, mas no projeto XD seria 50px;
- O card de CP não está alinhado com a parte inferior da imagem do pokemon;
- A section da lista de pokemons está com um padding de 20px no top, entretanto o header era pra ficar com 40px de espaçamento.
- Na sidebar ficou desalinhado, a tela de Lista ficou muito para direita
- A lista não tem o mesmo tamanho proposto (718px)
- O espaçamento da barra de scrollar e o card do pokemon está o dobro que o projeto
- O espaçamento entre os cards na vertical está de 20px (pois cada card tem margin de 10px no top e bot), entretanto o proposto era 15px
- O espaçamento entre os cards na horizontal está bem maior que o proposto, mais que o dobro aparentemente.
- A fonte renderizada não é a Roboto conforme o projeto, pelo que vi também não foi importada no projeto.
- A usuabilidade do filtro enquanto arrasta ficou bem travada, provavelmente pela forma em que os resultados eram renderizados.

## Review do código

Pontos gerais notados:
- Foi utilizado styled-components e isso foi bem legal, porém uma das vantagens de utilizar ele é deixar o código mais semântico, porém não foi aproveitado ao máximo da tecnologia. Por exemplo no PokemonCard, só foi utilizado para o Container, sendo que o resto era html puro, poderias ter criado uma div com styled components que o nome seria PokemonImage, mesma coisa com PokemonDetails.
- Teve alguns any na tipagem do typescript, isso não nos ajuda muito
- A query pra pegar os dados não foi tipada, então conteve mais um any ali na hora de mapear os pokemons, uma alternativa pra isso seria usar o codegen (https://graphql-code-generator.com/)
- Achei bem legal como foi estruturado o ENUM do Type, parabéns =), só uma sugestão era colocar o valor default de checked como true, já que todos são, ai não precisaria repetir todas as vezes.
- Bem massa ter colocado eslint no projeto, deixa bem mais padronizado =)
