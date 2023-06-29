---
title: 算法和数据结构
icon: creative
---

## 算法

### 反向二分搜索

<https://www.vldb.org/pvldb/vol15/p3472-yu.pdf>

### In Filter

In 的数据量少时，可以用 Array 代替 HashSet

## 数据结构

### Vector
<https://github.com/facebook/folly/blob/main/folly/small_vector.h>


## 聚合

### 两阶段 Streaming 聚合

![two-phase-agg](/two-phase-agg.png)

![one-phase-agg](/one-phase-agg.png)

![streaming-agg](/streaming-agg.png)

## Join

### Hash Join

### Sort Merge Join

### Nest Loop Join

## Sort

### 多列 Sort

- [multi-column-sorts-in-arrow-rust-part-1](https://arrow.apache.org/blog/2022/11/07/multi-column-sorts-in-arrow-rust-part-1/)
- [multi-column-sorts-in-arrow-rust-part-2](https://arrow.apache.org/blog/2022/11/07/multi-column-sorts-in-arrow-rust-part-2/)

### 并行 Sort

[并行 Sort 算法 benchmark](https://github.com/liuyehcf/parallel-sort-benchmark/blob/master/benchmark.cpp)

### 延迟物化

## Window

### Sort-Based

### Hash-Based

### Streaming Not Blocking

### Ranking Window 特殊优化

### Window 谓词下推

