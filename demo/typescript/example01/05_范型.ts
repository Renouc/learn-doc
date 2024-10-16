interface ICallback<T> {
  (item: T, index: number): void;
}

// interface IMyForEach<T> {
//   (arr: T[], callback: ICallback<T>): void;
// }

interface IMyForEach {
  <T>(arr: T[], callback: ICallback<T>): void;
}

// type IMyForEach = <T>(arr: T[], callback: ICallback<T>) => void;
// type ICallback<T> = (item: T, index: number) => void;

const myForEach: IMyForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

myForEach([1, 2, 3], (item) => {
  console.log(item.toString());
});

// 写在类型后面 表示使用类型的时候传参， 写在函数前面 表示调用的时候传参
// IMyForEach<T>: 适合需要对具体类型进行约束的情况，提供更强的类型安全性。
// IMyForEach: 适合需要通用性和灵活性，简化代码并且允许多种类型的实现。

// 范型约束
interface ILength {
  length: number;
}
function getLen<T extends ILength>(val: T) {
  return val.length;
}

getLen("asd");

function getval<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = {
  name: "asd",
  age: 18,
};

getval(obj, "name");

// 范型坑位

interface IResponse<T> {
  code: number;
  message?: string;
  data?: T;
}

interface ILoginResponseData {
  token: string;
  roles: number[];
}

function login(): IResponse<ILoginResponseData> {
  return {
    code: 200,
    message: "success",
    data: {
      token: "asd",
      roles: [1, 2],
    },
  };
}

export {};
