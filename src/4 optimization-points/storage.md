---
title: 存储层优化点
icon: creative
---

## 列存

## 索引

### 前缀索引

### ZoneMap 索引

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

## 硬件

### NVMe

- Is Sequential IO Dead In The Era Of The NVMe Drive? <https://jack-vanlightly.com/blog/2023/5/9/is-sequential-io-dead-in-the-era-of-the-nvme-drive>
