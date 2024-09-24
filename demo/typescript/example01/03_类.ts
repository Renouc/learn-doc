class Person {
  name: string;
  age: number;
  private sex: string;
  #color: string;
  // 人种
  race: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.#color = "red";
    this.race = "white";
  }

  sayHello() {
    console.log(`我是${this.name}，今年${this.age}岁，我是${this.sex}生`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex);
  }
}

const p = new Person("张三", 18, "男");

export {};
