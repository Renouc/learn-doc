## Docker 镜像

Docker 镜像就是创建容器的模板，相当于面向对象中的类。

## Docker 容器

Docker 容器就是运行镜像的实例，相当于面向对象中的对象。独立运行，互不影响。

## Hello World

```bash
docker run ubuntu echo "Hello World"
```

上述命令会以 ubuntu 镜像创建一个容器，然后在该容器中执行 `echo "Hello World"` 命令

如果发现 ubuntu 镜像不存在，则先拉取镜像

### 可以创建一个交互式的容器

- `-t` 为容器添加一个终端
- `-i` 允许在终端内进行输入

### 查看容器列表

```bash
# 当前正在运行的容器
docker ps

# 所有
docker ps -a
```

### 查看打印输出

```bash
docker logs <container_id>
```

## 启动容器

```bash
docker start <container_id>
```

## 删除容器

```bash
docker rm -f <container_id>
```
