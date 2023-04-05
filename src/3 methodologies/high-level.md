---
title: High Level 的优化
icon: creative
---


![](https://blog.bcmeng.com/post/media/16795404287791/16806924634553.jpg)

具体到数据库层面的优化，我们可以分为 High Level 和 Low Level 的两大类优化。 High Level 的优化主要包括：

1. 架构：比如是存储分离还是存算一体，比如 ServerLess，比如是分布式 Cache 还是 Local Cache
2. 多机 Scale Out 的能力 ：查询能不能充分利用多机的资源，查询性能 能不能随着节点 Scale Out 成比例提升
3. 多核 Scale Up 的能力：查询能不能充分利用多核的资源，查询性能 能不能随着核数 Scale Up 成比例提升
4. 执行策略：比如聚合，Join 是 Sort Based，还是 Hash Based，比如 CTE Reused，比如聚合下推
5. 执行模型：比如是否支持向量化，是否支持 Code gen，是Push 还是 Pull 等


