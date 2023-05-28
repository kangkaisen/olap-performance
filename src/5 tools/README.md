---
title: 5 性能优化工具
icon: creative
---

## perf

![perf_events](https://www.brendangregg.com/perf_events/perf_events_map.png)

<https://www.brendangregg.com/perf.html>

## coz-profiler

<https://github.com/plasma-umass/coz>

<https://github.com/CppCon/CppCon2020/blob/main/Presentations/performance_matters/performance_matters__emery_berger__cppcon_2020.pdf>

## eBPF

## VTune

## Toplev

<https://github.com/andikleen/pmu-tools/wiki/toplev-manual>

## BCC tools

![BPF Compiler Collection ](https://github.com/iovisor/bcc/raw/master/images/bcc_tracing_tools_2019.png)

<https://github.com/iovisor/bcc>

## pcm  Intel® Performance Counter Monitor

<https://github.com/intel/pcm>

## pmu-tools

<https://github.com/andikleen/pmu-tools>

## perf-tools

![perf-tools](https://github.com/brendangregg/perf-tools/raw/master/images/perf-tools_2016.png)

<https://github.com/brendangregg/perf-tools>

## Latencytop

可以测试出内核态和用户态导致系统延迟的原因

<https://www.latencytop.org/>

## orbit C/C++ Performance Profiler

<https://github.com/google/orbit>

## pprof

## proc 文件系统

## trace 文件系统

## BOLT

<https://github.com/facebookincubator/BOLT>


## C++

### Compiler Explorer

查询 C++ 代码编译成的 汇编代码

<https://godbolt.org/>

### Quick C++ Benchmark

<https://quick-bench.com/q/eP40RY6zDK-eJFdSSPBINa0apTM>

### Compare C++ Builds

可以测试、比较不同 C++ 代码的编译开销（CPU、内存、I/O）

<https://build-bench.com/b/47ciR2_jQ0RuAt2fy1Pnk66b3yM>

### C++ Insights

<https://cppinsights.io/>

### C++ Micro Benchmark

<https://github.com/google/benchmark>

## 性能压测工具

### mysqlslap

```
mysqlslap -u root --password=xxx -h 127.0.0.1 -P 888  0 -c 1 -i 1 --create-schema=test --query="sql-groupby-string-string_int_int";
```

### Jmeter

## Cutter 逆向工程

<https://github.com/rizinorg/cutter>




