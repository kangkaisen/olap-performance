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

#### 分支预测

#### SIMD

#### SIMT

#### 超线程技术

#### 阻塞和非阻塞 同步和异步

### CPU 提高计算能力的方式

1. 让处理器一个周期处理多条指令
2. 向量指令：同一条指令同时操作多个数据。
3. 在同一个芯片中集成多个处理单元

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

#### Cache friendly

#### cache coherence protocol

### NUMA

## 性能指标

### CPU Time 计算公式

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
