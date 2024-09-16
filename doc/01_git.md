# 安装

https://git-scm.com/

# 初次运行配置

## 查看所有配置信息及其所在文件

```bash
 git config --list --show-origin
```

## 设置用户信息

```bash
git config --global user.name "your name"
git config --global user.email "your email"

```

> 如果使用了 --global 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事
> 情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运
> 行没有 --global 选项的命令来配置。
