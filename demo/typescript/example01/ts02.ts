// 对象类型
// {} Object 不采用，偶尔有用{} 表示对象上无任何属性。都可以将任何值赋值给 {} 或 Object
// object 非原始类型

const create = (target: object) => {};

create({});

create([]);

create(() => {});

create(new Date());

// bigint
const b: bigint = 1n;
const b1 = BigInt(1);

// symbol
const s: symbol = Symbol.for("s");
const s1 = Symbol.for("s");
console.log(s === s1);

let a = 30;
const aa = 30;

let result: number | string;

(result! as number).toFixed();

// type 声明一个类型
type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";

type ISum = (a: number, b: number) => number;
const sum: ISum = (a, b) => a + b;
sum(1, 2);

const ss: ISum = () => 1;

export {};
