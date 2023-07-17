---
title: 8 生产环境的性能难题
icon: creative
---

## 数据倾斜

### 低基数 Group By + 高基数去重

两阶段去重：

```
SELECT day, COUNT(DISTINCT user_id)
FROM T
GROUP BY day
```

自动改写成

```
SELECT day, SUM(cnt)
FROM (
    SELECT day, COUNT(DISTINCT user_id) as cnt
    FROM T
    GROUP BY day, MOD(HASH_CODE(user_id), 1024)
)
GROUP BY day
```

## 慢节点

### dynamic work rebalancing

<https://cloud.google.com/blog/products/gcp/no-shard-left-behind-dynamic-work-rebalancing-in-google-cloud-dataflow>

## P99 时延

## 资源隔离

查询，导入，Compaction, Schema Change, 统计信息收集，数据均衡 等多种任务资源相互影响

![资源隔离](https://pic1.zhimg.com/80/v2-190c4c06966f0c5ce8bf92376d018b28_1440w.webp)

## 并发控制

## 大查询

## 查询重试策略

## 防止 OOM

### Spill To Disk

### Grouped Execution

### Stage By Stage
