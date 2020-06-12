import { Type } from '../shared/Type';

export const filterType = (pokemonTypes: Type[], selectedTypes: Type[]): boolean => pokemonTypes.some((type: Type) => selectedTypes.includes(type));
