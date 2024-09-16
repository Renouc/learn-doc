package main

import (
	"fmt"
	"go-learn/array"
)

func main() {

	// 创建一个整数类型的 Array
	intArray := array.New[int]()
	intArray.Push(1)
	intArray.Push(2)

	fmt.Println("Int Array:", intArray) // 输出: Int Array: [1 2 3]

}
