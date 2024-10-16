```sh
git revert HEAD~3
```

还原 HEAD 中倒数第四个提交指定的更改，并创建一个包含还原更改的新提交。

```sh
git revert -n master~5..master~2
```

将 master 中倒数第五次提交（包含）到 master 中倒数第三次提交（包含）的改动还原，但不创建任何包含还原改动的提交。还原只会修改工作区和索引。
