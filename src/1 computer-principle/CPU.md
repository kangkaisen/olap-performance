---
title: CPU
icon: creative
---

## 基础知识

### 基本概念

#### 总的逻辑 CPU 数

#### 物理CPU

#### 物理 cpu 的 core 数

#### 逻辑 cpu 数

#### uOps

#### pipeline slot

#### 为什么需要多核

#### CPU Microcodes

#### 周期和频率

#### Instruction Cycle

#### Intel X86每个指令需要的cycle

#### 寄存器

#### ALU

#### 指令集

#### 程序计数器

#### MMU

#### CPU 上下文

#### CPU 指令执行的流程

![cpu-instuction-flow](/cpu-instuction-flow.png)

#### 指令级并行技术

#### 乱序执行  out-of-order execution OOO

#### 指令流水线 pipelined processor

#### Pipeline bubbles

"Pipeline bubbles" 就是指在指令流水线中由于某种原因导致流水线停顿或者空转的情况。
常见原因如下：

1. 数据依赖：If one instruction depends on another instruction, then it cannot be pushed immediately into the same pipeline.
2. 分支预测失败

为了减少 pipeline bubbles，CPU 会采用指令重排、数据预取和硬件乱序执行等优化

#### 分支预测

#### SIMD

#### SIMT

#### 超线程技术

#### 阻塞和非阻塞 同步和异步

### CPU 提高计算能力的方式

1. 让处理器一个周期处理多条指令
2. 向量指令：同一条指令同时操作多个数据。
3. 在同一个芯片中集成多个处理单元

### 影响 CPU 指令吞吐的因素

1. 独立指令数量（Number of Independent Instructions）：CPU能够同时执行多个独立的指令，而这些指令不依赖于彼此的结果。
2. 分支预测成功的数量
3. CPU 命中率


### 如何让CPU更快

### CPU 减少数据访问延迟的方式

### 解决 CPU 访问内存延时越来越大的方法

### CPU 亲和性

### CPU Pipeline

### CPU Pipeline stall

Cache, TLB, memory-bandwith limitation

### 流水线功耗浪费

### CPU Front-End

![cpu-frontend-backend](/cpu-frontend-backend.png)

### CPU Back-End

### CPU Time 计算公式


### CPU Cache

[CPU Cache 一致性动图](https://www.scss.tcd.ie/Jeremy.Jones/VivioJS/caches/MESI.htm)

#### CPU Cache 性能数据

![cpu-cache-metric](/cpu-cache-metric.png)

#### L1,L2,L3 cache

#### Cache line

#### TLB(Translation Lookaside Buffer) Cache

#### Huge Page

<https://easyperf.net/blog/2022/09/01/Utilizing-Huge-Pages-For-Code>

remap the code section at runtime

```
cd iodlr/large_page-c
make -f Makefile.preload
sudo cp liblppreload.so /usr/lib64/
LD_PRELOAD=/usr/lib64/liblppreload.so ../llvm-project/build/bin/clang++ -c -O3 <other options> ../llvm-project/llvm/lib/Transforms/Vectorize/LoopVectorize.cpp
```

#### Cache friendly

#### cache coherence protocol

### NUMA

## 性能指标

### IPC

### max ipc test

### 平均负载

### CPU 优化的目标

### CPU 使用率

### CPU 利用率 100% 说明啥？

### 上下文切换

### 中断

### Off CPU

###

## 工具

### 查看cache 大小

### time 命令

### vmstat

### pidstat

### Top

### 动态追踪 eBPF

### bcc

### proc 文件系统
