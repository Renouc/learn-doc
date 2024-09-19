const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("对象赋值", () => {
  const data = { one: 1, a: undefined };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// 匹配真值
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
});

test("undefined", () => {
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeDefined();
});

test("boolean", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

// toMatch

test("string", () => {
  expect("team").not.toMatch(/I/);
  expect("team").toMatch("te");
  expect("team").toMatch(/e?m$/);
});
