---
title: 查询执行器优化点
icon: creative
---
### 多机执行模型

### 多核执行模型

### 单核执行模型

### 列式布局

### Batch 操作

### 按列处理

#### Shuffle By Column

### 虚函数调用

### 分支预测

5星力荐的视频教程： Branchless Programming in C++ - Fedor Pikus - CppCon 2021

<https://www.youtube.com/watch?v=g-WPhYREFjk>

分支预测的原理，以及在实际代码中的优化点都讲的很清楚

对应的 PPT 文件：

<https://github.com/CppCon/CppCon2021/blob/main/Presentations/Branchless_computing.pdf>

#### 分支取直（Branch Straightening）

#### 整数区间判断

<https://stackoverflow.com/questions/17095324/fastest-way-to-determine-if-an-integer-is-between-two-integers-inclusive-with>

### Chunk Size

### SIMD

#### SIMD text parsing

#### SIMD data filtering

#### SIMD string operations

#### SIMD json

#### SIMD join runtime filter

#### SIMD hash table probe

#### SIMD memcpy

#### SIMD memcmp

#### SIMD case when

#### SIMD gather

#### SIMD branchless

#### SIMD filter

#### SIMD aggregate

### Query Cache

### CPU Cache 优化

pack data，尽可能 touch 足够小的内存

#### 内存布局

#### Improve Locality (Spatial And Temporal)

时间局部性：Reduce cache miss when evaluate lots of expr in aggregate <https://github.com/StarRocks/starrocks/pull/15998>

#### Align The Code And Data

#### Reduce Memory Footprint

#### Block

#### Prefetch

#### Code Cache

优化实例：

<https://github.com/StarRocks/starrocks/pull/23300>

### HashTable 优化

### 表达式

#### Const 优化

#### Null 优化

### 多核优化

#### Lock

#### 调度

#### NUMA

#### Context-switches

### Runtime Filter

#### Local Join Runtime Filter

#### Global Join Runtime Filter

#### Top-N Runtime Filter

#### Runtime filter 是否 Merge

#### 自适应 Scan wait time

#### 自适应的 push down row limit

### Decimal 乘法

### IO 调度

### 全局低基数字典

### 网络传输

### 内存管理

#### 避免 Copy

#### 内存分配的连续性

#### 尽可能早的释放内存

#### 内存复用

[Enhancement] Optimize the performance for regexp_replace

<https://github.com/StarRocks/starrocks/pull/16356>

#### Memory alignment

- Unaligned store instructions that straddle a cache line incur a bit of a performance penalty.
- Unaligned store instructions that straddle a page boundary are substantially slower (taking about 4x as long to execute).
- Unaligned store instructions that do not straddle either of these boundaries are almost free on modern CPU’s

### 线程模型

### 序列化

### Operations on Encoded Data

<https://archived.docs.singlestore.com/v7.0/concepts/understanding-ops-on-encoded-data/>

可以操作数据的编码方式：

- dictionary encoding
- run-length encoding
- integer value encoding

可以优化的算子：

- Scan
- Filter
- Group By
- Aggregate
- Expressions
- Join
- Sort
- Union

### DPDK

### Code Gen

### 编译器优化

 -O3 默认开启的性能编译选项

 ```
  -finline-functions
  -ftree-loop-vectorize
  -ftree-slp-vectorize
  -funswitch-loops
  -ftree-loop-distribute-patterns
  -ffast-math

 ```

#### Link-Time Optimization (LTO)

#### Profile-Guided Optimization (PGO)

#### 代码布局

Link Order Changes function addresses

### 精确去重

### 异步

### Adaptive

#### Adaptive Join Runtime Filters Selection

#### Adaptive Streaming Aggregate

#### Adaptive Aggregate Hash Map Selection

#### Adaptive IO 并发度

#### Adaptive Filter Execution Strategy

#### Adaptive Encoding

#### Adaptive Pipeline Parallelism

### 循环相关优化

1：循环无关码外提——将循环内的某些无关代码外移，减少某些程序的反复执行
2：循环展开——减少循环条件的判断，针对循环次数少的循环
3：循环判断外提——减少每次循环的都进行判断次数
4：循环剥离——将不通用的处理起来稍微费劲一些的动作，放在循环外处理

#### 循环交换（Loop Interchange）

 内循环访问行，外循环访问列

#### 循环合并（Loop fusion）

#### 循环分块（Blocking）

#### 数组合并（Array merge）

#### 循环分解（Loop fission）

### C++ Low Level

#### 经验法则

- reserve memory for std::vector
- 编译器优化
- 函数传参时避免 copy
- 减少shared_ptr 的 copy
- Avoid the compiler ever having to consider a potential call to malloc(), or any extern function, in hot loops.
- avoid thread synchronisation anywhere inside a hot loop.
- Keep collections of data in a single contiguous block of memory as much as possible
- In multi-threading programming, **sometimes copying blocks of data can be faster than sharing via a mutex**. There are other benefits to this, such as avoiding data synchronisation pitfalls, deadlocks, priority inversions, etc.
- Choose std::unordered_set/map over std::set/map
- Choose std::streambuf and their variants over std::i/ostream when reading/writing lots of data.
- std::unique_ptr over std::shared_ptr.
- Evaluate things in constexpr if you can.
- Make as many types as possible TriviallyCopyable.
- 用 lambda 代替 std function <https://quick-bench.com/q/4IKpxAA5VEbXVziV1G2Po-ZupSE>
- std::fill 要注意模板的类型匹配   <https://travisdowns.github.io/blog/2020/01/20/zero.html>
- Multiplying and shifting is a standard technique to emulate the division.

#### Final 去虚拟化

<https://gcc.godbolt.org/z/16zMdjEjY>

- Virtual functions do not incur too much additional cost by themselves, The number one factor that is responsible for bad performance are data cache misses

- Avoiding vector of pointers on a hot path is a must

- Most overhead of virtual functions comes from small functions, they cost more to call than to execute

虚函数通常通过虚函数表来实现，在虚表中存储函数指针，实际调用时需要间接访问，这需要多一点时间。

然而这并不是虚函数速度慢的主要原因，真正原因是编译器在编译时通常并不知道它将要调用哪个函数，所以它不能被内联优化和其它很多优化，因此就会增加很多无意义的指令（准备寄存器、调用函数、保存状态等），而且如果虚函数有很多实现方法，那分支预测的成功率也会降低很多，分支预测错误也会导致程序性能下降。

#### Inline

#### memcpy

内存相关的操作对性能影响会比较大，memcpy 基础操作的优化点：

- Prefetch：小数据量时使用
- 区分内存对齐和非内存对齐的 Copy，内存对齐的simd 指令会更快
- Simd 指令加速：sse,avx,avx2,avx512 等指令
- Overlapped： to copy the last 4 <= n <= 7 bytes: copy the first & last 4 bytes。  非对齐字节，
- 不同 szie 使用不同的策略：小于8，小于16，小于32，小于256，大于256 做不同的处理
- 绕过 CPU Cache，内存直接写，避免影响 CPU Cache
- 查表法：拷贝不同小尺寸内存，直接跳转到相应地址解除循环。
- 循环展开
- 汇编优化

几个系统的优化实现，代码里面的注释可以细读：

- StarRocks: Improve performance of strings::memcpy_inlined <https://github.com/StarRocks/starrocks/pull/13330/files>
- ClickHouse: <https://github.com/ClickHouse/ClickHouse/pull/21520/files>
- folly: <https://github.com/facebook/folly/blob/master/folly/memcpy.S>
- 标准库： <https://www.zhihu.com/question/35172305>


#### memchr

<https://gms.tf/stdfind-and-memchr-optimizations.html>

#### memcmp

- <http://www.picklingtools.com/study.pdf>

- dpdk Implement memcmp using AVX/SSE instructio : <http://patchwork.dpdk.org/project/dpdk/patch/1429716828-19012-2-git-send-email-rkerur@gmail.com/>


```
+/**
+ * Compare 16 bytes between two locations.
+ * locations should not overlap.
+ */
+static inline bool
+rte_cmp16(const uint8_t *src_1, const uint8_t *src_2)
+{
+ __m128i xmm0;
+ __m128i xmm1;
+ __m128i vcmp;
+ uint32_t vmask;
+
+ xmm0 = _mm_loadu_si128((const __m128i *)src_1);
+ xmm1 = _mm_loadu_si128((const __m128i *)src_2);
+
+ vcmp = _mm_cmpeq_epi16(xmm0, xmm1);
+ vmask = _mm_movemask_epi8(vcmp);
+ return (!(vmask == 0xffffU));
+}
```

#### memequal

类似 memcmp

#### Loop Optimization

#### Unrolling

#### Resize No Initialize

#### Copy To Move

#### Std::vector

#### Code Layout

#### Compile-time Computation

#### 查表法 Table Lookup

- optimize harmonic mean evaluation in hll::estimate_cardinality <https://github.com/StarRocks/starrocks/pull/16351>
- Make your lookup table do more <https://commaok.xyz/post/lookup_tables/>

#### 编译期运算  constexpr

#### std::inplace_merge 代替 std::merge

std::inplace_merge 是原地 Merge，相比 std::merge 更省内存

<https://github.com/StarRocks/starrocks/pull/14609>

#### 用 std::variant 代替 polymorphism

#### memory_resource 优化内存分配

<http://quick-bench.com/kW0AAZlrPK0ubds9_ZMsEYvFnlI>


### 高性能第三方库

#### fmt

<https://github.com/fmtlib/fmt>

<https://www.zverovich.net/slides/2017-cppcon.pdf>

#### llfio

<https://github.com/ned14/llfio>

#### asio

<https://think-async.com/Asio/>

#### zeromq

<https://aosabook.org/en/v2/zeromq.html>

<https://zeromq.org/>

#### nanomsg

<https://github.com/nanomsg/nanomsg>

#### phmap

<https://github.com/greg7mdp/parallel-hashmap>

#### roaringbitmap

<https://roaringbitmap.org/>

#### simdjson

<https://github.com/simdjson/simdjson>

### 不同的指令集

High-performance load-time implementation Selection:

<https://github.com/CppCon/CppCon2022/blob/main/Presentations/Load-Time-Function-Selection.pdf>

### 数学相关

- Computing the number of digits of an integer even faster: <https://lemire.me/blog/2021/06/03/computing-the-number-of-digits-of-an-integer-even-faster/>
