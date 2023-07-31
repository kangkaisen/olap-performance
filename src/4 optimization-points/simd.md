---
title: SIMD
icon: creative
---

## 注意事项

1. AVX-512 is not always faster than AVX2. 原因是一些 CPU 可能会降频，还有编译器会 prefer  256-bit SIMD operations
2. 内存对齐：直接调用 SIMD 指令编程时需要注意内存对齐

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

There are three opportunities to apply SIMD for the hash tables: **hash computation and read or write values into the table.**

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

### SIMD Gather

往往内存会成为瓶颈，导致 simd gather 加速不明显。

### SIMD branchless

核心思想是每个分支都计算，然后利用 mask 选择不同分支的结果

![simd-branch](/simd-branch.png)

<https://www.youtube.com/watch?v=g-WPhYREFjk>

### SIMD filter

![simd-filter-1](/simd-filter-1.png)

![simd-filter-2](/simd-filter-2.png)

![simd-filter-3](/simd-filter-3.png)

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

### SIMD is sorted 判断

标量代码：

```C++
bool is_sorted(const int32_t* input, size_t n) {
    if (n < 2) {
        return true;
    }

    for (size_t i=0; i < n - 1; i++) {
        if (input[i] > input[i + 1])
            return false;
    }

    return true;
}
```

avx512 代码：

```C++
bool is_sorted_avx512(int32_t* a, size_t n) {

    const __m512i shuffle_pattern = _mm512_setr_epi32(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15);

    size_t i = 0;
    while (i < n - 16) {
        const __m512i curr = _mm512_loadu_si512(reinterpret_cast<const __m512i*>(a + i));
        const __m512i next = _mm512_permutexvar_epi32(shuffle_pattern, curr);

        const __mmask16 mask = _mm512_cmpgt_epi32_mask(curr, next);
        if (mask != 0) {
            return false;
        }

        i += 15;
    }

    for (/**/; i + 1 < n; i++) {
        if (a[i] > a[i + 1])
            return false;
    }

    return true;
}
```


### 如何更好地触发向量化

#### 循环外提

<https://github.com/StarRocks/starrocks/pull/14510>

#### 循环展开 Unrolled Loop

[Why are unrolled loops faster?](https://lemire.me/blog/2019/04/12/why-are-unrolled-loops-faster/)

## SIMD 收益

1. 当数据都在 CPU Cache 中时，SIMD 指令的收益最明显
2. 当一次要处理的数据集超过 Cache 容量时，Cache Miss 和 内存访问就会成为最大的 Cost
3. 所以当你已经按列处理，发现 SIMD 指令收益不明显时，就应该首先考虑是不是 Cache Miss 的原因




## 多平台多SIMD指令兼容

[Automatic SIMD-instruction selection](https://github.com/milvus-io/knowhere/blob/main/src/simd/hook.cc)


## 参考资料

- <https://15721.courses.cs.cmu.edu/spring2023/slides/08-vectorization.pdf>


