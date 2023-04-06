---
title: 存储层
icon: creative
---

![starrcoks-storage-fast](https://blog.bcmeng.com/post/media/16404977814611/starrcoks-storage-fast.png)

如上图所示，整个查询执行要快，存储层返回数据必须要快。 存储快的核心就是读更少的数据，且读的更快。

读更少数据的优化包括：

* 分区分桶裁剪
* 列裁剪
* 按列存储
* 按列压缩
* 高效的压缩和编码
* 必要的索引
* 根据索引和元数据尽可能提前过滤无关数据
* 延迟物化

读的更快的手段包括：

* Operations On Encoded Data
* Perfetch
* 向量化处理
* 减少 IO 和 Seek 次数
* 多线程
