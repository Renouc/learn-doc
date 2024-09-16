package main

import "net/http"

func main() {
	// 创建一个HTTP服务器 并设置监听地址
	server := &http.Server{
		Addr: ":8080",
	}

	// 设置路由处理器
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, World!"))
	})

	// 启动服务器 并监听端口
	server.ListenAndServe()
}
