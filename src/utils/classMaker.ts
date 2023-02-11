/**
 * Given a record type generic, returns a class that
 * will instantiate an instance that matches the given type
 */

interface Class<T> {
  new (args: T): T;
}

const classMaker = <T extends Record<string, unknown>>(): Class<T> =>
  class {
    constructor(x: T) {
      Object.assign(this, x);
    }
  } as any;

export default classMaker;
