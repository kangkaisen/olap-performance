---
title: 查询执行器优化点
icon: creative
---
## 多机执行模型

## 多核执行模型

## 单核执行模型

## SIMD

[SIMD 优化点](./simd.md)

## 多核并行优化点

[多核并行优化点](./multi-core.md)

## C++ Low Level

[C++ 优化点](./C++.md)

## 列式布局

## Batch 操作

## 按列处理

### Shuffle By Column

## 虚函数调用

## 分支预测

5星力荐的视频教程： Branchless Programming in C++ - Fedor Pikus - CppCon 2021

<https://www.youtube.com/watch?v=g-WPhYREFjk>

分支预测的原理，以及在实际代码中的优化点都讲的很清楚

对应的 PPT 文件：

<https://github.com/CppCon/CppCon2021/blob/main/Presentations/Branchless_computing.pdf>

### 分支取直（Branch Straightening）

### 整数区间判断

<https://stackoverflow.com/questions/17095324/fastest-way-to-determine-if-an-integer-is-between-two-integers-inclusive-with>

## Chunk Size

## Query Cache

## CPU Cache 优化

pack data，尽可能 touch 足够小的内存

### 内存布局

### Improve Locality (Spatial And Temporal)

时间局部性：Reduce cache miss when evaluate lots of expr in aggregate <https://github.com/StarRocks/starrocks/pull/15998>

### Align The Code And Data

### Reduce Memory Footprint

### Block

### Prefetch

### Code Cache

优化实例：

<https://github.com/StarRocks/starrocks/pull/23300>

### 避免多级指针检索

多级指针检索可能导致 Cache Miss 的原因如下：

1. **数据局部性破坏**：多级指针访问通常涉及间接引用，需要多次内存访问才能到达目标数据。这会导致数据的局部性破坏，即访问的数据位置不连续，无法充分利用缓存中已加载的数据块。

2. **缓存行填充**：缓存以缓存行（Cache Line）为单位进行数据加载。当多级指针访问的数据存储在不同的缓存行中时，每次访问都可能引发缓存行填充，即需要从主存中加载整个缓存行，即使只需要访问其中的一小部分数据。

3. **指针跳跃**：多级指针访问可能涉及不同层级的指针跳跃，即在不同的内存地址之间跳转。这会导致缓存中的预取机制失效，无法准确预测后续的内存访问模式，从而增加了缓存失效的可能性。

## HashTable 优化

## 表达式

### Const 优化

### Null 优化

## Runtime Filter

### Local Join Runtime Filter

### Global Join Runtime Filter

### Top-N Runtime Filter

### Runtime filter 是否 Merge

### 自适应 Scan wait time

### 自适应的 push down row limit

## Decimal 乘法

## IO 调度

## 全局低基数字典

## 网络传输

## 内存管理

### 避免 Copy

### 内存分配的连续性

### 尽可能早的释放内存

### 内存复用

[Enhancement] Optimize the performance for regexp_replace

<https://github.com/StarRocks/starrocks/pull/16356>

### Memory alignment

- Unaligned store instructions that straddle a cache line incur a bit of a performance penalty.
- Unaligned store instructions that straddle a page boundary are substantially slower (taking about 4x as long to execute).
- Unaligned store instructions that do not straddle either of these boundaries are almost free on modern CPU’s

## 线程模型

## 序列化

## Operations on Encoded Data

<https://archived.docs.singlestore.com/v7.0/concepts/understanding-ops-on-encoded-data/>

可以操作数据的编码方式：

- dictionary encoding
- run-length encoding
- integer value encoding

可以优化的算子：

- Scan
- Filter
- Group By
- Aggregate
- Expressions
- Join
- Sort
- Union

## Code Gen

## 编译器优化

 -O3 默认开启的性能编译选项

 ```
  -finline-functions
  -ftree-loop-vectorize
  -ftree-slp-vectorize
  -funswitch-loops
  -ftree-loop-distribute-patterns
  -ffast-math

 ```

### Link-Time Optimization (LTO)

### Profile-Guided Optimization (PGO)

### 代码布局

Link Order Changes function addresses

## 精确去重

## 异步

## Adaptive

### Adaptive Join Runtime Filters Selection

### Adaptive Streaming Aggregate

### Adaptive Aggregate Hash Map Selection

### Adaptive IO 并发度

### Adaptive Filter Execution Strategy

### Adaptive Encoding

### Adaptive Pipeline Parallelism

## 循环相关优化

1：循环无关码外提——将循环内的某些无关代码外移，减少某些程序的反复执行
2：循环展开——减少循环条件的判断，针对循环次数少的循环
3：循环判断外提——减少每次循环的都进行判断次数
4：循环剥离——将不通用的处理起来稍微费劲一些的动作，放在循环外处理

### 循环交换（Loop Interchange）

 内循环访问行，外循环访问列

### 循环合并（Loop fusion）

### 循环分块（Blocking）

### 数组合并（Array merge）

### 循环分解（Loop fission）

