class Animal {
  constructor(public name: string | number, public age: number) {}
}

class Person {
  constructor(public name: string, public age: number) {}
}

interface IClass<T> {
  new (name: string | number, age: number): T;
}

type IParamString<T> = T extends string ? T : number;

const createInstance = <T, K = number>(
  target: IClass<T>,
  name: IParamString<K>,
  age: number
) => {
  return new target(name, age);
};

const animal = createInstance<Animal>(Animal, 1, 2);

// const person = createInstance(Person, "jack", 12);
