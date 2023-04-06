---
title: 查询执行器
icon: creative
---

查询执行器单核想要实现极致的查询性能，需要满足两点： 1 处理的数据尽可能少且尽可能快； 2 网络传输的数据尽可能少且尽可能快。查询执行器处理数据量的多和少完全由查询优化器决定，查询执行器本身几乎无法决定；查询执行器处理数据如何尽可能快，就是向量化执行器的执行，我们在下一小节单独讲。 网络传输时数据如何尽可能少，尽可能快，如下图所示：

![starrcoks-network-fast](https://blog.bcmeng.com/post/media/16404977814611/starrcoks-network-fast.png)

* 按列 Shuffle: 向量化引擎中按列处理更加高效
* 按列 压缩
* Join 分布式执行时尽可能避免网络传输：主要由查询优化器和查询调度器合作完成
* Global Runtime Filter: StarRocks 实现的 Global Runtime Filter 在如何减少网络传输上做了很多优化，这个功能之后我司会安排专门的分享介绍
* Operations On Encoded Data: 主要是针对有字典编码的低基数字符串进行的优化，StarRocks的创新之处在于，在支持数据自动 Balance 的分布式架构下，实现了全局字典的维护，并结合 CBO 优化器，对包含低基数字符串的查询进行了全面加速，这个大功能之后我司也会安排专门的分享介绍。 这里我简单介绍下，对低基数字符串查询全面加速的原理：

![starrocks-dict-improve](https://blog.bcmeng.com/post/media/16404977814611/starrocks-dict-improve.png)

如上图所示，对于SQL Group By City, Platform, 如果 City, Platform 都是低基数字符串，我们就可以将对两个字符串列的 Hash 聚合变为针对两个 Int 列的 Hash 聚合，这样在 Scan, Shuffle，Hash，Equal，Memcpy 等多个重要操作上都会变快很多，我们实测整体查询性能可以有 3 倍的提升。


## 向量化执行器

![starrcoks-vector-1](https://blog.bcmeng.com/post/media/16404977814611/starrcoks-vector-1.png)

向量化在实现上主要是算子和表达式的向量化，上图一是算子向量化的示例，上图二是表达式向量化的示例，算子和表达式向量化执行的核心是**批量按列执行**，批量执行，相比与单行执行，可以有更少的虚函数调用，更少的分支判断；按列执行，相比于按行执行，对 CPU Cache 更友好，更易于SIMD优化。

![starrcoks-vector-2](https://blog.bcmeng.com/post/media/16404977814611/starrcoks-vector-2.png)

如上图所示，向量化执行工程的挑战包括：

* 磁盘，内存，网络的数据都按照列式布局
* 所有的算子都必须向量化
* 所有的表达式都必须向量化
* 尽可能使用 SIMD 指令
* 尽可能优化 CPU Cache
* 重新设计内存管理机制
* 重新设计重要算子的算法和数据结构
* 整体性能要提升5倍，意味着所有算子和表达式性能都必须提升 5 倍，任何一个算子和表达式慢了，整体性能就无法提升5倍。

**向量化执行的架构没有任何难点，难点是工程实现，难点是实现细节。** 向量化执行的目的就是优化性能，所以**整个向量化执行其实是一个巨大的性能优化工程。**

![starrcoks-vector-3](https://blog.bcmeng.com/post/media/16404977814611/starrcoks-vector-3.png)

如上图所示，StarRocks 向量化执行性能优化的手段主要包括以上7种，其中 2 - 7 任何一个环节处理不好，都无法实现一个高性能的向量化执行引擎。
