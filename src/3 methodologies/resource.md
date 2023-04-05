---
title: 从资源视角进行优化
icon: creative
---

性能优化的本质就是优化各种系统资源的使用。我们针对查询优化的各种手段，其实本质上都是在优化 CPU, 内存，IO，网络等系统资源的使用:

* 存储层的 Read Data Less And Fast 其实是在优化 IO 资源
* 计算层的 Transfer Data Less And Fast 其实是在优化网络资源
* 计算层的 Process Data Less And Fast 其实是在优化 CPU 和 内存资源

如果我们解决一个问题的算法复杂度相同，那么谁的实现更优，就是看谁做的无用功更少，使用的系统资源更少。

![](https://blog.bcmeng.com/post/media/16795404287791/16806935525290.jpg)

上图就是一个查询执行层优化网络的各种优化手段的示例。
