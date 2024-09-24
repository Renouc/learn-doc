// 使用 never 做类型保护
//  如果后期对参数进行了修改，但是并未对新添加的类型做处理，那么在代码中就会报错
function doSomething(x: string | number) {
  if (typeof x === "string") {
    // 这里 x 被收窄为 string
  } else if (typeof x === "number") {
    // 这里 x 被收窄为 number
  } else {
    // 这里 x 被收窄为 never
    const check: never = x;
  }
}

// never 和其他类型做联合类型 最终是不显示的
let union: string | number | boolean | never;

export {};
