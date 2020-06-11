import GenericEnum from './GenericEnum';

export class Type extends GenericEnum {
  static readonly NORMAL = new Type('NORMAL', 'Normal');
  static readonly FIRE = new Type('FIRE', 'Fire');
  static readonly Fighting = new Type('FIGHTING', 'Fighting');
  static readonly Water = new Type('WATER', 'Water');
  static readonly Flying = new Type('FLYING', 'Flying');
  static readonly Grass = new Type('GRASS', 'Grass');
  static readonly Poison = new Type('POISON', 'Poison');
  static readonly Electric = new Type('ELETRIC', 'Eletric');
  static readonly Ground = new Type('GROUND', 'Ground');
  static readonly Psychic = new Type('PSYCHIC', 'Psychic');
  static readonly Rock = new Type('ROCK', 'Rock');
  static readonly Ice = new Type('ICE', 'Ice');
  static readonly Bug = new Type('BUG', 'Bug');
  static readonly Dragon = new Type('DRAGON', 'Dragon');
  static readonly Ghost = new Type('GHOST', 'Ghost');
  static readonly Dark = new Type('DARK', 'Dark');
  static readonly Steel = new Type('STEEL', 'Steel');
  static readonly Fairy = new Type('FAIRY', 'Fairy');

  private constructor(public key: string, public readonly label: string) {
    super(key, label);
  }
}
