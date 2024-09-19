import babel from "@babel/core";
import presetEnv from "@babel/preset-env"; // es6 -> es5
import presetReact from "@babel/preset-react";

import fs from "node:fs";
const codeStr = fs.readFileSync("./test.js", "utf-8");

// 自定义插件
function transformFunction({ types: t }) {
  return {
    name: "transform-function",
    visitor: {
      // 匹配
      ArrowFunctionExpression(path) {
        // console.log(path.node);
        // 箭头函数转换为普通函数
        const node = path.node;
        // 转换成普通的function
        // async params
      },
    },
  };
}

const result = babel.transform(codeStr, {
  //   presets: [
  //     // usage 按需引入
  //     // entry 手动引入
  //     [presetEnv, { useBuiltIns: "usage", corejs: 3 }],
  //     presetReact,
  //   ],
  plugins: [transformFunction],
});

console.log(result.code);
