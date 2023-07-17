---
title: 7 性能测试
icon: creative
---

## 如何做好性能测试

* 对比测试：硬件环境，数据，建模等基础信息对齐 (出过很多次问题)
* 不同硬件 (核数多少，磁盘介质，出过多次问题)
* **不能只关注单并发，还要关注高并发**
* **不能只关注延迟和吞吐，还要关注资源利用率**
* **不能只关注 AVG，还要关注TP99**
* **关注性能关键指标抖动的范围**
* **不能只关注目标场景，各种典型 Workload 的查询都要测试**
* 要能压出系统的能力边界
* 要有丰富的，各种细粒度的性能监控指标
* **细致，周密，敏锐，自动化，标准化**

### 性能指标

* 计算要准确
* 含义要准确
* 名称要合理

#### latency

get a sense of how many cycles it takes to get data
from main memory and caches

- 端到端延迟
- server 端延迟
- client 端延迟
- 关注max 和 tp99 时延
- 性能黑盒探针

#### bandwidth

get a sense of how much data CPU can bring
from main memory and caches

8 bytes × DDR frequency × memory channel, per CPU socket

8 bytes × 2666 MHz × 6 channels = 128 GB/sec per socket
128 × 4 sockets = 512 GB/sec in the entire node

### 消除噪音

如何构建零干扰 CPU Benchmark 环境 <https://decodezp.github.io/2019/02/20/quickwords16-noisy-free-benchmark-env/>

## 如何发现不明显的性能回退

<https://github.com/StarRocks/starrocks/pull/23300>

## 性能测试文章

1. [Kafka vs Redpanda Performance - Do the claims add up?](https://jack-vanlightly.com/blog/2023/5/15/kafka-vs-redpanda-performance-do-the-claims-add-up)
2. [远离虚假营销，还原真实的 Flink 和 RisingWave 评测](https://mp.weixin.qq.com/s/53VBMYlgsbgx5G_I8R32mg)

