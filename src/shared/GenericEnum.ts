export default class GenericEnum {
  constructor(public key: string, public readonly label: string, public checked?: boolean) {}

  public static get(keyString: string): GenericEnum | null {
    for (const key in this) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key) && this[key].key === keyString) {
        return this[key];
      }
    }
    return null;
  }

  public static toArray(): Array<GenericEnum> {
    const arr = [];
    for (const key in this) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key) && this[key].hasOwnProperty('key')) {
        arr.push(this[key]);
      }
    }
    return arr;
  }

  toString() {
    return this.key;
  }
}
