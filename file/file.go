package file

import (
	"fmt"
	"os"
	"path/filepath"
)

func ReadFile() {
	fmt.Println("read file")

	// 获取当前工作目录
	currentDir, err := os.Getwd()
	if err != nil {
		panic(err)
	}

	// 将相对路径转换为绝对路径
	filePath := filepath.Join(currentDir, "doc", "03_git.md")

	fmt.Println("filePath:", filePath)

	c_arr, err := os.ReadFile(filePath)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(c_arr))

}
