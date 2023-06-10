---
title: SIMD
icon: creative
---

## 注意事项

1. AVX-512 is not always faster than AVX2. 原因是一些 CPU 可能会降频，还有编译器会 prefer  256-bit SIMD operations

## SIMD 基础知识

### What SIMD

### SIMD Registers

### Many Ways to Vectorize

### Compile Auto Vectorize

### How to Ensure SIMD Instructions Used

### Vector Intrinsics

## SIMD 优化案例

### SIMD text parsing

### SIMD data filtering

### SIMD string operations

### SIMD json

### SIMD join runtime filter

### SIMD hash table probe

### SIMD memcpy

### SIMD memcmp

### SIMD case when

### SIMD gather

### SIMD branchless

### SIMD filter

### SIMD aggregate

### 如何更好地触发向量化

#### 循环外提

<https://github.com/StarRocks/starrocks/pull/14510>

#### 循环展开

## 参考资料

- <https://15721.courses.cs.cmu.edu/spring2023/slides/08-vectorization.pdf>


