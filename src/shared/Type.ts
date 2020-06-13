import GenericEnum from './GenericEnum';

export class Type extends GenericEnum {
  static NORMAL = new Type('NORMAL', 'Normal', true);
  static FIRE = new Type('FIRE', 'Fire', true);
  static Fighting = new Type('FIGHTING', 'Fighting', true);
  static Water = new Type('WATER', 'Water', true);
  static Flying = new Type('FLYING', 'Flying', true);
  static Grass = new Type('GRASS', 'Grass', true);
  static Poison = new Type('POISON', 'Poison', true);
  static Electric = new Type('ELECTRIC', 'Electric', true);
  static Ground = new Type('GROUND', 'Ground', true);
  static Psychic = new Type('PSYCHIC', 'Psychic', true);
  static Rock = new Type('ROCK', 'Rock', true);
  static Ice = new Type('ICE', 'Ice', true);
  static Bug = new Type('BUG', 'Bug', true);
  static Dragon = new Type('DRAGON', 'Dragon', true);
  static Ghost = new Type('GHOST', 'Ghost', true);
  static Dark = new Type('DARK', 'Dark', true);
  static Steel = new Type('STEEL', 'Steel', true);
  static Fairy = new Type('FAIRY', 'Fairy', true);

  private constructor(public key: string, public readonly label: string, public checked?: boolean) {
    super(key, label, checked);
  }
}
