---
title: SIMD
icon: creative
---

## 注意事项

1. AVX-512 is not always faster than AVX2. 原因是一些 CPU 可能会降频，还有编译器会 prefer  256-bit SIMD operations

## SIMD 基础知识

### What SIMD

![what-simd](/what-simd.png)

### 为什么向量化可以提升性能

![cpu-time-vector](/cpu-time-vector.png)

### SIMD Registers

![simd-registers](/simd-registers.png)

### Many Ways to Vectorize

![ways-to-vector](/ways-to-vector.png)

### Compile Auto Vectorize

- Countable loop
- Function call should be inline or simple math function
- No data dependencies
- No complex conditions

### Compile Hint Vectorize: Restrict

![vector-restrict](/vector-restrict.png)

Restrict Tells The Compile The Arrays In Distinct Locations In Memory

### How to Ensure SIMD Instructions Used

![simd-used](/simd-used.png)

![simd-used-2](/simd-used-2.png)

### Vector Intrinsics

![vector-Intrinsics](/vector-Intrinsics.png)

![vector-Intrinsics-2](/vector-Intrinsics-2.png)

<https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html>

![vector-Intrinsics-example](/vector-Intrinsics-example.png)

## SIMD 优化案例

### SIMD text parsing

### SIMD time stamps parsing

[Parsing time stamps faster with SIMD instructions](https://lemire.me/blog/2023/07/01/parsing-time-stamps-faster-with-simd-instructions/)

### SIMD data filtering

### SIMD string operations

### SIMD json

### SIMD join runtime filter

### SIMD hash table probe

![simd-hash-probe-1](/simd-hash-probe-1.png)

![simd-hash-probe-2](/simd-hash-probe-2.png)

![simd-hash-probe-3](/simd-hash-probe-3.png)

![simd-hash-probe-4](/simd-hash-probe-4.png)

### SIMD Join

![simd-hash-join](/simd-hash-join.png)

### SIMD memcpy

### SIMD memcmp

### SIMD memequal

### SIMD case when

### SIMD gather

### SIMD branchless

![simd-branch](/simd-branch.png)

<https://www.youtube.com/watch?v=g-WPhYREFjk>

### SIMD filter

![simd-filter-1](/simd-filter-1.png)

![simd-filter-2](/simd-filter-2.png)

[Starrocks optimize filter_range when avx512f available](https://github.com/StarRocks/starrocks/pull/14328/files)

### SIMD aggregate

### SIMD string to integer parser

[Faster SIMD Integer Parsing](https://kholdstare.github.io/technical/2020/05/26/faster-integer-parsing.html)

### SIMD std::find & memchr

[SIMD std::find and memchr Optimizations](https://gms.tf/stdfind-and-memchr-optimizations.html)

### SIMD bitshuffle

[Dynamic bit shuffle using SIMD AVX-512](https://lemire.me/blog/2023/06/29/dynamic-bit-shuffle-using-avx-512/)

### SIMD ascii Substring

![simd-ascii-substring](/simd-ascii-substring.png)

### 如何更好地触发向量化

#### 循环外提

<https://github.com/StarRocks/starrocks/pull/14510>

#### 循环展开

## 多平台多SIMD指令兼容

[Automatic SIMD-instruction selection](https://github.com/milvus-io/knowhere/blob/main/src/simd/hook.cc)


## 参考资料

- <https://15721.courses.cs.cmu.edu/spring2023/slides/08-vectorization.pdf>


