# 变基

## base

```bash
git chekout test
git rebase master

git checkout master
git merge test
```

## git base --onto

`git rebase --onto <newbase> <oldbase> <branch>`

- <newbase>：指定了新的基点，即你希望将选定的提交重新应用到哪个提交之上。
- <oldbase>：指定了旧的基点，即当前选定的提交原本位于哪个提交之上。
- <branch>：指定了你希望重新定位其提交的分支。
