---
title: 6 性能优化案例
icon: creative
---

## 性能优化案例

### C 10M 的解

不要让OS内核执行所有繁重的任务：将数据包处理、内存管理、处理器调度等任务从内核转移到应用程序高效地完成，让诸如Linux这样的OS只处理控制层，数据层完全交给应用程序来处理。

- 网络传输绕过 Linux 内核协议栈
- 应用程序自己进行 CPU 调度，进行绑核操作
- 应用程序自己进行 内存管理，大页分配

### Memset 优化

[Building Faster AMD64 Memset Routines](https://msrc.microsoft.com/blog/2021/01/building-faster-amd64-memset-routines/)

### Numa 优化

[Hunting a NUMA Performance Bug](https://www.scylladb.com/2021/09/28/hunting-a-numa-performance-bug/)

优化的 Code 只有一行：

<https://github.com/scylladb/scylladb/commit/126baa7850e185908681be219a37dc7ce7346c1>

### RoaringBitmap 性能优化

[WeOLAP 亚秒级实时数仓 —— BitBooster 10倍查询优化实践](https://mp.weixin.qq.com/s/tJQoNRZ5UDJ_IASZLlhB4Q)





