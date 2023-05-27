---
title: 查询执行器优化点
icon: creative
---
### 多机执行模型

### 多核执行模型

### 单核执行模型

### 列式布局

### Batch 操作

### 按列处理

#### Shuffle By Column

### 虚函数调用

### 分支预测

5星力荐的视频教程： Branchless Programming in C++ - Fedor Pikus - CppCon 2021

<https://www.youtube.com/watch?v=g-WPhYREFjk>

分支预测的原理，以及在实际代码中的优化点都讲的很清楚

对应的 PPT 文件：

<https://github.com/CppCon/CppCon2021/blob/main/Presentations/Branchless_computing.pdf>

### Chunk Size

### SIMD

#### SIMD text parsing

#### SIMD data filtering

#### SIMD string operations

#### SIMD json

#### SIMD join runtime filter

#### SIMD hash table probe

#### SIMD memcpy

#### SIMD memcmp

#### SIMD case when

#### SIMD gather

#### SIMD branchless

#### SIMD filter

#### SIMD aggregate

### Query Cache

### CPU Cache 优化

pack data，尽可能 touch 足够小的内存

#### 内存布局

#### Improve Locality (Spatial And Temporal)

时间局部性：Reduce cache miss when evaluate lots of expr in aggregate <https://github.com/StarRocks/starrocks/pull/15998>

#### Align The Code And Data

#### Reduce Memory Footprint

#### Block

#### Prefetch

#### Code Cache

优化实例：

<https://github.com/StarRocks/starrocks/pull/23300>

### HashTable 优化

### 表达式

#### Const 优化

#### Null 优化

### 多核优化

#### Lock

#### 调度

#### NUMA

#### Context-switches

### Runtime Filter

#### Local Join Runtime Filter

#### Global Join Runtime Filter

#### Top-N Runtime Filter

#### Runtime filter 是否 Merge

#### 自适应 Scan wait time

#### 自适应的 push down row limit

### Decimal 乘法

### IO 调度

### 全局低基数字典

### 网络传输

### 内存管理

#### 避免 Copy

#### 内存分配的连续性

#### 尽可能早的释放内存

### 线程模型

### 序列化

### Operations on Encoded Data

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

### DPDK

### Code Gen

### 编译器优化

### 精确去重

### 异步

### Adaptive

#### Adaptive Join Runtime Filters Selection

#### Adaptive Streaming Aggregate

#### Adaptive Aggregate Hash Map Selection

#### Adaptive IO 并发度

#### Adaptive Filter Execution Strategy

#### Adaptive Encoding

#### Adaptive Pipeline Parallelism

### C++ Low Level

#### Final 去虚拟化

<https://gcc.godbolt.org/z/16zMdjEjY>

- Virtual functions do not incur too much additional cost by themselves, The number one factor that is responsible for bad performance are data cache misses

- Avoiding vector of pointers on a hot path is a must

- Most overhead of virtual functions comes from small functions, they cost more to call than to execute

#### Inline

#### memcpy

<https://github.com/StarRocks/starrocks/pull/13330>

#### Loop Optimization

#### Unrolling

#### Resize No Initialize

#### Copy To Move

#### Std::vector

#### Code Layout

#### Link-Time Optimization (LTO)

#### Profile-Guided Optimization (PGO)

#### Compile-time Computation

#### 查表法 Table Lookup

- optimize harmonic mean evaluation in hll::estimate_cardinality <https://github.com/StarRocks/starrocks/pull/16351>

#### 编译期运算

#### std::inplace_merge 代替 std::merge

std::inplace_merge 是原地 Merge，相比 std::merge 更省内存

<https://github.com/StarRocks/starrocks/pull/14609>

### 高性能第三方库

### 不同的指令集

High-performance load-time implementation Selection: <https://github.com/CppCon/CppCon2022/blob/main/Presentations/Load-Time-Function-Selection.pdf>