---
title: 多核并行优化点
icon: creative
---

## 并行执行模型

### 并行方式

#### Intra-Operator (Horizontal)

水平并行是指在查询执行过程中将一个操作符（例如扫描、过滤、聚合等）分解为多个独立的实例，每个实例负责处理数据的不同子集。这些独立实例可以并行地执行相同的操作，并在执行完毕后，将结果进行合并。每个实例处理的数据是互相独立的，它们之间没有数据依赖。

在水平并行中，DBMS会在查询计划中插入交换操作符（exchange operator），用于汇总来自子操作符的结果。

#### Inter-Operator (Vertical)

垂直并行是指在查询执行过程中，将不同的操作符重叠执行，从而实现数据的流水线传输，而不需要中间结果的物化（存储到临时表或文件）。

也叫做 pipelined parallelism

### 线程模型

#### 单核单计算线程

单个 CPU 绑定执行的计算线程

#### 单核线程池

每个 CPU 会对应不同的计算线程

### 并行度自适应

## 线程池

## Lock

### SpinLock

### 分段锁

- <https://github.com/apache/doris/pull/3222>

### Lock Free

```
// 通过CAS操作实现Lock-free
do {
  ...
} while(!CAS(ptr，old_data，new_data ))
```

- One way to avoid the ABA problem is to ensure that the head of the stack never has the same value twice.

- The addition of a sleep reduced contention, and consequently both increased throughput while decreasing processor utilization.

<https://www.singlestore.com/blog/common-pitfalls-in-writing-lock-free-algorithms/>

#### Lock-Free Queue

可以支持高效并发的写操作和较少的读操作。

无锁队列的基本思想是使用原子操作和 CAS（Compare-and-Swap）操作来实现并发安全的插入和删除操作，而无需使用显式的锁来保护共享数据。

#### Epoch Based Reclamation

EBR 适用于读操作频繁、写操作相对较少且需要回收的内存区域较小的场景。

#### Read-Copy Update (RCU)

它适用于读操作频繁、写操作相对较少且修改的数据较小的场景。

## 协程

- 避免阻塞等待
- 更高的并发性
- 减少上下文切换
- 更好的资源利用


- [Use Coroutines for Asynchronous I/O to Hide I/O Latencies and Maximize the Read Bandwidth](https://db.in.tum.de/~fent/papers/coroutines.pdf?lang=en)
- [仅花200行代码，如何将60万行的RocksDB改造成协程](https://mp.weixin.qq.com/s/WbR7dN7wVdVEpB8wHBbxCw)

## 调度

### 优先级调整

### 用户态线程

## 异步

<https://www.p99conf.io/session/speedup-your-code-through-asynchronous-programing/>

## CPU独占 (CPU exclusive)

当一个进程或任务独占CPU时，它独自占用CPU资源，没有其他进程或任务与其共享CPU核心。

这意味着其他进程或任务无法在同一时间片内使用该CPU核心。CPU独占通常用于要求高性能的任务，例如实时系统、高性能计算或需要大量计算资源的应用程序。通过将CPU独占分配给特定进程或任务，可以确保它们获得足够的计算能力。

## CPU绑核 (CPU affinity)

CPU绑核可以将特定进程或任务绑定到特定的CPU核心上运行。
通过绑定，该进程或任务将只在指定的CPU核心上运行，不会在其他核心上执行。
这可以用于优化多线程或并行应用程序的性能，以减少因线程迁移和上下文切换而引起的开销。通过将特定的线程或进程绑定到特定的CPU核心，可以提高缓存利用率并减少共享资源竞争。

1. 对 CPU Cache 友好
2. 减少 上下文切换

## 资源隔离 Cgroups


## Numa 优化

当有多个 Numa Node, 且内存的分配和回收是瓶颈时，可以考虑针对 Numa 架构进行优化。

CPU NUMA（Non-Uniform Memory Access）优化通常旨在优化多处理器系统中的内存访问性能。

可以考虑下面几个方面的优化：

1. **内存本地性**：NUMA 架构中，每个 CPU 都与一组本地内存相关联。优化内存本地性意味着将数据分配到与执行线程所在的 CPU 相对应的本地内存中。这可以减少远程内存访问的开销，提高内存访问速度和整体性能。

2. **数据局部性**：NUMA 架构中，处理器可以更快地访问本地内存，而远程内存的访问速度较慢。因此，优化数据局部性可以使访问模式更加局部化，减少跨 Node 的数据传输和远程内存访问。这可以通过使用本地缓存、数据预取和对齐内存访问等技术来实现。

3. **任务和线程绑定**：在 NUMA 系统中，将任务或线程绑定到特定的 CPU 可以提高内存访问性能。通过将任务绑定到与其本地内存相关联的 CPU，可以减少远程内存访问和数据传输，从而提高性能。这可以通过使用操作系统或编程语言级别的线程绑定功能来实现。

4. **NUMA 感知调度** ：操作系统和调度程序可以采用 NUMA 感知的调度策略，考虑处理器和内存的 NUMA 布局。通过将任务分配给与其本地内存相关联的处理器，可以减少远程内存访问的开销，提高系统整体的性能。

总而言之，CPU NUMA 优化的目标是最大程度地减少远程内存访问，以提高内存访问性能和整体系统性能。

当需要访问非本地的内存时，进行顺序访问，这样可以通过硬件的预取屏蔽 remote access latency.

## 内存分配

## False Sharing

## 减少系统调用与上下文切换

