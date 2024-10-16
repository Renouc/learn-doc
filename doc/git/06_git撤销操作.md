### 提交新的 commit 用来执行撤销操作

```sh
# 撤销当前分支HEAD位置的前3次commit
git revert HEAD~3..HEAD

# 撤销单个指定commit
git revert [commitID]

# 撤销多个指定commit
git revert [commitID] [commitID] [commitID] ...

# 撤销某次commit到某次commit之间的commit（左开右闭）
git revert [commitID]..[commitID]

# 撤销某次commit到某次commit之间的commit（左右都包含）
git revert [commitID]...[commitID]
```
