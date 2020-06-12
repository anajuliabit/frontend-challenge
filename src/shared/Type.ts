import GenericEnum from './GenericEnum';

export class Type extends GenericEnum {
  static NORMAL = new Type('NORMAL', 'Normal');
  static FIRE = new Type('FIRE', 'Fire');
  static Fighting = new Type('FIGHTING', 'Fighting');
  static Water = new Type('WATER', 'Water');
  static Flying = new Type('FLYING', 'Flying');
  static Grass = new Type('GRASS', 'Grass');
  static Poison = new Type('POISON', 'Poison');
  static Electric = new Type('ELECTRIC', 'Electric');
  static Ground = new Type('GROUND', 'Ground');
  static Psychic = new Type('PSYCHIC', 'Psychic');
  static Rock = new Type('ROCK', 'Rock');
  static Ice = new Type('ICE', 'Ice');
  static Bug = new Type('BUG', 'Bug');
  static Dragon = new Type('DRAGON', 'Dragon');
  static Ghost = new Type('GHOST', 'Ghost');
  static Dark = new Type('DARK', 'Dark');
  static Steel = new Type('STEEL', 'Steel');
  static Fairy = new Type('FAIRY', 'Fairy');

  private constructor(public key: string, public readonly label: string) {
    super(key, label);
  }
}
