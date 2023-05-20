---
title: 多核优化
icon: creative
---

## 并行执行模型

## 线程池

## Lock

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

## 协程

仅花200行代码，如何将60万行的RocksDB改造成协程  <https://mp.weixin.qq.com/s/WbR7dN7wVdVEpB8wHBbxCw>

## 调度

## 绑核

## Numa

当有多个 Numa Node, 且内存的分配和回收是瓶颈时，可以考虑针对 Numa 架构进行优化

## 内存分配

## False Sharing

## 减少系统调用与上下文切换





