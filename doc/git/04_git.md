# 分支

## 创建分支

```bash
git branch <branch_name>
```

## 切换分支

```bash
git checkout <branch_name>
```

## 查看分支

```bash
git branch
```

## 创建新分支并立即切换到新分支

```bash
git checkout -b <branch_name>
```

## 合并分支

```bash
git merge <branch_name>
```

### 新分支与主分支在同一条线上

主分支和指针向前移动到新分支

### 新分支与主分支不在同一条线上

出现这种情况的时候，Git 会使用两个分支的末端所指的快照（C4 和 C5 ）以及这两个分支的公共祖先（C2），做一个简单的三方合并。

### 冲突

此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。你可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件

## 删除分支

```bash
git branch -d <branch_name>
```

## 查看分支

```bash
git branch
```

> 分支列表

```bash
git branch -v
```

> -v 显示分支最后一次的提交信息

```bash
git branch --merged
```

> 显示已经合并到当前分支的分支

```bash
git branch --no-merged
```

> 显示未合并到当前分支的分支

## 分支重命名

```bash
git branch -m <new-branch>
```

## 远程分支

```bash
 git ls-remote <remote>
```

> 显示远程分支

```bash
git remote show <remote>
```

> # 显示远程分支的详细信息

## 远程分支

```bash
 git ls-remote <remote>
```

> 显示远程分支

```bash
git remote show <remote>
```

> 显示远程分支的详细信息
