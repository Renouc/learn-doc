# a file

## 工厂模式

```js
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
```
