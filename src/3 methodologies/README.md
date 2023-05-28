---
title: 3 性能优化方法论
icon: creative
---

## 如何更好地找到性能瓶颈点

1. 系统学习性能优化的书籍和资料，了解常见的性能瓶颈点有哪些
2. CPU, 内存，IO，网络等的基础知识和原理要深刻理解，某些点，只有你知道了它对性能可能有影响，你才会去考虑它。比如 False sharing，比如 Prefetch， 比如指令 Cache，比如分支预测失败的惩罚 等
3. 从资源利用的角度出发，性能优化的本质就是优化各种系统资源的使用，可以看CPU, 内存，IO，网络等系统资源是哪种资源有瓶颈，然后每种资源我们都有很多方法去优化
4. 从工业系统和学术论文找些思路，大多数问题，都可以从工业系统和学术论文中找到解决思路
5. 持续关注一些高性能项目的性能优化问题，比如 <https://gcc.gnu.org/bugzilla/buglist.cgi?quicksearch=memcmp> gcc 编译器对 memcmp, memcpy 等重要方法的持续优化
6. 从 high-level 和 low-level 两个层次同时去考虑，优先选择投入产出比高的优化点
7. 熟练掌握并使用场景的 性能指标工具 和 性能 Profile 工具
8. 多和他人交流，同样的信息和上下文，每个人的关注点和解读的视角都有可能不同，有可能他人的一句话就会给自己带来启发，打破自己之前的思维定式
9. 熟能生巧，平常多搞一些性能优化的工作


## A Top-Down Method for Performance Analysis

- 《A Top-Down Method for Performance Analysis and Counters Architecture》
- <https://andrewei1316.github.io/2020/12/20/top-down-performance-analysis/>

## Compute/Data Ratio

- If data ≫ cache for such an algorithm, the algorithm’s
performance is often limited by the memory bandwidth (or,
worse, latency), not processor’s compute throughput

- Say an algorithm performs C flops (or computation in more
general) on N bytes of data

- Memory-Bound <==> C / N << the peak FLOPS / the peak memory bandwidth

- After you use an element, **if you reuse it many times
before it is evicted from a cache (even a register), then the
memory traffic is hopefully not a bottleneck**

- In general, the traffic increases when the same amount of
computation has a large working set, to reduce the traffic, you arrange the computation (order subcomputations) so that **you do a lot of computation on the same amount of data**

<https://www.eidos.ic.i.u-tokyo.ac.jp/~tau/lecture/parallel_distributed/2018/slides/pdf/cache.pdf>

## 架构 + 细节

**打造一个高性能的数据库，需要的不仅是优秀合理的架构，还需要极致优秀的工程细节**。这一点看似十分显然，其实并不是，如果你认可这一点，当你想打造一个极致性能的数据库时，你就不会像 ClickHouse 一样 Bottom-Up 地从细节和算法层面出发去设计整个系统，也不会选择 Java 或者 Go 等语言去实现查询执行层和存储层。

![](/high-low.png)
