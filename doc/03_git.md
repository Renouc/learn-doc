# 标签

## 列出标签

```bash
git tag
```

```bash
git tag -l "v1.0.*"
```

> 列出所有以 v1.0 开头的标签

## 创建标签

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）

- 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用

- 附注标签包含了关于标签的元数据（如作者、日期、注释等）

### 附注标签

```bash
git tag -a <tagname> -m <tagmessage>
```

> -m 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会启动编辑器要求你输入信息。

### 轻量标签

```bash
git tag <tagname>
```

> 创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字

> 这时，如果在标签上运行 git show，你不会看到额外的标签信息。命令只会显示出提交信息

## 后期打标签

```bash
git tag <tagname> <commit>
```

> 可以通过指定提交 ID 来为某个提交打标签

## 查看标签信息

```bash
git show <tagname>
```

> 通过使用 git show 命令可以看到标签信息和与之对应的提交信息

## 共享标签

```bash
git push origin <tagname>
```

> 将指定标签推送到远程仓库

```bash
git push origin --tags
```

> 将所有标签推送到远程仓库

## 删除标签

```bash
git tag -d <tagname>
```

## 删除远程标签

```bash
git push origin :refs/tags/<tagname>
```

或者

```bash
git push origin --delete <tagname>
```
