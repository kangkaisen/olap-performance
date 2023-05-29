---
title: 存储层优化点
icon: creative
---

## 列存

## 索引

### 前缀索引

### ZoneMap 索引 （块索引）

块级索引，是以块为单位，记录块内元数据的索引（最大值、最小值、空值、COUTN、SUM、相关性等）

### BloomFilter 索引

### Bitmap 倒排索引

### 物化列

## Cache

### 多级 Cache

RaptorX: Building a 10X Faster Presto <https://prestodb.io/blog/2021/02/04/raptorx>

* Metastore Versioned Cache
* File List cache
* Fragment Result Cache
* File Descriptor and Footer Cache
* Alluxio Data Cache

### 写入绕过 Cache

TencentCLS: The Cloud Log Service with High Query Performances <https://www.vldb.org/pvldb/vol15/p3472-yu.pdf>

vm.dirty_background_ratio
vm.dirty_expire_centisecs

## 异步 IO

Magma: A High Data Density Storage Engine Used in Couchbase <https://www.vldb.org/pvldb/vol15/p3496-lakshman.pdf>

IO异步化对于高性能的网络编程、服务器应用程序、多线程和多进程编程等场景非常有用，可以避免因IO阻塞而导致的资源浪费和性能瓶颈。它允许程序更加高效地利用计算资源，并提高系统的并发能力和响应性能。

## IO 多路复用


## Zero Copy

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9BzxNcdOAGP1FmhOb2PSXQ.png)

Linux sendfile:

```
ssize_t sendfile(
  int out_fd,
  int in_fd,
  off_t *offset,
  size_t count
  );
```

## IO 多路复用

## 动态调整 IO 并行度

## Scan 优先级

## Shared Scan

## 延迟物化

## Segment 大小 / 文件大小

## 文件的版本数

## 动态文件裁剪

![file-pruned](/file-pruned.png)

## 数据局部性

## 压缩

## 编码

## 预取

## Runtime filter

## 表达式下推存储层

## Compaction

## Prefetch or Predictive Pipelining

根据访问模式，提前从存储层读取所需要的数据。

在存储分离的架构，合理地 Prefetch S3 等分布式存储的文件，对 Scan 性能的优化更明显

## 硬件

### NVMe

- Is Sequential IO Dead In The Era Of The NVMe Drive? <https://jack-vanlightly.com/blog/2023/5/9/is-sequential-io-dead-in-the-era-of-the-nvme-drive>
