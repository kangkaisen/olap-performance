---
title: 架构
icon: creative
---

## 数据库会成为一个平台

## 开源领域，模块的复用能力会越来越强

数据库在 用户接口（SQL 语言）层，分布式层，查询执行层，存储层 每一层都会更加统一，更加组件化。

- [Data-Parallel Actors：千行代码构建高性能 OLAP 数据库](https://blog.bcmeng.com/post/dpa.html)
- [如何快速打造一个高性能数据库原型](https://blog.bcmeng.com/post/database-prototype.html)

## 底层硬件导致架构的变更

![hardware](/hardware.png)


![Shared Nothing, Shared Disk, Shared Memory](/shared.png)

## 需求导致架构的持续迭代

- OLTP，到 OLAP， 再到 OPAP
- 从结构化数据，到半结构化数据，再到非结构化数据
- 从 Data WareHouse  到 Data Lake, 再到 LakeHouse

![lakehouse](/lakehouse.png)

## 架构设计之关键因素之间的权衡

## HTAP 数据库关键技术

- [HTAP 数据库的四大常见架构](https://mp.weixin.qq.com/s/swEx8f9oAwBHbOcLmR7IUg)

## 架构层面的常见优化


### Partitioning & Sharding

### 读写分离

### 特定场景启动专门的 Service

#### 1 Bitmap 用户行为分析 Service

#### 2 Snowflake Search Optimization Service

[Snowflake Search Optimization Service](https://docs.snowflake.com/en/user-guide/search-optimization-service)


## 资料

- [数据库学习资料](https://blog.bcmeng.com/post/database-learning.html)
- [SNOWFLAKE SUMMIT SESSIONS](https://www.snowflake.com/summit-sessions/)
- [AWS re:Invent 2022](https://www.youtube.com/playlist?list=PL2yQDdvlhXf_hIzmfHCdbcXj2hS52oP9r)
- [Foundations and Trends® in Databases](https://www.nowpublishers.com/DBS)
- [CMU Modern Analytical Database Systems](https://www.youtube.com/watch?v=7V1oi_8uvuM)
- [Comparing Three Real-Time OLAP Databases: Apache Pinot, Apache Druid, and ClickHouse](https://startree.ai/blog/a-tale-of-three-real-time-olap-databases)
- [Streaming 101 Revisited](https://docs.google.com/presentation/d/1dbCQiPNWnzWPbOvPQ0dQJHchsqQ899DacdBZDgZEUNA/edit#slide=id.p)
