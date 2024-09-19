# 匹配器

## expect

返回一个 expect 对象，用来断言

## toBe

断言两个值是否相等，使用 Object.is 实现

## toEqual

递归检查对象或数组的每个字段

> 会忽略 undefined 字段。如对象或数组中有 undefined 字段，会被忽略

## toStrictEqual

递归检查对象或数组的每个字段，包括 undefined

## toBeTruthy

判断是否为真

## toBeFalsy

判断是否为假

## toBeNull

判断值是否为 null

## toBeUndefined

判断值是否为 undefined

## toBeDefined

与 toBeUndefined 相反

## 数字

### toBeGreaterThan

值是否大于

### toBeGreaterThanOrEqual

值是否大于等于

### toBeLessThan

值是否小于

### toBeLessThanOrEqual

值是否小于等于

### toBeCloseTo

值是否接近

> 对于比较浮点数相等，使用 toBeCloseTo 而不是 toEqual，因为你不希望测试取决于一个小小的舍入误差。

## 字符串

### toMatch

值是否包含某字符串，正则匹配
