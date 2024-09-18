# a file

## 工厂模式

````js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Factory {
  createPerson(name, age) {
    return new Person(name, age);
  }
}
## 代理模式

```js
const proxy = new Proxy(target, handler);
const handler = {
  get(target, property, receiver) {},
};
const target = {};
````
