---
title: IO
icon: creative
---


## 基础知识

### 索引节点和目录项

### 磁盘相关概念

### 虚拟文件系统

### 文件系统 I/O

### IO 栈

### Page cache

### Buffer cache

### io_uring

io_uring 是在 Linux 内核版本 5.1 中引入的。

io_uring 提供了以下主要特性和优势：

- 零拷贝操作：io_uring 允许应用程序直接在用户空间和内核空间之间传递数据，避免了数据的额外拷贝操作，提高了数据传输的效率。

- 环形缓冲区：io_uring 使用环形缓冲区来管理 I/O 操作，减少了内核和用户空间之间的上下文切换次数，并允许多个 I/O 操作的并发处理。

- 批量提交：io_uring 允许应用程序将多个 I/O 操作一次性提交到内核，减少了系统调用的开销，提高了吞吐量。

- 支持多种 I/O 操作：io_uring 可以处理各种类型的 I/O 操作，包括文件读写、网络套接字、定时器等，使开发人员能够统一使用一个接口进行异步 I/O 操作。

- 异步事件通知：io_uring 使用事件驱动的模型，应用程序可以通过等待事件通知来获取已完成的 I/O 操作结果，而无需主动轮询。

### free 命令输出中 的 buffer 和 cache 的含义

**Buffer（缓冲区）**：Buffer 表示用于存储文件系统的数据的内存。当系统读取文件时，会将文件的内容缓存到 Buffer 中，以提高读取文件的性能。Buffer 通常用于文件 I/O 操作，例如读取或写入磁盘上的文件。Buffer 的大小可以根据系统的需求进行调整。

**Cache（缓存）**：Cache 是用于存储已经读取过的文件数据和程序执行过程中的数据的内存区域。Cache 的作用是将经常访问的数据保存在内存中，以提供更快的访问速度。当系统需要访问已缓存的数据时，可以直接从 Cache 中获取，而无需再次访问磁盘或执行耗时的计算。Cache 通常用于提高系统性能和响应速度。

区别：

1. Buffer 和 Cache 在功能上是不同的，Buffer 主要用于文件 I/O 操作的缓存，而 Cache 则用于存储经常访问的数据的缓存。

2. Buffer 主要用于文件系统的读取和写入操作，而 Cache 不仅包括文件系统数据的缓存，还包括程序执行期间的数据缓存。

3. Buffer 的大小通常较小，而 Cache 的大小相对较大，因为 Cache 会尽可能多地存储经常访问的数据以提高性能

## 性能指标

### 容量

### 缓存

### 磁盘性能指标

### IOPS计算公式

### io 利用率 说明了啥

## 工具

### iostat


### pidstat


### iotop


### ioprofile


### lsof


### strace


### opensnoop


### dd


### filetop


