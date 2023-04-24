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

#### Improve Locality (Spatial And Temporal)

#### Align The Code And Data

#### Reduce Memory Footprint

#### Block

#### Prefetch

### HashTable 优化

### 多核优化

#### Lock

#### 调度

#### NUMA

### Runtime Filter

#### Local Join Runtime Filter

#### Global Join Runtime Filter

#### Top-N Runtime Filter

### Decimal 乘法

### IO 调度

### 全局低基数字典

### 网络传输

### 内存管理

### 线程模型

### 序列化

### Operations on Encoded Data

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

#### Inline

#### Loop Optimization

#### Unrolling

#### Resize No Initialize

#### Copy To Move

#### Std::vector

#### Code Layout

#### Link-Time Optimization (LTO)

#### Profile-Guided Optimization (PGO)

#### Compile-time Computation

### 高性能第三方库
