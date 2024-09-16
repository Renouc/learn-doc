# 标签

## 列出标签

```bash
git tag
```

```bash
git tag -l "v1.0.*"
```

> 列出所有以 v1.0 开头的标签

## 查看标签信息

```bash
git show
```

```bash
git show <tag>
```

## 创建标签

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）

- 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用

- 附注标签包含了关于标签的元数据（如作者、日期、注释等）

### 附注标签
