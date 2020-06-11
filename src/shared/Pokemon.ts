import { Type } from './Type';

export default interface Pokemon {
  number: number;
  name: string;
  types: Array<Type>;
  maxCP: number;
  image: string;
}
